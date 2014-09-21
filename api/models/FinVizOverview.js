/**
* Ticker.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  connection: 'mongo',
  identity      : 'FinVizOverview',
  tableName     : 'finviz_overview',
  migrate       : 'safe',
  schema        : true,
  autoPK        : true,
  autoCreatedAt : true,
  autoUpdatedAt : true,

  attributes: {
    ticker_intel: {model: 'Ticker'},
    ticker: {type: 'string'},
    company_name: {type: 'string'},
    company_sector: {type: 'string'},
    company_industry: {type: 'string'},
    company_country: {type: 'string'},
    market_cap: {type: 'float'},
    price_to_earnings: {type: 'string'},
    last_price: {type: 'float'},
    last_change: {type: 'string'},
    last_volume: {type: 'integer'}
  }
};

