// define the dependencies
const twit = require('twit');

const config = {
  consumer_key: "",
  consumer_secret: "",
  access_token: "",
  access_token_secret: ""
}

const Twitter = new twit(config);
const stream = Twitter.stream('user');

// import shootings data
 const data = require('./data.json');
