const express = require("express");
const logger = require("morgan");
const config = require("config");
let ejs = require("ejs");
let path = require("path");
const http = require("http");
const multer  = require('multer');
const passport = require('passport');
const cors =require("cors");
const expressSession=require("express-session");
const MemoryStore = require('memorystore')(expressSession)

// const User = require('./models/User'); 
const app = express();
const { viewRoutes ,authRoutes,googleAuthRoutes} = require("./routes");

app.use(cors())

app.use(logger("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  expressSession({
    secret: "random",
    resave: true,
    saveUninitialized: true,
    // setting the max age to longer duration
    maxAge: 24 * 60 * 60 * 1000,
    store: new MemoryStore(),
  })
);
// var models = require("./models");
// models.sequelize
//   .sync()
//   .then(function () {
//     console.log("Database Working Fine");
//   })
//   .catch(function (err) {
//     console.log("err", err);
//   })





const PORT = process.env.PORT || config.get("port") || 3000;
app.set("port", PORT);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/", (req, res, next) => {
    
    res.render("welcome.ejs");
  });

// app.use("/distance", distanceRoute);
app.use("/admin", viewRoutes);
app.use("/auth", authRoutes);
app.use("/googleauth", googleAuthRoutes)


const server = http.createServer(app);
server.listen(PORT);

module.exports = app;