require('dotenv/config')

const NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');

mytext = 'his page shares my best articles to read on topics like health, happiness, creativity, productivity and mocd  The central question that drives my work is, “How can we live better?” To answer that question, I like to write about science-based ways to solve practical problems.';

const NLU = new  NaturalLanguageUnderstandingV1({
  version: '2018-04-05'
});



function nlu (text){

  const analyzeParams = {
    text ,
    'features': {
      'categories': {},
      'keywords': {},
      'sentiment': {}
    }
  };
  return new Promise((resolve, reject) => {
    NLU.analyze( analyzeParams , function(err  , result){
      if(err){
          reject(err);
      }
      resolve(result);
    });
  })

}

module.exports = nlu;