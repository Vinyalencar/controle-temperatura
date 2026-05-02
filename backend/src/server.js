const express = require('express');
const cors = require('cors');

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

app.get('/equipamentos', (request, response) => {
    response.json(equipamentos);
});

app.patch('/equipamentos/:id/setpoint', (request, response) => {
    const id = Number(request.params.id);
    const { setpoint } = request.body;

    equipamentos = equipamentos.map((equipamento) => {
        if (equipamento.id === id) {
            return {
                ...equipamento,
                setpoint,
            }
        }
        return equipamento
    })

    const equipamentoAtualizado = equipamentos.find((equipamento) => equipamento.id === id);

    response.json(equipamentoAtualizado);
})

app.listen(port, () => {
    console.log(`API rodando na porta ${port}`);
});