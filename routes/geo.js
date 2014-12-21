var pg = require("pg");
//var pg = require('pg.js');
var conString = "postgres://postgres:spatial@localhost:5432/leaflet"; //zev's is 5433
var mySelection = "select * from locations";

// module.exports = {
//     geofunc: function() {
//         console.log('abcs');
//         // app.send('blah');
//     },

//     metrics: function(req, res, next) {
//         pg.connect(conString, function(err, client, done) {
//             if (err) {
//                 return console.error('error fetching client from pool', err);
//             }

//             client.query("select state_name, name from county limit 5", function(err, result) {

//                 //call `done()` to release the client back to the pool
//                 done();

//                 if (err) {
//                     console.error('error running query', err);
//                     return next(err);
//                 }
//                 if (result.rows.length === 0) {
//                     res.send(404);
//                 }

//                 console.log(result.rows)

//                 res.json(result.rows);
//             });//end client query

//         });//end pg.connect

//     }// end metrics function

// };

exports.metrics = function(req, res, next){
	console.log('in metrics')
	pg.connect(conString, function(err, client, done) {
	    if(err) {
	      return console.error('error fetching client from pool', err);
	    }
	    
	    client.query("select * from locations", function(err, result) {
	      
		      //call `done()` to release the client back to the pool
		      done();
		
		      if(err) {
		        console.error('error running query', err);
		        return next(err);
		      }
		      if(result.rows.length === 0){
		        res.send(404);
		      }
		      
		      //else
		      console.log(result.rows)
		      res.json(result.rows);
	    });
	  });
};