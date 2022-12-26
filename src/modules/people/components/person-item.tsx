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
  const turnoverPercent = 90
  return (
    <Tr>
      <Td>{companyTime}</Td>
      <Td>{age}</Td>
      <Td>{position}</Td>
      <Td>{department}</Td>
      <Td color={chooseColor(turnoverPercent)}>{turnover}%</Td>
    </Tr>
  )
}

function chooseColor(value: number) {
  let color = ''
  if (value <= 25) color = 'green'
  else if (value > 25 && value <= 50) color = 'yellow'
  else if (value > 50 && value <= 75) color = 'orange'
  else if (value > 75) color = 'red'
  return color
}
