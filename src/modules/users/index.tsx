import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'

export const Users = () => {
  return (
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            <Th>Nome</Th>
            <Th>E-mail</Th>
            <Th>Cargo</Th>
            <Th>Setor</Th>
          </Tr>
        </Thead>

        <Tbody>
          <UserItem
            name='manoel'
            department='europa'
            email='mafn@cesar.school'
            position='dev'
          />
        </Tbody>
      </Table>
    </TableContainer>
  )
}

type UserItenProps = {
  name: string
  email: string
  position: string
  department: string
}

const UserItem = ({ name, email, position, department }: UserItenProps) => {
  return (
    <Tr>
      <Td>{name}</Td>
      <Td>{email}</Td>
      <Td>{position}</Td>
      <Td>{department}</Td>
    </Tr>
  )
}
