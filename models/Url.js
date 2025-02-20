const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  shortUrl: { type: "String", required: true },
  longUrl: { type: "String", required: true },
  urlCode: { type: "String", required: true },
  date: { type: "Date", default: Date.now },
});

module.exports = mongoose.model("Url", urlSchema);
