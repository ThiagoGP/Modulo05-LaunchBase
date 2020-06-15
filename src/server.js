const express= require('express') 
const nunjucks = require('nunjucks')
const routes = require("./routes")
const server= express()
const methodOverride = require('method-override')

server.use(express.urlencoded({extended: true}))
server.use(express.static('public'))
server.use(methodOverride('_method'))
server.use(routes)
nunjucks.configure("src/app/views", {
    express: server,
    autoescape: false,
    noCache: true,
    watch: true
   
})

server.set("view engine", "njk")

server.listen(8000, function(){
    console.log("Server is running")
})