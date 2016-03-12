'use strict'
const express = require('express');
const theaters = express.Router();
const bodyParser = require('body-parser');
const db = require('./../db/pg');

theaters.route('/:theaterID')
  .get( (req,res)=>{
    res.send("specific theater get route")
  })
  .put( (req,res)=>{
    res.send("edit a specific theater")
  })
  .delete( (req,res)=>{
    res.send("delete a specific theater")
  })

theaters.route('/')
  .get( (req,res)=>{
    res.send("get all theaters route")
  })
  .post( (req,res)=>{
    res.send("create new theater")
  })

module.exports = theaters;
