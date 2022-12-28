import {
  Box,
  VStack,
  Text,
  InputGroup,
  HStack,
  Input,
  Button,
  InputLeftAddon,
} from '@chakra-ui/react'
import { BiSearch } from 'react-icons/bi'
import { PeopleTable } from './components/people-table'

export const People = () => {
  return (
    <VStack>
      <Box pb={10} w='100%' bgColor='white'>
        <Text mt={10} ml={10} fontSize='2xl'>
          Funcionários
        </Text>
        <HStack mt={10} mr={10} gap={10}>
          <InputGroup ml={10}>
            <InputLeftAddon children={<BiSearch />} />
            <Input placeholder='Buscar funcionário' />
          </InputGroup>
          <Button
            position='relative'
            fontSize='15px'
            lineHeight='1.5'
            colorScheme='red'
            border='0'
            transition='0.2s'
            overflow='hidden'
          >
            upload file
            <Input
              position='absolute'
              left='0%'
              top='0%'
              opacity='0'
              type='file'
              accept='csv'
            />
          </Button>
          {/* <Button px={6} size='sm'>
            Simular com dados
          </Button> */}
        </HStack>
      </Box>
      <Box w='100%'>
        <PeopleTable />
      </Box>
    </VStack>
  )
}
