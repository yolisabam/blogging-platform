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