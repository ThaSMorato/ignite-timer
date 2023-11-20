import { HistoryContainer, HistoryList, Status } from './styles'

export const History = () => {
  return (
    <HistoryContainer>
      <h1>Meu historico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duracao</th>
              <th>Inicio</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 5 }).map(() => (
              <tr>
                <td>Tarefa</td>
                <td>20 minutos</td>
                <td>Ha 2 meses</td>
                <td>
                  <Status variant="green">Concluido</Status>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
