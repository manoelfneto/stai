import {
  Box,
  Button,
  Center,
  Container,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Image,
  SlideFade,
  useBoolean,
  VStack,
} from '@chakra-ui/react'
import { createContext, useContext } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Logo from '../common/assets/logo-stai.png'

const Home = () => {
  const navigate = useNavigate()

  function logOut() {
    navigate('/')
  }

  function closeNav() {
    console.log('close')
  }

  return (
    <DashboardProvider>
      <Box w='full' h='100%'>
        <Drawer isOpen={true} onClose={closeNav} placement='left'>
          <DrawerOverlay backgroundColor='transparent' />
          <DrawerContent background='none'>
            <Box
              w='100%'
              h='100%'
              pt={5}
              pb={10}
              px={0}
              display='flex'
              justifyContent='space-between'
              flexDirection='column'
              backgroundColor='white'
              overflow='hidden'
              position='relative'
              role='group'
            >
              <Box>
                <Box
                  ml={4}
                  transitionDuration='normal'
                  transitionProperty='margin-left'
                  w='fit-content'
                >
                  <Image src={Logo} alt='stai' width={24} maxW='full' />
                </Box>
                <SlideFade
                  in={true}
                  offsetX={-20}
                  offsetY={0}
                  unmountOnExit={true}
                >
                  <VStack flex={1} pt={8}>
                    <Button onClick={() => navigate('home/dashboard')}>
                      Dashboard
                    </Button>
                    <Button>Usuários</Button>
                    <Button>Funcionários</Button>
                  </VStack>
                </SlideFade>

                <SlideFade in={true} offsetX={-20} offsetY={0} unmountOnExit>
                  <Center p={2} flexDirection='column' pl={8} pr={10}>
                    <Button onClick={logOut} variant='nav'>
                      sair
                    </Button>
                  </Center>
                </SlideFade>
              </Box>
            </Box>
          </DrawerContent>
        </Drawer>
      </Box>

      <DashboardContainer>
        <Outlet />
      </DashboardContainer>
    </DashboardProvider>
  )
}

type UseBooleanReturn = {
  on: () => void
  off: () => void
  toggle: () => void
}

type DashContext = {
  showNav: boolean
  collapsible: boolean
  shrink: boolean
  setShowNav: UseBooleanReturn
  setShrink: UseBooleanReturn
  sidebar: {
    width: number | string
    logoMargin: number
  }
}

const makeUseBooleanReturn = () => ({
  on: () => null,
  off: () => null,
  toggle: () => null,
})

export const DashboardContext = createContext<DashContext>({
  collapsible: false,
  showNav: false,
  setShowNav: makeUseBooleanReturn(),
  shrink: false,
  setShrink: makeUseBooleanReturn(),
  sidebar: {
    width: '18rem',
    logoMargin: 8,
  },
})

export const DashboardProvider: React.FC<{
  collapsible?: boolean
  children: React.ReactNode
}> = ({ collapsible = false, children }) => {
  const [showNav, setShowNav] = useBoolean(false)
  const [shrinkState, setShrink] = useBoolean(true)

  const shrink = collapsible ? shrinkState : false

  const sidebar = {
    width: shrink ? 20 : '18rem',
    logoMargin: shrink ? 3.5 : 8,
  }

  return (
    <DashboardContext.Provider
      value={{ showNav, setShowNav, collapsible, shrink, setShrink, sidebar }}
    >
      {children}
    </DashboardContext.Provider>
  )
}

const DashboardContainer = ({ children }: { children: React.ReactNode }) => {
  const { sidebar } = useContext(DashboardContext)
  return (
    <Box
      minH='full'
      bg='gray.50'
      pt={{ base: 0, lg: 14 }}
      pl={{ base: 0, lg: sidebar.width }}
    >
      <Container w='container.xl' maxWidth='90%' pb={14}>
        {/* <Header /> */}
        {children}
      </Container>
    </Box>
  )
}

export default Home
