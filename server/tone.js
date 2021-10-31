require('dotenv/config')

const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

mytext = 'his page shares my best articles to read on topics like health, happiness, creativity, productivity and mocd  The central question that drives my work is, “How can we live better?” To answer that question, I like to write about science-based ways to solve practical problems.';


const toneAnalyzer = new ToneAnalyzerV3({
  version: '2016-05-19'
});


function Tone(text){

  return new Promise((resolve, reject) => {
    toneAnalyzer.tone({text} , function(err  , result){
      if(err){
          reject(err);
      }else{
        resolve(result.document_tone.tone_categories[0]);
      }
    });
  })
}

module.exports = Tone;