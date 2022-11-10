import { Box, Button, Input, Text, VStack } from '@chakra-ui/react'
import FullPageLayout from './components/full-page-layout'

export function Login() {
  return (
    <FullPageLayout>
      <Box>
        <VStack>
          <Text color='#C20000' fontSize='xl' fontWeight='bold'>
            entrar
          </Text>
          <Text color='#718096' fontWeight='bold'>
            e-mail
          </Text>
          <Input placeholder='digite seu e-mail' />
          <Text color='#718096' fontWeight='bold'>
            senha
          </Text>
          <Input placeholder='digite sua senha' />
          <Button variant='link'>esqueceu sua senha?</Button>
          <Button colorScheme='pink'>entrar</Button>
        </VStack>
      </Box>
    </FullPageLayout>
  )
}
