require('dotenv').config();
const express = require('express');
const app = express();
const http = require('http');

var nlu = require('./NLU.js');
var tone = require('./tone.js');

var tweetsInit  = require('./twitter.js');

var Cloudant = require('@cloudant/cloudant');
 
// Initialize the library with my account.
var cloudant = Cloudant({account:process.env.CLOUDANT_ME, password:process.env.CLOUDANT_PSW});



// let tweets = [];
    tweetsInit(async (tweet) =>{
        console.log('onData callback is called');
        tweet.tone = await tone(tweet.tweetText);
        tweet.nlu = await nlu(tweet.tweetText);
        // tweets.push(tweet);

        cloudant.db.create('newTweet', function(){
            // Specify the database we are going to use (alice)...
            var newTweet = cloudant.db.use('twitter_analysis')
            
            // ...and insert a document in it.
            newTweet.insert(tweet, function(err, body, headers) {});
        });
        
        
    }, process.env);


app.get('/tweets', async (req, res) => {
    const db = cloudant.db.use('twitter_analysis');
    
    const data = await db.view('last_tweets','tweets', {
        limit: 15,
        descending: true,
        desc: true,
        skip: req.query.skipCount
    });
    res.send(data);

});


app.get('/sentiment_analysis', async (req, res) => {
    const db = cloudant.db.use('twitter_analysis');

    const pos = await db.view('sentiment_chart','sentiment', {
        key: "positive"
    });
    
    const neg = await db.view('sentiment_chart','sentiment', {
        key: "negative"
    });

    const neutral = await db.view('sentiment_chart','sentiment', {
        key: "neutral"
    });
    res.send({
        positive: pos.rows[0].value,
        negative: neg.rows[0].value,
        neutral: neutral.rows[0].value,
    })
});

app.get('/keywords', async (req, res) => {
    const db = cloudant.db.use('twitter_analysis');


    const {rows} = await db.view('keywords_chart','keywords', {});

    let keywords = {}
    for(const row of rows){
        if(keywords[row.key]){
            keywords[row.key] += row.value;
        }else{
            keywords[row.key] = row.value;
        }
    }

    const keys = Object.keys(keywords);
    let data = [];
    for(const key of keys){
        data.push({
            text: key,
            count: keywords[key]
        });
    }

    res.send(data);
});


app.get('/sentiment/over-time', async (req, res) => {
    const db = cloudant.db.use('twitter_analysis');

    const {rows} = await db.view('sentiment_chart','overTime');
    const values = rows.map(row => {
        const {value} = row;
        const startTime = new Date('Mon Jul 22 09:52:10 +0000 2019');
        const currTime = new Date(value.time);
        const _dayIndex = (currTime.getTime() - startTime.getTime()) / (1000 * 60 * 60 * 24);
        value.dayIndex = Math.round(_dayIndex);
        return value;
    });
    const groupedByDayIndex = [];
    for(const value of values){
        if(groupedByDayIndex[value.dayIndex]){
            groupedByDayIndex[value.dayIndex][value.label]++;
        }else{
            groupedByDayIndex[value.dayIndex] = {
                positive: value.label === "positive" ? 1 : 0,
                negative: value.label === "negative" ? 1 : 0,
                neutral: value.label === "neutral" ? 1 : 0,
                time: value.time
            };
        }
    }

    res.send(groupedByDayIndex);

});

app.get('/emotion/over-time', async (req, res) => {
    const db = cloudant.db.use('twitter_analysis');

    const {rows} = await db.view('emotion','overTime');
    const values = rows.map(row => {
        const {value} = row;
        const startTime = new Date('Mon Jul 22 09:52:10 +0000 2019');
        const currTime = new Date(value.time);
        const _dayIndex = (currTime.getTime() - startTime.getTime()) / (1000 * 60 * 60 * 24);
        const item = {
            score: value.tone.score,
            tone_id: value.tone.tone_id,
            tone_name: value.tone.tone_name,
            dayIndex: Math.round(_dayIndex)
        }
        return item;
    });


    const groupedByDayIndex = [];
    for(const value of values){
        if(groupedByDayIndex[value.dayIndex]){
            groupedByDayIndex[value.dayIndex][value.tone_id] += value.score;
        }else{
            groupedByDayIndex[value.dayIndex] = {
                anger: value.tone_id === "anger" ? value.score : 0,
                disgust: value.tone_id === "disgust" ? value.score : 0,
                fear: value.tone_id === "fear" ? value.score : 0,
                joy: value.tone_id === "joy" ? value.score : 0,
                sadness: value.tone_id === "sadness" ? value.score : 0,
                analytical: value.tone_id === "analytical" ? value.score : 0,
                confident: value.tone_id === "confident" ? value.score : 0,
                tentative: value.tone_id === "tentative" ? value.score : 0,
                time: value.time
            };
        }
    }

    res.send(groupedByDayIndex);

});


const port  = process.env.PORT || 3000;


const server  = http.createServer(app);

server.listen(port);
