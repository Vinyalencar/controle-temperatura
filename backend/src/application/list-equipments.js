function createListEquipments(equipmentRepository) {
    return async () => {
        return await equipmentRepository.list()
    }
}

module.exports = createListEquipments