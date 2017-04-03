console.log("The bot is starting");

var Twit = require('twit');

var config = require('./config');
console.log(config);

var T = new Twit(config);

/* Get tweet */
var params = {
  q: 'rainbow',
  count: 100
}

T.get('search/tweets', params, gotData);

function gotData(err, data, response) {
  var tweets = data.statuses;
  for (var i = 0; i < tweets.length; i++) {
    console.log(tweets[i].text);
  }
}

/* Post tweet */
var tweet = {
  status: '#codingrainbow from node.js'
}

T.post('statuses/update', tweet, tweeted);

function tweeted(err, data, response) {
  console.log(data);
}