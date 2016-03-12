'use strict'
const express = require('express');
const movies = express.Router();
const bodyParser = require('body-parser');
const db = require('./../db/pg');

movies.route('/:movieID')
  .get( (req,res)=>{
    res.send("specific movie get route")
  })
  .put( (req,res)=>{
    res.send("edit a specific movie")
  })
  .delete( (req,res)=>{
    res.send("delete a specific movie")
  })

movies.route('/')
  .get( (req,res)=>{
    res.send("get all movies from a theater")
  })
  .post( (req,res)=>{
    res.send("add a movie to a specific theater")
  })

  module.exports = movies;
