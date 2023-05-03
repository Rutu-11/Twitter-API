const Twitter = require('twitter-lite');

// Twitter API keys and access tokens
const consumer_key = "RutujaR11111653807613103026185";
const consumer_secret = "****bL328K";
const access_token_key = "AAAAAAAAAAAAAAAAAAAAAKzanAEAAAAAHu3UBR%2FCh9dPASNYfGG6jiDpY%2FQ%3DMuXn8mHazRC1iNAfHOlFYVSh6FCLzdEWKBNKrglWsfycIImHZD";
const access_token_secret = "6rcGaYRZZZVyzTmra0X8EfBJPY6D8dI5rSRxeEgTVRWK8";
// 1653804830828245018-Uo6066yYZTwGLPqxgubUjJHU33CNeq
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
