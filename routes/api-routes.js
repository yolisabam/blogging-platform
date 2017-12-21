const db       = require("../models");
const express  = require("express");     
const passport = require("passport"); 


const NewsAPI = require("newsapi");
const newsapi = new NewsAPI("3e41864bbb6d4719a2cebfdf71e27156");
const cron = require("node-cron");

const router = express.Router();
