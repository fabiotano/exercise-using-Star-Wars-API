const express = require("express");


const controller = {
    home: (req, res) => {
      res.send("esta es la pagina Home");
    },
  
    people: (req, res) => {
      res.send("esta es la pagina People");
    },
  
    planets: (req, res) => {
      res.send("esta es la pagina Planets");
    },
  };
  
  module.exports = controller;
  
