/**
* Ticker.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  connection: 'mongo',
  identity      : 'FinVizTechnical',
  tableName     : 'finviz_technical',
  migrate       : 'safe',
  schema        : true,
  autoPK        : false,
  autoCreatedAt : false,
  autoUpdatedAt : false,

  attributes: {
    ticker_intel: {model: 'Ticker'},
    ticker: {type: 'string', primaryKey: true},
    beta: {type: 'float'}, 
    average_true_range: {type: 'float'},
    twenty_day_simple_moving_average: {type: 'string'},
    fifty_day_simple_moving_average: {type: 'string'},
    two_hundred_day_simple_moving_average: {type: 'string'},
    fifty_two_week_high: {type: 'string'},
    fifty_two_week_low: {type: 'string'},
    relative_strength_index: {type: 'float'},
    change_from_open: {type: 'string'},
    gap_on_open: {type: 'string'}
  }
};

