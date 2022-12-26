import {
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
  Box,
  VStack,
  HStack,
  InputGroup,
  InputLeftAddon,
  Text,
  Input,
  Button,
  useDisclosure,
} from '@chakra-ui/react'
import { BiSearch } from 'react-icons/bi'
import { AddUserModal } from './components/add-user-modal'
import { UserItem } from './components/user-item'

export const Users = () => {
  const disclosure = useDisclosure()
  return (
    <VStack>
      <Box pb={10} w='100%' bgColor='white'>
        <Text mt={10} ml={10} fontSize='2xl'>
          Usuários
        </Text>
        <HStack mt={10} mr={10} gap={20}>
          <InputGroup ml={10}>
            <InputLeftAddon children={<BiSearch />} />
            <Input placeholder='pesquise por usuários' />
          </InputGroup>
          <Button onClick={disclosure.onOpen} px={6} size='sm'>
            adicionar usuário
          </Button>
        </HStack>
      </Box>
      <Box w='100%'>
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
      </Box>
      <AddUserModal {...disclosure} />
    </VStack>
  )
}
