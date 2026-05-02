import { useEffect, useState } from 'react'
import './App.css'
import EquipmentCard from './components/EquipmentCard'

function App() {
  const [equipamentos, setEquipamentos] = useState([])

  useEffect(() => {
    async function buscarEquipamentos() {
      const resposta = await fetch('http://localhost:3000/equipamentos')
      const dados = await resposta.json()
      setEquipamentos(dados)
    }

    buscarEquipamentos()
  }, [])

  async function alterarSetpoint(id, novoSetpoint) {

    const resposta = await fetch(`http://localhost:3000/equipamentos/${id}/setpoint`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ setpoint: novoSetpoint })
    })

    const equipamentoAtualizado = await resposta.json()

    const equipamentosAtualizados = equipamentos.map((equipamento) => {
      if (equipamento.id === id) {
        return equipamentoAtualizado
      }
      return equipamento
    })

    setEquipamentos(equipamentosAtualizados)
  }

  return (
    <main>
      <h1> Controle de Temperatura</h1>

      {equipamentos.map((equipamento) => (
        <EquipmentCard
          equipamento={equipamento}
          onAlterarSetpoint={alterarSetpoint}
        />
      ))}

    </main>
  )
}

export default App
