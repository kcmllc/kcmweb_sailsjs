/**
* Ticker.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  connection: 'mongo',
  identity      : 'FinVizPerformance',
  tableName     : 'finviz_performance',
  migrate       : 'safe',
  schema        : true,
  autoPK        : false,
  autoCreatedAt : false,
  autoUpdatedAt : false,

  attributes: {
    ticker_intel: {model: 'Ticker'},
    ticker: {type: 'string', primaryKey: true},
    performance_week: {type: 'string'}, 
    performance_month: {type: 'string'},
    performance_quarter: {type: 'string'},
    performance_half_year: {type: 'string'},
    performance_year: {type: 'string'},
    performance_ytd: {type: 'string'},
    volatility_week: {type: 'string'},
    volatility_month: {type: 'string'},
    analyst_recom: {type: 'float'},
    average_volume: {type: 'float'},
    relative_volume: {type: 'float'}
  }
};

