console.log("The bot is starting");

var Twit = require('twit');

var config = require('./config');
console.log(config);

var T = new Twit(config);

/* Get tweet */
var params = {
  q: 'rainbow',
  count: 2
}

T.get('search/tweets', params, gotData);

function gotData(err, data, response) {
  var tweets = data.statuses;
  for (var i = 0; i < tweets.length; i++) {
    console.log(tweets[i].text);
  }
}

// setting up a user stream
var stream = T.stream('user');

// Anytime someone follows me
stream.on('follow', followed);

function followed(eventMsg) {
  console.log("Follow event!");
  var name = eventMsg.source.name;
  var screenName = eventMsg.source.screen_name;
  replyFollower('@' + screenName + ' do you like rainbows?');
}

// setInterval(tweetIt, 1000*20); // If we want to tweet in every 20 seconds.
// tweetIt();

/* Post tweet */
function tweetIt() {
  var r = Math.floor(Math.random()*1000);

  var tweet = {
    status: 'here is a random number ' + r + ' #codingrainbow from node.js'
  }

  T.post('statuses/update', tweet, tweeted);

  function tweeted(err, data, response) {
    if (err) {
      console.log("Something went wrong!!");
    }
    else {
      console.log("It worked.");
    }
  }
}

function replyFollower(txt) {
  var tweet = {
    status: txt
  }

  T.post('statuses/update', tweet, tweeted);

  function tweeted(err, data, response) {
    if (err) {
      console.log("Something went wrong!!");
    }
    else {
      console.log("It worked.");
    }
  }
}