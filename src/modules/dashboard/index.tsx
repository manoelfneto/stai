import {
  Box,
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
  VStack,
} from '@chakra-ui/react'

import { BiSearch } from 'react-icons/bi'

export const Dashboard = () => {
  return (
    <VStack>
      <Box pb={10} w='100%' bgColor='white'>
        <Text mt={10} ml={10} fontSize='2xl'>
          Dashboard
        </Text>
        <HStack mt={10} mr={10} gap={20}>
          <InputGroup ml={10}>
            <InputLeftAddon children={<BiSearch />} />
            <Input placeholder='pesquise por gráfico' />
          </InputGroup>
          <Button px={4} size='sm'>
            Imprimir Gráficos
          </Button>
        </HStack>
      </Box>
      <Box></Box>
    </VStack>
  )
}
