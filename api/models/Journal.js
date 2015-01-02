/**
* Journal.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  connection: 'mongo',
  identity      : 'Journal',
  tableName     : 'journal',
  migrate       : 'safe',
  schema        : true,
  autoPK        : true,
  autoCreatedAt : true,
  autoUpdatedAt : true,

  attributes: {
    journal_titel: {type: 'string'},
    journal_text: {type: 'string'},

  }
};


