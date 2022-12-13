const express = require("express");
let router = express();
const expressSession = require("express-session");
const MemoryStore = require("memorystore")(expressSession);
const fs = require("fs");
const ejs = require("ejs");
//const bcryptjs = require('bcryptjs');
const passport = require("passport");
//const googleAuth = require("./controllers/googleAuth");
const path = require("path");
const NodeCache=require("node-cache")
const myCache = new NodeCache();

require("../controllers/googleAuth")(passport);
require("../controllers/passportLocal")(passport);

// router.use(
//   expressSession({
//     secret: "random",
//     resave: true,
//     saveUninitialized: true,
//     // setting the max age to longer duration
//     maxAge: 24 * 60 * 60 * 1000,
//     store: new MemoryStore(),
//     cookie:{
//       path:"http://localhost:5000",
//       maxAge:'60000000000'
//     }
//   })
// );

router.use(passport.initialize());
router.use(passport.session());

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.use(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    // console.log("google call back----------->");

    //console.log("session--->",req.session,req.body)
    //  res.redirect('https://www.google.com');
    // Our start code here

    const user = req.session.passport.user;
    //console.log("user---",user);
    
    
  //  // const id = user.id;
  //   const displayName = user.displayName;
  //   const email = user.emails[0].value;
  //   const imglink = user.photos[0].value;

  //   let conpath = path.join(__dirname, "..", "views", "conform.ejs");
  //   const send = fs.readFileSync(conpath, "utf8");
  //   //console.log("ejs template",send);
  //   const sendingitem = ejs.render(send, {
  //     //id: id,
  //     email: email,
  //     link: imglink,
  //     Name: displayName,
  //   });
  //   //console.log("hi",sendingitem)
  //   res.send(sendingitem);

    //Our end code here
    res.redirect("http://localhost:5000/admin/register");
  }
);

//router.use(userRoutes);

module.exports = router;
