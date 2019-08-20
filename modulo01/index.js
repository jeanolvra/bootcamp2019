const express = require("express");

const server = express();

// localhost:3000/teste

// Query params = ?teste=1
// Route params = /users/1
// Request body = { "name": "Jean", "email": "seujeanoliveira@gmail.com"  }

const users = ["Diego", "Cláudio", "Victor"];

server.get("/users/:index", (req, res) => {
  const { index } = req.params;

  return res.json(users[index]);
});

server.listen(3000);
