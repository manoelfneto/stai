import { Box, Button, Grid, Image, VStack } from '@chakra-ui/react'
import { Outlet, useNavigate } from 'react-router-dom'
import Logo from '../assets/logo-stai.png'

const NavBar = () => {
  const navigate = useNavigate()

  function logOut() {
    navigate('/')
  }

  return (
    <Grid h='100vh !important' templateColumns='1fr 5fr'>
      <VStack bgColor='white' pt={8}>
        <Box
          ml={4}
          transitionDuration='normal'
          transitionProperty='margin-left'
          w='fit-content'
        >
          <Image src={Logo} alt='stai' width={40} maxW='full' />
        </Box>
        <VStack w='full'>
          <VStack>
            <Button
              colorScheme='red'
              variant='ghost'
              w='100%'
              onClick={() => navigate('home/dashboard')}
            >
              Dashboard
            </Button>
            <Button
              colorScheme='red'
              variant='ghost'
              w='full'
              onClick={() => navigate('home/users')}
            >
              Usuários
            </Button>

            <Button
              colorScheme='red'
              variant='ghost'
              w='full'
              onClick={() => navigate('home/people')}
            >
              Funcionários
            </Button>
          </VStack>
          <Box>
            <Button onClick={logOut}>Sair</Button>
          </Box>
        </VStack>
      </VStack>

      <Box bgColor='#F5F5F8'>
        <Outlet />
      </Box>
    </Grid>
    // <DashboardProvider>
    //   <Box w='full' h='100%'>
    //     {/* <Drawer isOpen={true} onClose={closeNav} placement='left'>
    //       <DrawerOverlay backgroundColor='transparent' />
    //       <DrawerContent background='none'>
    //         <Box
    //           w='100%'
    //           h='100%'
    //           pt={5}
    //           pb={10}
    //           px={0}
    //           display='flex'
    //           justifyContent='space-between'
    //           flexDirection='column'
    //           backgroundColor='white'
    //           overflow='hidden'
    //           position='relative'
    //           role='group'
    //         >
    //           <Box>
    //             <Box
    //               ml={4}
    //               transitionDuration='normal'
    //               transitionProperty='margin-left'
    //               w='fit-content'
    //             >
    //               <Image src={Logo} alt='stai' width={24} maxW='full' />
    //             </Box>
    //             <SlideFade
    //               in={true}
    //               offsetX={-20}
    //               offsetY={0}
    //               unmountOnExit={true}
    //             >
    //               <VStack flex={1} pt={8}>
    //                 <Button onClick={() => navigate('home/dashboard')}>
    //                   Dashboard
    //                 </Button>
    //                 <Button onClick={() => navigate('home/users')}>
    //                   Usuários
    //                 </Button>
    //                 <Button>Funcionários</Button>
    //               </VStack>
    //             </SlideFade>

    //             <SlideFade in={true} offsetX={-20} offsetY={0} unmountOnExit>
    //               <Center p={2} flexDirection='column' pl={8} pr={10}>
    //                 <Button onClick={logOut} variant='nav'>
    //                   sair
    //                 </Button>
    //               </Center>
    //             </SlideFade>
    //           </Box>
    //         </Box>
    //       </DrawerContent>
    //     </Drawer> */}

    //     <Button>manoel</Button>
    //     <Button>manoel</Button>
    //     <Button>manoel</Button>
    //     <Button>manoel</Button>
    //   </Box>

    //   <DashboardContainer>
    //     <Outlet />
    //   </DashboardContainer>
    // </DashboardProvider>
  )
}

export default NavBar
