# Remembering the Victims: A Mass Shootings Remembrance Twitter Bot
Created by ![Ben Greenberg](https://www.bengreenberg.org)

## Overview

This is a simple Twitter bot that will respond to each tweet by President Donald Trump's twitter account (@realdonaldtrump) with a reminder of a recent mass shooting from 2017.

The bot is created with NodeJS and uses the twit node package to communicate with Twitter. The data comes from the ![Gun Violence Archive](http://www.gunviolencearchive.org/).

## Installation

To run this locally do the following:

1. Fork the repository
2. Clone it to your computer
3. Run `npm install` to install the dependencies
3. Go to Twitter's developer page to register a new app and obtain your API keys
4. Add your API keys as environment variables by running `export THE KEY=YOUR KEY` for each one of the keys
5. Run `npm start` to run your Twitter bot locally
6. You can deploy to services like Heroku to run the bot, making sure to add the API keys environment variables there

## License

This bot is licensed under the MIT license.

## Contact

Feel free to get in touch with me if you have any suggestions or comments at ![bengreenberg.org](https://www.bengreenberg.org)
