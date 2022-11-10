import React, { ReactNode } from 'react'

import { Box, Container, Flex, Text, Image } from '@chakra-ui/react'
import Logo from '../../common/assets/logo-stai.png'

export const FullPageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      backgroundColor='#F5F5F8'
      h='100%'
      w='100%'
      display='flex'
      flexDir='column'
      alignItems='flex-start'
      justifyContent='center'
      overflowY='auto'
      p={[1, 6]}
    >
      <Box
        w='full'
        display='flex'
        alignItems='center'
        justifyContent='center'
        as='header'
        pb={[3, 7]}
      >
        <Image src={Logo} alt='Strateegia' width={48} maxW='full' />
      </Box>

      <Container
        w={['none', 'lg']}
        bg={['none', 'white']}
        borderRadius={['none', 10]}
        boxShadow={['none', '0px 0px 20px 2px #E5E5E5']}
        maxW='container.md'
      >
        {children}
        <Flex
          pb={6}
          as='footer'
          justify='space-between'
          align='center'
          px={[6, 7]}
          maxW={{ base: '100%' }}
        >
          <Text fontSize='xs' color='gray.300'>
            © 2022 - STAI todos os direitos reservados
          </Text>
        </Flex>
      </Container>
    </Box>
  )
}

export default FullPageLayout
