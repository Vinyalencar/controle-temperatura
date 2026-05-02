const express = require('express')
const cors = require('cors')
const pool = require('./database/connection')

const createPostgresEquipmentRepository = require('./adapters/database/postgres-equipment-repository')
const createListEquipments = require('./application/list-equipments')
const createUpdateEquipmentSetpoint = require('./application/update-equipment-setpoint')
const createEquipmentController = require('./adapters/http/equipment-controller')

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

const equipmentRepository = createPostgresEquipmentRepository(pool)

const listEquipments = createListEquipments(equipmentRepository)
const updateEquipmentSetpoint = createUpdateEquipmentSetpoint(equipmentRepository)

const equipmentController = createEquipmentController({
  listEquipments,
  updateEquipmentSetpoint,
})

app.get('/health', (request, response) => {
  response.json({ status: 'ok' })
})

app.get('/equipamentos', equipmentController.list)
app.patch('/equipamentos/:id/setpoint', equipmentController.updateSetpoint)

app.listen(port, () => {
  console.log(`API rodando na porta ${port}`)
})
