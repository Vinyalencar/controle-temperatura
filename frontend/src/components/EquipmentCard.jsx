function EquipmentCard({ equipamento, onAlterarSetpoint }) {
    const setpoint = Number(equipamento.setpoint)

    return (
        <section>
            <h2>Equipamento {equipamento.nome}</h2>
            <p>Temperatura Atual: {equipamento.temperaturaAtual}&deg;C</p>
            <p>Setpoint: {setpoint}&deg;C</p>

            <button onClick={() => onAlterarSetpoint(equipamento.id, setpoint - 1)}>Diminuir setpoint</button>
            <button onClick={() => onAlterarSetpoint(equipamento.id, setpoint + 1)}>Aumentar setpoint</button>
        </section>
    )
}

export default EquipmentCard