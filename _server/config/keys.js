const TWITTER_TOKENS = {
  TWITTER_CONSUMER_SECRET: '',
TWITTER_CONSUMER_KEY: '',
TWITTER_ACCESS_TOKEN: "",
TWITTER_TOKEN_SECRET: ""
};

const MONGODB = {
  MONGODB_URI: `mongodb+srv://username:password@cluster0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
};

const SESSION = {
  COOKIE_KEY: "thisappisawesome"
};

const KEYS = {
  ...TWITTER_TOKENS,
  ...MONGODB,
  ...SESSION
};

module.exports = KEYS;
