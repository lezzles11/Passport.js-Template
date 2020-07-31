const express = require("express");
const passport = require("passport");
const Strategy = require("passport-local").Strategy;
// the two functions are find by id and find by username
const models = require("./models");
const app = express();

// Strategy is the initial configuration
passport.use(
  new Strategy(function (username, password, callback) {
    models.users.findByUsername(username, function (err, user) {
      if (err) {
        return callback(err);
      }
      if (!user) {
        return callback(null, false);
      }
      if (user.password != password) {
        return callback(null, false);
      }
      return callback(null, user);
    });
  })
);
passport.serializeUser(function (user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function (id, cb) {
  models.users.findById(id, function (err, user) {
    if (err) {
      return cb(err);
    }
    cb(null, user);
  });
});

// Express configuration
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(require("morgan")("combined"));
app.use(require("body-parser").urlencoded({ extended: true }));
app.use(
  require("express-session")({
    secret: "supersecret",
    resave: false,
    saveUninitialized: false,
  })
);

// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize());
app.use(passport.session());

// Define routes.
app.get("/", function (req, res) {
  res.render("home", { user: req.user });
});

app.get("/login", function (req, res) {
  res.render("login");
});

app.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/login" }),
  function (req, res) {
    res.redirect("/");
  }
);

app.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

app.get("/profile", require("connect-ensure-login").ensureLoggedIn(), function (
  req,
  res
) {
  res.render("profile", { user: req.user });
});

app.listen(3000, () => {
  console.log("Listening on port 3000!");
});
