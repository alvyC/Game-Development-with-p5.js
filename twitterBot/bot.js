console.log("The bot is starting");

var Twit = require('twit');

var config = require('./config');
console.log(config);

var T = new Twit(config);