import { Box, Button, Input, Text, VStack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import FullPageLayout from './components/full-page-layout'

export function Login() {
  const navigate = useNavigate()

  function handleSubmit() {
    navigate('/navbar')
  }
  return (
    <FullPageLayout>
      <Box>
        <Text
          mb={6}
          textAlign='center'
          color='#C20000'
          fontSize='2xl'
          fontWeight='bold'
        >
          entrar
        </Text>
        <VStack spacing={4} alignItems='self-start'>
          <Text color='#718096' fontWeight='bold'>
            e-mail
          </Text>
          <Input placeholder='digite seu e-mail' />
          <Text color='#718096' fontWeight='bold'>
            senha
          </Text>
          <Input type='password' placeholder='digite sua senha' />
          <Button color='blue.300' fontWeight='normal' variant='link'>
            esqueceu sua senha?
          </Button>
        </VStack>
        <Box textAlign='center'>
          <Button
            onClick={handleSubmit}
            borderRadius='xl'
            px={12}
            size='md'
            mt={6}
            colorScheme='pink'
          >
            entrar
          </Button>
        </Box>
      </Box>
    </FullPageLayout>
  )
}
