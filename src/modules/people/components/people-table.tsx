import { Table, TableContainer, Tbody, Th, Thead, Tr } from '@chakra-ui/react'
import { PersonItem } from './person-item'

export const PeopleTable = () => {
  return (
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            <Th>Tempo de Empresa</Th>
            <Th>Idade</Th>
            <Th>Cargo</Th>
            <Th>Setor</Th>
            <Th>% Turnover</Th>
          </Tr>
        </Thead>

        <Tbody>
          <PersonItem
            companyTime={2}
            age={48}
            position='dev'
            department='europa'
            turnover={76}
          />
        </Tbody>
      </Table>
    </TableContainer>
  )
}
