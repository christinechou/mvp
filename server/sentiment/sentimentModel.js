var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sentimentSchema = new Schema({
  title: { type: String, required: true, unique: true },
  emotion: { type: Array },
  language: { type: Array },
  social: { type: Array }
});

var Sentiment = mongoose.model('Sentiment', sentimentSchema);

module.exports = Sentiment;