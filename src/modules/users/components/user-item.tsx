import { Td, Tr } from '@chakra-ui/react'

type UserItenProps = {
  name: string
  email: string
  position: string
  department: string
}

export const UserItem = ({
  name,
  email,
  position,
  department,
}: UserItenProps) => {
  return (
    <Tr>
      <Td>{name}</Td>
      <Td>{email}</Td>
      <Td>{position}</Td>
      <Td>{department}</Td>
    </Tr>
  )
}
