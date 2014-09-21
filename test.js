var request = require('request');
var csv = require('csv-streamify');

var firstParser = csv({objectMode: true, columns: true});


firstParser.on('readable', function(){
    var row = firstParser.read();
    console.log(row);
});

request('http://finviz.com/export.ashx?v=171', function(err, response, body) {}).pipe(firstParser);