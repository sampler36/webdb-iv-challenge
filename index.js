// Manage cohorts (id, name)
const express = require('express');
const helmet = require('helmet');
const knex = require('knex');
const knexConfig = require('./knexfile').development;

const db = knex(knexConfig);

const server = express();

server.use(helmet());
server.use(express.json());

// 

// 
const port = process.env.PORT || 1000;
server.listen(port, () =>
  console.log(`\n** API running on http://localhost:${port} **\n`)
);
