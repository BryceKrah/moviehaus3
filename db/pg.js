
// const dotenv = require('dot-env');



var pgp = require('pg-promise')({
    // Initialization Options
});

var cn = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS
};

var db = pgp(cn);

function showAllMovies(req,res,next){
  db.any('select * from movies;')
  .then(function(data) {
    res.rows= data;
    console.log('this should show all movies from pg.js', data)
    next();
  })
  .catch(function(error){
    console.error(error);
  })
}

function showOneMovie(req,res,next){
  db.any("select * from movies where id = $1", [req.params.movieID])
  .then(function(data) {
    res.rows= data;
    console.log('this is the single movie from pg.js', data)
    next();
  })
  .catch(function(error){
    console.error(error);
  })
}

function addMovie(req,res,next){
  db.one("insert into movies (title, year, rating, director, actors, plot, poster) values($1,$2,$3,$4,$5,$6,$7)", [ req.body.tile, req.body.year, req.body.rating, req.body.director, req.body.actors, req.body.plot, req.body.poster])
  .then(function(data) {
    res.rows= data;
    console.log('this is the single movie from pg.js', data)
    next();
  })
  .catch(function(error){
    console.error(error);
  })
}

function deleteMovie(req,res,next){
  db.none("delete from movies where id = $1", [req.params.movieID] )
  .then(function(data) {
    res.rows= data;
    console.log('this is the single movie from pg.js', data)
    next();
  })
  .catch(function(error){
    console.error(error);
  })
}

function editMovie(req,res,next){
  db.none("UPDATE movies SET title = $1, year= $2 , rating =$3, director =$4, actors=$5, plot=$6, poster=$7", [ req.body.tile, req.body.year, req.body.rating, req.body.director, req.body.actors, req.body.plot, req.body.poster])
  .then(function(data) {
    res.rows= data;
    console.log('this is the single movie from pg.js', data)
    next();
  })
  .catch(function(error){
    console.error(error);
  })
}


module.exports.showAllMovies = showAllMovies
module.exports.showOneMovie = showOneMovie
module.exports.addMovie = addMovie
module.exports.deleteMovie = deleteMovie
module.exports.editMovie = editMovie
