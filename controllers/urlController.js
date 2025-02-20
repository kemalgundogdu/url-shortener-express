const Url = require("../models/Url");
const crypto = require("crypto");

const shorting = async (req, res) => {
  try {
    const { longUrl } = req.body;
    const urlCode = crypto.randomBytes(4).toString("hex");

    const baseUrl = `${req.protocol}://${req.get("host")}`;
    const shortUrl = `${baseUrl}/${urlCode}`;

    const newUrl = new Url({ longUrl, urlCode, shortUrl });
    await newUrl.save();
    res.status(201).json(newUrl);
  } catch (error) {
    res
      .status(400)
      .json({ message: "There was a problem with the URL shortening process" });
  }
};

const getLongUrl = async (req, res) => {
  try {
    const { urlCode } = req.params;
    const url = await Url.findOne({
      urlCode,
    });
    if(!url) {
      return res.status(400).json({ message: "Url information could not be retrieved" });
    }
    return res.redirect(url.longUrl);
  } catch (error) {
    return res.status(400).json({ message: "Url information could not be retrieved" });
  }
};

module.exports = { shorting, getLongUrl };
