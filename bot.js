// define the dependencies
const twit = require('twit');

const config = {
  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  access_token: process.env.access_token,
  access_token_secret: process.env.access_token_secret
}

const Twitter = new twit(config);
const stream = Twitter.stream('statuses/filter', { follow: '25073877' })

// import shootings data
 const data = require('./data.json');

// start Twitter stream with callback to respond()
 stream.on('tweet', respond);
 console.log("Mass Shootings Bot Activated");

// creating the variables to hold the current place in the data and to persist it when application restarts
let x;
let i;
i > 1 ? i = x : i = 1;

// the response function
 function respond(event) {
     let current = data[i],
        victimTotal = parseInt(current[4]) + parseInt(current[5]);
        console.log(`Current Before Tweeting: ${current}`)
      console.log(event)
      i++;
      x = i;
      console.log(`Current After Tweeting: ${current}`)
 }

// send each message
 function tweetNow(tweetTxt) {
  let tweet = {
      status: tweetTxt
  }
  Twitter.post('statuses/update', tweet, function(err, data, response) {
    if(err){
      console.log(err);
    }
    else {
      console.log("Responded");
    }
  });
}
