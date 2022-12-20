import { Td, Tr } from '@chakra-ui/react'

type PersonItenProps = {
  companyTime: number
  age: number
  position: string
  department: string
  turnover: number
}

export const PersonItem = ({
  companyTime,
  age,
  position,
  department,
  turnover,
}: PersonItenProps) => {
  return (
    <Tr>
      <Td>{companyTime}</Td>
      <Td>{age}</Td>
      <Td>{position}</Td>
      <Td>{department}</Td>
      <Td color='blue.300'>{turnover}</Td>
    </Tr>
  )
}
