import { Box, Container, useBoolean } from '@chakra-ui/react'
import { createContext, useContext } from 'react'

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

export const DashboardContainer = ({
  children,
}: {
  children: React.ReactNode
}) => {
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
