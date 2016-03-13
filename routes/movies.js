'use strict'
const express = require('express');
const movies = express.Router();
const bodyParser = require('body-parser');
const db = require('../db/pg');

movies.route('/:movieID')
  .get( db.showOneMovie, (req,res)=>{
    res.send("specific movie get route")
  })
  .put(db.editMovie, (req,res)=>{
    res.send("edit a specific movie")
  })
  .delete( db.deleteMovie , (req,res)=>{
    res.send("delete a specific movie")
  })

movies.route('/')
  .get( db.showAllMovies, (req,res)=>{
    console.log('show all movies', res.rows)
    res.json(res.rows)
  })
  .post( db.addMovie, (req,res)=>{
    res.json("successfuly added to db")
  })


  module.exports = movies;
