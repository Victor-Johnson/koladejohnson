'use strict';

const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');


app.use(cors());
const port = process.env.PORT || 3000;
app.use(express.json());
