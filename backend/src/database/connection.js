const { Pool } = require('pg')

const pool = new Pool({
    host: '127.0.0.1',
    port: 5433,
    user: 'app_user',
    password: 'app_password',
    database: 'controle_temperatura'
})

module.exports = pool