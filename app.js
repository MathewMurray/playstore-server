'use strict';

const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('common')); // let's see what 'common' format looks like
const apps = require('./playstore.js');

app.get('/apps', (req, res) => {
  const { sort } = req.query;
    sortParams = {"rating", "app"}
  if(!sort || !sort === sortParams ){
      res.status(400).send('please provide a sort parameter')
  }
  res.json(apps);
});

app.listen(8000, () => {
  console.log('Server started on PORT 8000');
});