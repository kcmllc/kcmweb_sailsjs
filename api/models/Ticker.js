/**
* Ticker.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  connection: 'mongo',
  identity      : 'Ticker',
  tableName     : 'ticker',
  migrate       : 'safe',
  schema        : true,
  autoPK        : false,
  autoCreatedAt : false,
  autoUpdatedAt : false,

  attributes: {
    ticker: {type: 'string', primaryKey: true},
    strategy: {collection: 'Strategy', via: 'ticker_intel'},
    overview: {collection: 'FinVizOverview', via: 'ticker_intel'},
    financials: {collection: 'FinVizFinancial', via: 'ticker_intel'},
    valuation: {collection: 'FinVizValuation', via: 'ticker_intel'}, 
    ownership: {collection: 'FinVizOwnership', via: 'ticker_intel'},
    performance: {collection: 'FinVizPerformance', via: 'ticker_intel'}, 
    technicals: {collection: 'FinVizTechnical', via: 'ticker_intel'}
  }
};

