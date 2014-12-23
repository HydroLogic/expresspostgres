var pg = require("pg");
var config = require('./config').get(process.env.NODE_ENV);
var conString = config.pgConnect;

// var conString = "postgres://postgres:spatial@localhost:5432/leaflet"; //zev's is 5433




exports.metrics = function(req, res, next){
	
	var query = "select * from locations where name = '" + req.params.name + "'"
	console.log(query)

	pg.connect(conString, function(err, client, done) {
	    if(err) {
	      return console.error('error fetching client from pool', err);
	    }
	    
	    client.query(query, function(err, result) {
	      
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
		      res.json(result.rows);
	    });
	  });
};