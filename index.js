const Twitter = require('twitter-lite');

// Twitter API keys and access tokens
const consumer_key = process.env.consumer_key;
const consumer_secret = process.env.consumer_secret
const access_token_key = process.env.access_token_key
const access_token_secret = process.env.access_token_secret

// Authenticate with the Twitter API
const client = new Twitter({
  consumer_key,
  consumer_secret,
  access_token_key,
  access_token_secret,
});

// Define the filter rules
const filter_rules = [{ value: 'from:twitter_username' }];

// Stream tweets that match the filter rules
const stream = client.stream('tweets/search/stream', { 
  expansions: ['author_id'],
  'user.fields': ['username', 'name', 'profile_image_url'],
  'tweet.fields': ['created_at', 'text'],
  'media.fields': ['url'],
  'place.fields': ['full_name'],
  'poll.fields': ['options'],
  'max_results': 100
});

stream.on('start', () => console.log('Streaming started'));
stream.on('ping', () => console.log('Ping received'));
stream.on('data', (tweet) => console.log(tweet.text));
stream.on('error', (error) => console.error(error));
