const { Pool } = require("pg") //Tipo dono

module.exports = new Pool({
    user:"postgres",
    password: "postgres",
    host: "localhost",
    port: 5432,
    database: "gymanager"
})