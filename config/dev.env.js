'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_URL: '`https://testsoat.interseguro.com.pe/travel-api/api/v1/`',
  ROUTER_BASE: '`/`'
})
