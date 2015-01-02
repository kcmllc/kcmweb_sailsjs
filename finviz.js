var request = require('request');
var csv = require('csv-streamify');
var db = require('monk')('localhost/fin_intel');

var finviz_overview = db.get('finviz_overview');
var finviz_financial = db.get('finviz_financial');
var finviz_valuation = db.get('finviz_valuation');
var finviz_ownership = db.get('finviz_ownership');
var finviz_performance = db.get('finviz_performance');
var finviz_technical = db.get('finviz_technical');
var ticker = db.get('ticker');

var empty_ticker = ticker.remove({}, function(err){
        if(err){console.log(err); return;}
    });
var empty_finviz_overview = finviz_overview.remove({}, function(err){
        if(err){console.log(err); return;}
    });
var empty_finviz_valuation = finviz_valuation.remove({}, function(err){
        if(err){console.log(err); return;}
    });
var empty_finviz_financial = finviz_financial.remove({}, function(err){
        if(err){console.log(err); return;}
    });
var empty_finviz_ownership = finviz_ownership.remove({}, function(err){
        if(err){console.log(err); return;}
    });
var empty_finviz_performance = finviz_performance.remove({}, function(err){
        if(err){console.log(err); return;}
    });
var empty_finviz_technical = finviz_technical.remove({}, function(err){
        if(err){console.log(err); return;}
    });
    
var overview_parser = csv({objectMode: true, columns: true});
var valuation_parser = csv({objectMode: true, columns: true});
var financial_parser = csv({objectMode: true, columns: true});
var ownership_parser = csv({objectMode: true, columns: true});
var performance_parser = csv({objectMode: true, columns: true});
var technical_parser = csv({objectMode: true, columns: true});

overview_parser.on('readable', function(){
    var row = overview_parser.read();
    finviz_overview.insert({
        ticker_intel: row['Ticker'],
        ticker: row['Ticker'],
        company_name: row['Company'], 
        company_sector: row['Sector'],
        company_industry: row['Industry'],
        company_country: row['Country'],
        market_cap: row['Market Cap'],
        price_to_earnings: row['P/E'],
        last_price: row['Price'],
        last_change: row['Change'],
        last_volume: row['Volume\r']
    }, function(err, doc){ if (err) throw err;});
    ticker.insert({ticker: row['Ticker']});
});

valuation_parser.on('readable', function(){
    var row = valuation_parser.read();
    finviz_valuation.insert({
        ticker_intel: row['Ticker'],
        ticker: row['Ticker'],
        forward_price_to_earnings: row['Forward P/E'], 
        price_earnings_growth: row['PEG'],
        price_to_sales: row['P/S'],
        price_to_book: row['P/B'],
        price_to_cash: row['P/Cash'],
        price_to_fcf: row['P/Free Cash Flow'],
        eps_growth_this_year: row['EPS growth this year'],
        eps_growth_next_year: row['EPS grow next year'],
        eps_growth_past_five_years: row['EPS growth past 5 years'],
        eps_growth_next_five_years: row['EPS growth next 5 years'],
        sales_growth_past_five_years: row['Sales growth past 5 years']
    }, function(err, doc){ if (err) throw err;});
});

financial_parser.on('readable', function(){
    var row = financial_parser.read();
    finviz_financial.insert({
        ticker_intel: row['Ticker'],
        ticker: row['Ticker'],
        dividend_yield: row['Dividend Yield'], 
        return_on_assets: row['Return On Assets'],
        return_on_equity: row['Return on Equity'],
        return_on_investment: row['Return on Investment'],
        current_ratio: row['Current Ratio'],
        quick_ratio: row['Quick Ratio'],
        long_term_debt_equity: row['LT Debt/Equity'],
        debt_equity: row['Total Debt/Equity'],
        gross_margin: row['Gross Margin'],
        operating_margin: row['Operating Margin'],
        profit_margin: row['Profit Margin'],
        next_earnings_date: row['Earnings Date']
    }, function(err, doc){ if (err) throw err;});
});

ownership_parser.on('readable', function(){
    var row = ownership_parser.read();
    finviz_ownership.insert({
        ticker_intel: row['Ticker'],
        ticker: row['Ticker'],
        shares_outstanding: row['Shares Outstanding'], 
        shares_float: row['Shares Float'],
        insider_ownership: row['Insider Ownership'],
        insider_transactions: row['Insider Transactions'],
        institutional_ownership: row['Institutional Ownership'],
        institutional_transactions: row['Institutional Transactions'],
        float_short: row['Float Short'],
        short_ratio: row['Short Ratio'],
        average_volume: row['Average Volume']
    }, function(err, doc){ if (err) throw err;});
});

performance_parser.on('readable', function(){
    var row = performance_parser.read();
    finviz_performance.insert({
        ticker_intel: row['Ticker'],
        ticker: row['Ticker'],
        performance_week: row['Performance (Week)'], 
        performance_month: row['Performance (Month)'],
        performance_quarter: row['Performance (Quarter)'],
        performance_half_year: row['Performance (Half Year)'],
        performance_year: row['Performance (Year)'],
        performance_ytd: row['Performance (YTD)'],
        volatility_week: row['Volatility (Week)'],
        volatility_month: row['Volatility (Month)'],
        analyst_recom: row['Analyst Recom'],
        average_volume: row['Average Volume'],
        relative_volume: row['Relative Volume']
    }, function(err, doc){ if (err) throw err;});
});

technical_parser.on('readable', function(){
    var row = technical_parser.read();
    finviz_technical.insert({
        ticker_intel: row['Ticker'],
        ticker: row['Ticker'],
        beta: row['Beta'], 
        average_true_range: row['Average True Range'],
        twenty_day_simple_moving_average: ['20-Day Simple Moving Average'],
        fifty_day_simple_moving_average: row['50-Day Simple Moving Average'],
        two_hundred_day_simple_moving_average: row['200-Day Simple Moving Average'],
        fifty_two_week_high: row['52-Week High'],
        fifty_two_week_low: row['52-Week Low'],
        relative_strength_index: row['Relative Strength Index (14)'],
        change_from_open: row['Change from Open'],
        gap_on_open: row['Gap']
    }, function(err, doc){ if (err) throw err;});
});
//FinViz Overview
request('http://finviz.com/export.ashx?v=111', function(err, response, body) {console.log(body);empty_ticker; empty_finviz_overview;}).pipe(overview_parser);
// .on('finish', function(){console.log("I'm Done"); process.exit()});

//FinViz Valuation
request('http://finviz.com/export.ashx?v=121', function(err, response, body) {empty_finviz_valuation}).pipe(valuation_parser);

// //Finviz Financial
request('http://finviz.com/export.ashx?v=161', function(err, response, body) {empty_finviz_financial}).pipe(financial_parser);

// //Finviz Ownership
request('http://finviz.com/export.ashx?v=131', function(err, response, body) {empty_finviz_ownership}).pipe(ownership_parser);

// //Finviz Performance
request('http://finviz.com/export.ashx?v=141', function(err, response, body) {empty_finviz_performance}).pipe(performance_parser);
    
// //Finviz Technical
request('http://finviz.com/export.ashx?v=171', function(err, response, body) {empty_finviz_technical}).pipe(technical_parser).on('finish', function(){console.log("I'm Done"); process.exit()});