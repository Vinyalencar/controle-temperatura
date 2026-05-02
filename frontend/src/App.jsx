import { useState } from 'react'
import './App.css'
import EquipmentCard from './components/EquipmentCard'

function App() {
  const [equipamento, setEquipamento] = useState([{
    id: 1,
    nome: 'CH01',
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
  }])

  function alterarSetpoint(id, novoSetpoint) {
    const equipamentoAtualizado = equipamento.map((equipamento) => {
      if (equipamento.id === id) {
        return {
          ...equipamento,
          setpoint: novoSetpoint
        }
      }

      return equipamento
    })

    setEquipamento(equipamentoAtualizado)
  }

  return (
    <main>
      <h1> Controle de Temperatura</h1>

      {equipamento.map((equipamento) => (
        <EquipmentCard
          equipamento={equipamento}
          onAlterarSetpoint={alterarSetpoint}
        />
      ))}

    </main>
  )
}

export default App
