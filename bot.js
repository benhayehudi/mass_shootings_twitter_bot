// define the dependencies
const twit = require('twit');

const config = {
  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  access_token: process.env.access_token,
  access_token_secret: process.env.access_token_secret
}

const Twitter = new twit(config);
const stream = Twitter.stream('statuses/filter', { follow: '@realdonaldtrump, ' })

// import shootings data
 const data = require('./data.json');

// start Twitter stream with callback to respond()
 stream.on('tweet', respond);
 console.log("Mass Shootings Bot Activated");

// the response function
 function respond(event) {
   let screenName = event.source.screen_name;
     let i = 1,
        current = data[i],
        next = data[i+1],
        victimTotal = parseInt(current[4]) + parseInt(current[5]);
        console.log(`Current Before Tweeting: ${current}`)
        console.log(`Next Before Tweeting: ${next}`)
      tweetNow('.@' + screenName + ` - Never forget ${current[0]} in ${current[2]}, ${current[1]} when ${victimTotal} people were killed & injured. #gunviolence #MassShootings`);
      current = next;
      next = data[i+1];
      console.log(`Current After Tweeting: ${current}`)
      console.log(`Next After Tweeting: ${next}`)
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
