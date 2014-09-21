/**
* Ticker.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  connection: 'mongo',
  identity      : 'Strategy',
  tableName     : 'strategy',
  migrate       : 'safe',
  schema        : true,
  autoPK        : false,
  autoCreatedAt : false,
  autoUpdatedAt : false,

  attributes: {
    ticker_intel: {model: 'Ticker'},
    ticker: {type: 'string', primaryKey: true},
    cycle_position: {type: 'string'},
    macro_strategy: {type: 'string'},
    tactical_strategy: {type: 'string'},
    guidance: {type: 'string'},
    portfolio: {type: 'boolean'},
    watchlist: {type: 'boolean'}
  }
};

