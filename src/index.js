const express = require('express');

const app = express();

app.use(express.json());

/**
 * GET - Buscar uma informação dentro do servidor
 * POST - Inserir uma informação no servidor
 * PUT - Alterar uma informação no servidor
 * PATCH  - Alterar uma informação específica
 * DELETE - Deletar uma informação no servidor
 */

/**
 *  Tipos de parâmetros
 *  
 *  Route Params => Identificar um recurso para editar, deletar ou buscar
 *  Query Params => Paginação, filtro
 *  Body Params => Os objetos que serão passados para inserção ou alteração 
 */

app.get('/courses', (request, response) => {
  const query = request.query;
  console.log(query);

  return response.json(["curso 1", "curso 2", "curso 3"]);
})

app.post('/courses', (request, response) => {
  const body = request.body;
  console.log(body);

  return response.json(["curso 1", "curso 2", "curso 3", "curso 4"]);
})

app.put('/courses/:id', (request, response) => {
  const { id } = request.params;
  console.log(id);

  return response.json(["curso 6", "curso 2", "curso 3", "curso 4"]);
})

app.patch('/courses/:id', (request, response) => {
  return response.json(["curso 6", "curso 7", "curso 3", "curso 4"]);
})

app.delete('/courses/:id', (request, response) => {
  return response.json(["curso 6", "curso 7", "curso 4"])
})

app.listen(3333);