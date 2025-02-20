const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/short-url");
    console.log("MongoDB bağlantısı başarılı");
  } catch (err) {
    console.error("MongoDB bağlantı hatası:", err);
    process.exit(1); // Hata durumunda uygulamayı kapat
  }
};

module.exports = connectDB