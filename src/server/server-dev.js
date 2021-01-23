import path from 'path'
import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from '../../webpack.dev.config.js'

const app = express(),
            DIST_DIR = __dirname,
            HTML_FILE = path.join(DIST_DIR, 'index.html'),
            compiler = webpack(config),
            PORT = process.env.PORT || 8080;

// Database
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const {startDatabase, getDatabase} = require('./api/common')

// alternative:
// const mongo = require('./database/mongo-common');
// mongo.startDatabase

// Other entities: Logos, CustomizationOptions, Materials, Patterns

// Bonus items: , Customer info, etc


// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
// adds a `.body` property to the request so that our
// handler functions can easily work with that incoming data
app.use(bodyParser.json());

// enabling CORS for all requests (not very secure)
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}))

app.use(webpackHotMiddleware(compiler))

app.get('*', (req, res, next) => {
  compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
  if (err) {
    return next(err)
  }
  res.set('content-type', 'text/html')
  res.send(result)
  res.end()
  })
})

// connect to our database
// https://www.mongodb.com/
startDatabase().then(async () => {
  app.listen(PORT, async () => {
    console.log(`connected to db successfully`)
  });
});

