const express = require("express");
const mongoose = require("mongoose");
const db = require('./models');

const PORT = process.env.PORT || 3000;

const app = express();