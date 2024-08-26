import {
  Box,
  Flex,
  IconButton,
  Button,
  Stack,
  Collapse,
  useColorModeValue,
  useDisclosure,
  Input,
  Image,
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  CloseIcon,
  SearchIcon,
} from '@chakra-ui/icons';
import Profile from './Profile';
import { BsCart3 } from "react-icons/bs";
import CartCounter from './CartCounter';
import { Link } from 'react-router-dom';

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
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
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          {/* <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}>
            Logo
          </Text> */}
          <Image w={'80px'} height={'40px'} src='https://image.similarpng.com/thumbnail/2020/12/Luxury-boutique-logo-template-on-transparent-background-PNG.png' alt='Logo'/>

          <Flex 
            display={{ base: 'none', md: 'flex' }} 
            alignItems={'center'} ml={10} 
            fontWeight={500}
          >
              <Link to={'/'}>Home</Link>
          </Flex>

          <Flex display={{ base: 'none', md: 'flex' }} alignItems={'center'} ml={10} fontWeight={500}>
              <Link to={'/products'}>Products</Link>
          </Flex>

          <Flex display={{ base: 'none', md: 'flex' }} alignItems={'center'} ml={10} fontWeight={500}>
              <Link to={'/about'}>About</Link>
          </Flex>

          <Flex align={'center'} border={'grey'} mx={10}>
            <Input 
              htmlSize={80}   
              width='570px' 
              placeholder='Search' 
              borderEnd={'none'} 
              borderEndRadius={'0px'} 
              fontWeight={'500'}
              _hover={{ borderColor: 'grey', border: '1px solid'  }} 
            />
            <IconButton 
              aria-label='Search database' 
              variant='outline' 
              colorScheme='grey' 
              borderStart={'none'} 
              icon={<SearchIcon />} 
              borderStartRadius={'0px'}
              _hover={{ borderColor: 'grey', border: '1px solid',}}
            />
          </Flex>

          <Flex display={{ base: 'none', md: 'flex' }} alignItems={'center'} fontWeight={500}>
              <Link to={'/orders'}>My Orders</Link>
          </Flex>

        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
            <Flex alignItems={'center'} cursor={'pointer'} fontSize={'25px'}>
            <Link to={'/cart'}>
              <Box position={'relative'} padding={'0 0.3rem 0 0'}>
                <CartCounter/>
                <BsCart3 />
              </Box>
            </Link>
          </Flex>
          <Flex alignItems={'center'}>
            <Profile/>
          </Flex>
          <Button 
            as={'a'} 
            fontSize={'sm'} 
            fontWeight={400} 
            variant={'link'} 
            href={'/login'}
            px={4}
            bg={'blue.400'}
            color={'white'}
              hover={{
                bg: 'blue.500',
              }} 
          >
            LogIn
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity></Collapse>
    </Box>
  )
}