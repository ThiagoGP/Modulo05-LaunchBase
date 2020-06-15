const express= require('express')
const routes= express.Router()

const instructors = require('./app/controllers/instructors')
const members = require('./app/controllers/members');

routes.get('/', function(req,res){
    return res.redirect('/instructors')
})

routes.get('/instructors', instructors.index)

routes.get('/instructors/create', instructors.create)

routes.get('/instructors/:id/edit', instructors.edit)
routes.get('/instructors/:id', instructors.show)
routes.post("/instructors", instructors.post)
routes.delete("/instructors", instructors.delete)
routes.put('/instructors', instructors.put)



routes.get('/members', members.index)

routes.get('/members/create', members.create)

routes.get('/members/:id/edit', members.edit)
routes.get('/members/:id', members.show)
routes.post("/members", members.post)
routes.delete("/members", members.delete)
routes.put('/members', members.put)


module.exports = routes
// HTTP VERBS //RESOURCE = Instructors
// GET: RECEBER RESOURCE É UMA ENTIDADE MAIS ABSTRADA
// POST: Criar ou Salvar (criar um novo RESOURCE com dados enviados)
// PUT: Atualizar RESOURCE 
// DELETE: Deletar RESOURCE