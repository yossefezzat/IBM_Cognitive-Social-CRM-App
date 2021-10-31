require('dotenv').config();
var TwitterStream = require('twitter-stream-api'),
    fs = require('fs');
var keys = {

        consumer_key : process.env.CONSUMER_KEY + "",
        consumer_secret : process.env.CONSUMER_SECRET + "",
        token : process.env.TOKEN + "",
        token_secret : process.env.TOKEN_SECRET + ""
    };

function init(insert, env){
    
    console.log(keys);

    var Twitter = new TwitterStream(keys, false);
    Twitter.stream('statuses/filter', {
        track: '#ibm'
    });

Twitter.on('connection error network', function (error) {
    console.log('connection error network', error);
});
Twitter.on('connection aborted', function () {
    console.log('connection aborted');
});
Twitter.on('connection success', function (uri) {
    console.log('connection success', uri);
});
Twitter.on('connection error stall', function () {
    console.log('connection error stall');
});
Twitter.on('connection error http', function (httpStatusCode) {
    console.log('connection error http', httpStatusCode);
});
Twitter.on('connection rate limit', function (httpStatusCode) {
    console.log('connection rate limit', httpStatusCode);
});
Twitter.on('connection error unknown', function (error) {
    console.log('connection error unknown', error);
    Twitter.close();
});
     Twitter.on('data',  async (obj) => {
        const tweet = JSON.parse(obj.toString());
        const timestamp = tweet.created_at;
        const tweetID = tweet.id;
        let tweetText = tweet.text;
        const extended = tweet.extended_tweet;
        if(tweet.truncated){
            tweetText = extended.full_text;
        }
        let entities = (extended || {}).entities || tweet.entities;
        let username = tweet.user.screen_name;
        let displayName = tweet.user.name;
        let userID = tweet.user.id;
        let userImageURL = tweet.user.profile_image_url_https;
        let tweet_toStore = {
            timestamp, 
            tweetID, 
            tweetText, 
            entities, 
            username, 
            displayName, 
            userID, 
            userImageURL
        }
    
        insert(tweet_toStore);
    })
    
}
    

module.exports = init ;
