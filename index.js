const express = require("express");
const app = express();
const port = 3001;
const connectDB = require("./config/db");
const cors = require("cors");
connectDB();

// import routes
const urlRoutes = require("./routes/url");
const { getLongUrl } = require("./controllers/urlController");

app.use(express.json());
app.use(cors());

// EJS ayarları
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/", (req, res) => {
  res.render('index');
});

app.use("/url", urlRoutes);
app.get("/:urlCode", getLongUrl);

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
