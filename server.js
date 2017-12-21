const express     = require("express");
const method      = require("method-override");
const bodyParser  = require("body-parser");
const fileUpload  = require("express-fileupload");

const app  = express();
const PORT = process.env.PORT || 3033;

const passport      = require("passport");
const flash         = require("connect-flash");
const cookieParser  = require("cookie-parser");
const session       = require("express-session");

//config//

const db = require("./models");
require("./config/passport")(passport); //setting up passport for config

//setting up express application
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.text());
app.use(bodyParser.json(type: "application/vnd.api+json"}));

app.use(express.statuc("public"));
app.use(function(error, request, response, next) {
  console.log(error);
});

//Setting up Handlebars
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//required for passport

app.use(session({
    key: "user_sid",
    secret: "rxqklappizbxbwoy",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}));


