import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  CloseIcon,
} from '@chakra-ui/icons'
import routes from '@/routes'
import { useAuth } from '@/contexts/AuthProvider';

export default function Header() {
  const { isOpen, onToggle } = useDisclosure()
  const auth = useAuth();

  const menuItems = routes.filter(route => route.primary && route.children).map(route => route.children).flat();
  const handleLogout = () => {
    auth.logoutAuth();
    return
  }

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 5 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex className='container mx-auto'>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              fontSize={'2xl'}
              fontWeight={600}
              color={useColorModeValue('gray.800', 'white')}>
              IP Management
            </Text>

            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav menus={menuItems} />
            </Flex>
          </Flex>
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
            <Button as={'a'} fontSize={'sm'} fontWeight={400} variant={'link'} onClick={handleLogout}>
              Log Out
            </Button>
          </Stack>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav menus={menuItems} />
      </Collapse>
    </Box>
  )
}

const DesktopNav = ({ menus }: any) => {
  const linkColor = useColorModeValue('gray.600', 'gray.200')
  const linkHoverColor = useColorModeValue('gray.800', 'white')

  return (
    <Stack direction={'row'} spacing={4} alignItems={'center'}>
      {menus.map((route: any) => (
        <Box key={route.name}>
          <Box
            as="a"
            p={2}
            href={route.path ?? '#'}
            fontSize={'md'}
            fontWeight={500}
            color={linkColor}
            _hover={{
              textDecoration: 'none',
              color: linkHoverColor,
            }}>
            {route.name}
          </Box>
        </Box>
      )
      )}
    </Stack>
  )
}

const MobileNav = ({ menus }: any) => {
  return (
    <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
      {menus.map((route: any) => (
        <MobileNavItem key={route.name} {...route} />
      ))}
    </Stack>
  )
}

const MobileNavItem = ({ name, path }: any) => {

  return (
    <>
      <Stack spacing={4}>
        <Box
          py={2}
          as="a"
          href={path ?? '#'}
          justifyContent="space-between"
          alignItems="center"
          _hover={{
            textDecoration: 'none',
          }}>
          <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
            {name}
          </Text>
        </Box>
      </Stack>
    </>
  )
}
