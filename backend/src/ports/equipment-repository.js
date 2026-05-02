/**
 * EquipmentRepository port.
 *
 * Any adapter used as an equipment repository must implement:
 *
 * list(): Promise<Array<{
 *   id: number,
 *   nome: string,
 *   temperaturaAtual: number,
 *   setpoint: number
 * }>>
 *
 * updateSetpoint(id: number, setpoint: number): Promise<{
 *   id: number,
 *   nome: string,
 *   temperaturaAtual: number,
 *   setpoint: number
 * }>
 */
