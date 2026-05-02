function createUpdateEquipmentSetpoint(equipmentRepository) {
  return async function updateEquipmentSetpoint(id, setpoint) {
    return equipmentRepository.updateSetpoint(id, setpoint)
  }
}

module.exports = createUpdateEquipmentSetpoint
