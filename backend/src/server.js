const express = require('express');
const cors = require('cors');
const pool = require('./database/connection');

const app = express();
const port = 3000

app.use(cors());
app.use(express.json());

let equipamentos = [{
    id: 1,
    nome: 'CH21',
    temperaturaAtual: 22,
    setpoint: 23
}, {
    id: 2,
    nome: 'CH02',
    temperaturaAtual: 22,
    setpoint: 23
}, {
    id: 3,
    nome: 'CH03',
    temperaturaAtual: 22,
    setpoint: 23
}]

app.get('/health', (request, response) => {
    response.json({ status: 'ok' });
});

app.get('/equipamentos', async (request, response) => {
    const result = await pool.query(`
    SELECT
      id,
      nome,
      temperatura_atual AS "temperaturaAtual",
      setpoint
    FROM equipamentos
    ORDER BY id
  `);

    response.json(result.rows);
});

app.patch('/equipamentos/:id/setpoint', async (request, response) => {
  const id = Number(request.params.id)
  const { setpoint } = request.body
  const result = await pool.query(
    `
      UPDATE equipamentos
      SET setpoint = $1
      WHERE id = $2
      RETURNING
        id,
        nome,
        temperatura_atual AS "temperaturaAtual",
        setpoint
    `,
    [setpoint, id]
  )

  response.json(result.rows[0])
})

app.listen(port, () => {
    console.log(`API rodando na porta ${port}`);
});