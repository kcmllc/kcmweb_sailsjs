/**
* Ticker.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  connection: 'mongo',
  identity      : 'FinVizValuation',
  tableName     : 'finviz_valuation',
  migrate       : 'safe',
  schema        : true,
  autoPK        : false,
  autoCreatedAt : false,
  autoUpdatedAt : false,

  attributes: {
    ticker_intel: {model: 'Ticker'},
    ticker: {type: 'string', primaryKey: true},
    forward_price_to_earnings: {type: 'float'}, 
    price_earnings_growth: {type: 'float'},
    price_to_sales: {type: 'float'},
    price_to_book: {type: 'float'},
    price_to_cash: {type: 'float'},
    price_to_fcf: {type: 'float'},
    eps_growth_this_year: {type: 'string'},
    eps_growth_next_year: {type: 'string'},
    eps_growth_past_five_years: {type: 'string'},
    eps_growth_next_five_years: {type: 'string'},
    sales_growth_past_five_years: {type: 'string'}
  }
};

