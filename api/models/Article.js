/**
* Article.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  connection  : 'mongo',
  identity      : 'Article',
  tableName     : 'news_articles',
  migrate       : 'safe',
  schema        : true,
  autoPK        : false,
  autoCreatedAt : false,
  autoUpdatedAt : false,
  attributes: {
    id : { type: 'integer' },
    publication_name: { type: 'string' },
    publication_date: { type: 'date' },
    article_title: { type: 'string' },
    article_text: { type: 'text' },
    article_tags: {type: 'string' },
    ticker: { type: 'string' }, 
    thoughts_response: {type: 'string'}
  }
};

