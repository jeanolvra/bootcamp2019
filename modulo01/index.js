const express = require("express");

const server = express();

// localhost:3000/teste

// Query params = ?teste=1
// Route params = /users/1
// Request body = { "name": "Jean", "email": "seujeanoliveira@gmail.com"  }

server.get("/users/:id", (req, res) => {
  const { id } = req.params;
  return res.json({ message: `Buscando o usuario ${id}` });
});

server.listen(3000);
