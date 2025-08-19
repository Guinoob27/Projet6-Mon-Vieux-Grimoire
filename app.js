
const express = require("express");

const mongoose = require("mongoose");

const app = express();
const bookRoutes = require("./routes/book");
const userRoutes = require("./routes/user");


mongoose.connect(
  "mongodb+srv://user1:iJIilt5T8gwUQIlv@cluster0.79agfo2.mongodb.net/books?retryWrites=true&w=majority"
)
  .then(() => console.log("✅ Connecté à MongoDB !"))
  .catch(err => console.error("❌ Erreur :", err));

app.use(express.json()); // Middleware permettant d'avoir acces au body de la requete


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});



app.use("/api/books", bookRoutes);
app.use("/api/auth", userRoutes);

module.exports = app;
