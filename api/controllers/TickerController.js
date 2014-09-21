/**
 * TickerController
 *
 * @description :: Server-side logic for managing Tickers
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    // index: function(req,res){
    //     return res.render('finintel')
    // }
    test: function(req, res){
        TickerIntel.find({ticker: 'RMCF'}).populate('overview').exec(function(err, record){
            console.log(record);
        });
    }
	
};

