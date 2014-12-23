/* GET home page. */
exports.index = function(req, res){
  res.render('index', { 
  	title: 'Mapping with Express and PostgreSQL',
  	pgMessage: 'Can you see it now'
   });
};
