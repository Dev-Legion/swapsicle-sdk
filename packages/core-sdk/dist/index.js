
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./siclecore-sdk.cjs.production.min.js')
} else {
  module.exports = require('./siclecore-sdk.cjs.development.js')
}
