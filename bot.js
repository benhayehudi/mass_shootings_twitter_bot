// define the dependencies
const twit = require('twit');

const config = {
  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  access_token: process.env.access_token,
  access_token_secret: process.env.access_token_secret
}

const Twitter = new twit(config);

// import shootings data
 const data = require('./data.json');

 console.log("Mass Shootings Bot Activated");

// creating the variables to hold the current place in the data and to persist it when application restarts
let x;
let i;
if (i > 1) {
  i = x
} else if (i > data.length) {
  i = 1
} else {
  i = 1
}

// the response function

let tweet = function() {
  let current = data[i],
     victimTotal = parseInt(current[4]) + parseInt(current[5]);

          Twitter.post('statuses/update', { status: `.@realdonaldtrump - Never forget ${current[0]} in ${current[2]}, ${current[1]} when ${victimTotal} people were killed & injured. #gunviolence` }, function(err, data, response) {
            if (response) {
              i++;
              x = i;
              console.log("Tweeted to Donald Trump")
              console.log(`i is now: ${i}`);
              console.log(`x is now ${x}`);
            }
            if (err) {
              console.log(`There was an error: ${err}`);
            }
          });
        }

tweet();
setInterval(tweet, 3600000);
