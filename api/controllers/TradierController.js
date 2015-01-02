/**
 * TradierController
 *
 * @description :: Server-side logic for managing Articles
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    updatewatchlist: function(req,res){
        articles = Article.findOne({'ticker': 'CAT'}).exec(function(err, articles){
            console.log(articles);
            res.json(articles);
        })
    }
	
};