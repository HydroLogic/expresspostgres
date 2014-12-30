# To do

1. Change the data collection to a factory
2. Why takes so long to load? Does the jade/sass processing happen each time?



# Steps for creating app

1. new folder
2. express -c compass (new express with sass CSS) (for this to work you need to have installed the express generator with `npm install -g express-generator). Keep in mind that you'll need to have ruby installed and you will need to install compass itself.
http://dl.bintray.com/oneclick/rubyinstaller/
rubyinstaller-2.1.5.exe?direct
I had some trouble with SSL issues and followed the luislavena thing below and it worked.
http://stackoverflow.com/questions/19150017/ssl-error-when-installing-rubygems-unable-to-pull-data-from-https-rubygems-o/
https://gist.github.com/luislavena/f064211759ee0f806c88
http://compass-style.org/install/

I also manually added ruby to the path c:\ruby21\bin this works for compass also
3. npm install
4. NOT WORKING: new server folder and put bin, routes, views and app.js
5. NOT WORKING: change line in app.js to app.use(express.static(path.join(__dirname, '../public')));
6. git init
7. Add .gitignore through sublime
8. Create .bowerrrc with 
{
    "directory": "public/bower_components"
}

9. bower init (accept defaults)
10. bower install bootstrap --save
10.5. bower install angular angular-resource angular-route --save
<s>11. I added a public/index.html</s>
12. I changed the arrangement of hte routes/index.js following this link:
<s>http://cwbuecheler.com/web/tutorials/2014/restful-web-app-node-express-mongodb/</s>

12.5. added images folder under public

13. You should be able to start the server with `nodemon` or `npm start`. Note that I believe the starting directory for the server is driven by the 'start' in the `package.json` file. nodemon will 'know' where to start by reading the package.json but you could also type `nodemon bin/www`. Actually, I added 

`"start": "nodemon ./bin/www"` to package.json and now I can do npm start

Also you may be working at home or have the app at Heroku so you may want to, on a windows machine, use `SET NODE_ENV=home`. I set the default to work.

14. Keep in mind the that the render will put an index.html in your public folder. So if there is already an index.html file then it will use this (at least it appears so).

15. I took some jade templates from https://github.com/primaryobjects/Node.js-Bootstrap-Starter-Template/tree/master/views and then the sticky footer from view-source:http://getbootstrap.com/examples/sticky-footer-navbar/

16. Type npm install pg --save
17. I ended up having to comment out the favicon require and the line about the favicon for the moment.

18. git remote add origin https://github.com/zross/expresspostgres.git
git push -u origin master

19. you may get an error with body-parser deprecated ...extended etc
so change this:
app.use(bodyParser.urlencoded());
To this
app.use(bodyParser.urlencoded({ extended: true }));

# Angular
1. create public/app directory and app.js within
2. create views/partials/main.jade
3. add div(ng-view) to index.jade
4. add body(ng-app='myApp') to layout.jade
5. add scripts tags to scripts.js for angular
6. App.js gets:

	angular.module('myApp', ['ngResource', 'ngRoute']);

	angular.module('myApp').config(function($routeProvider, $locationProvider){
	  $locationProvider.html5Mode(true);
	  $routeProvider
	    .when('/', {templateUrl:'/partials/main', controller:'mainCtrl'});
	});

	angular.module('app').controller('mainCtrl', function($scope){
	  $scope.myVar = "Hello Angular";
	});

7. In server.js define server side route

	app.get('/paritals/:partialPath', function(req, res){
		res.render('partials/' + req.params.partialPath)
	});


# The "path" when loading the page at first

1. hits bin/www which tells it to load the server - server.js
2. The index.jade is loaded and this "extends" layout and also has ng-view
3. The layout has the body(ng-app='myApp') and also refers to the scripts.js to load scripts.
4. Because the index.jade (actually layout.jade) refers to myApp, the myApp gets bootstrapped. This is in public/app/app.js.
5. As part of app.js there is a route provider `.when('/', {templateUrl:'/partials/main', controller:'mainCtrl'});` so that it knows when it gets the main page that it should load main.jade from partials into the place where it says ng-view.


##Heroku

1. Put the version of npm and node in the package.json under engines. npm --version and node --version

2. New file in root called Procfile and in it you have web:node bin/www

3. Change port to 80
heroku login (invokes toolbelt)
8) heroku create
9) git remote –v will list heroku
git push heroku master
ps:scale web=1 (allocate resources)
heroku open
heroku logs (to see logs)
<s>4.http://stackoverflow.com/questions/19490938/push-database-to-heroku-how-to-use-heroku-pgpush



4. Added environment variables PGUSER=postgres and PGPASSWORD=postgres

5: heroku pg:push leaflet DATABASE --app cryptic-bayou-1232

http://stackoverflow.com/questions/25870388/heroku-pgpull-failing-to-populate-schema</s>

Lots of research here but it looks like pg:push is not available on Windows yet so I used the backup resprore
http://stackoverflow.com/questions/25870388/heroku-pgpull-failing-to-populate-schema


https://devcenter.heroku.com/articles/heroku-postgres-import-export

heroku addons:add pgbackups
pg_dump -Fc --no-acl --no-owner -h localhost -U postgres leaflet > data/leaflet.dmp

heroku pgbackups:restore DATABASE 'http://www.zevross.com/temp/leaflet.dmp' --confirm intense-hamlet-2204 

At command line: createdb -h localhost -U postgres -p 5433 leaflet
pg_restore -U postgres -p 5433 --dbname=leaflet --verbose data/leaflet.dmp



# Create the table

CREATE TABLE locations (
    name        varchar(10),
    address       varchar(40) NOT NULL,
    lat         float,
    long      float
);

INSERT INTO locations VALUES ('zev', '303 Fairmount', 42.440370, -76.480074);
INSERT INTO locations VALUES ('nancy', '224 Ridgedale', 42.437542, -76.479420);
INSERT INTO locations VALUES ('bruce', '224 Roger Roger', 42.437542, -76.479420);
INSERT INTO locations VALUES ('bruce', '30 Sodom', 42.416739, -76.406482); 



