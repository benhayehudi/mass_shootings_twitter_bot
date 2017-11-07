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

// creating the variables to hold the current place in the data and to persist
// it when application restarts
let x;
let i;
if (i > 1) {
  i = x
} else if (i > data.length) {
  i = 1
} else {
  i = 1
}

// New retweet function, sends message directed to individual people.

let retweet = function() {
  let current = data[i],
     victimTotal = parseInt(current[4]) + parseInt(current[5]),
     params = {
        q: '@realdonaldtrump, #nra',
        result_type: 'recent',
        lang: 'en'
      }

    Twitter.get('search/tweets', params, function(err, data) {
        if (!err) {
          for (let n = 0; n <= 3; n++) {
          // let rtId = data.statuses[n].id_str;
          let screenName = data.statuses[n].screen_name;
          //  Retweet
          Twitter.post('statuses/update', { status: `.@${data.statuses[n].user.screen_name}: ${current[0]} - ${current[2]}: ${victimTotal} ppl were killed & injured w/guns. RT https://twitter.com/${data.statuses[n].user.screen_name}/statuses/${data.statuses[n].id_str} #guncontrol #gunviolence`
             },
            function(err, data, response) {
              if (response) {
                i++;
                x = i;
                console.log("Tweeted a response.");
              }
              if (err) {
                console.log(`There was an error: ${err}`);
              }
            });
          }
        }
        else {
          console.log('Could not execute the search tweets function.');
        }
    });
}

retweet();
// interval at every 40 minutes
setInterval(retweet, 2000000);


// pre-refactored version of tweet function

// let tweet = function() {
//   let current = data[i],
//      victimTotal = parseInt(current[4]) + parseInt(current[5]);
//
//   Twitter.post('statuses/update', { status: `.@realdonaldtrump -
//     Never forget ${current[0]} in ${current[2]}, ${current[1]}
//     when ${victimTotal} people were killed & injured. #gunviolence` },
//     function(err, data, response) {
//     if (response) {
//       i++;
//       x = i;
//       console.log("Tweeted to Donald Trump")
//       console.log(`i is now: ${i}`);
//       console.log(`x is now ${x}`);
//     }
//     if (err) {
//       console.log(`There was an error: ${err}`);
//     }
//   });
// }
//
// tweet();
// setInterval(tweet, 3600000);
