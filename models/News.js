const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
  image: String,
  headline: String,
  description: String,
});

const News = mongoose.model("News", newsSchema);

module.exports = News;
