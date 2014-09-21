/**
* Ticker.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  connection: 'mongo',
  identity      : 'FinVizFinancial',
  tableName     : 'finviz_financial',
  migrate       : 'safe',
  schema        : true,
  autoPK        : false,
  autoCreatedAt : false,
  autoUpdatedAt : false,

  attributes: {
    ticker_intel: {model: 'Ticker'},
    ticker: {type: 'string', primaryKey: true},
    dividend_yield: {type: 'string'}, 
    return_on_assets: {type: 'string'},
    return_on_equity: {type: 'string'},
    return_on_investment: {type: 'string'},
    current_ratio: {type: 'float'},
    quick_ratio: {type: 'float'},
    long_term_debt_equity: {type: 'float'},
    debt_equity: {type: 'float'},
    gross_margin: {type: 'string'},
    operating_margin: {type: 'string'},
    profit_margin: {type: 'string'},
    next_earnings_date: {type: 'datetime'}
  }
};

