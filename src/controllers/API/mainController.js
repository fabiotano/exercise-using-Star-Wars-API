const express = require("express");
const fetchApi = require("./fetchAPI");
const ApiUrl = "https://swapi.dev/api/";

const controller = {

  home: (req, res) => {
    res.send("esta es la pagina Home");
  },

  people: async (req, res) => {
    try {
      const data = await fetchApi(ApiUrl, "people"); // Llamamos a la funcion con parametro "people"
      res.json(data); // Enviamos los datos obtenidos de la funcion como respuesta utilizando res.json()
    } catch (error) {
      console.error("Error al obtener los datos de la API:", error);
      res.status(500).send("Error al obtener los datos de la API");
    }
  },

  planets: async (req, res) => {
    try {
      const data = await fetchApi(ApiUrl, "planets"); // Llamamos a la funcion con parametro "planets"
      res.json(data); // Enviamos los datos obtenidos como respuesta utilizando res.json()
    } catch (error) {
      console.error("Error al obtener los datos de la API:", error);
      res.status(500).send("Error al obtener los datos de la API");
    }
  },
};

module.exports = controller;
