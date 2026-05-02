function createEquipmentController({listEquipments, updateEquipmentSetpoint}) {
    return {
        async list(request, response) {
            const equipments = await listEquipments()
            response.json(equipments)
        },

        async updateSetpoint(request, response) {
            const id = Number(request.params.id)
            const { setpoint } = request.body

            const equipment = await updateEquipmentSetpoint(id, setpoint)
            response.json(equipment)
        },
    }
}

module.exports = createEquipmentController