/**
* Ticker.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  connection: 'mongo',
  identity      : 'FinVizOwnership',
  tableName     : 'finviz_ownership',
  migrate       : 'safe',
  schema        : true,
  autoPK        : false,
  autoCreatedAt : false,
  autoUpdatedAt : false,

  attributes: {
    ticker_intel: {model: 'Ticker'},
    ticker: {type: 'string', primaryKey: true},
    shares_outstanding: {type: 'float'}, 
    shares_float: {type: 'float'},
    insider_ownership: {type: 'string'},
    insider_transactions: {type: 'string'},
    institutional_ownership: {type: 'string'},
    institutional_transactions: {type: 'string'},
    float_short: {type: 'string'},
    short_ratio: {type: 'float'},
    average_volume: {type: 'float'}
  }
};

