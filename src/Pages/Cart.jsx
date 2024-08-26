import { DeleteIcon } from '@chakra-ui/icons';
import { Box, Button, Heading, Image, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AddOrder, deleteProductCart } from '../Redux/products/action';
import CheckOut from '../Components/CheckOut';

function Cart() {
  const cart = useSelector(store => store.EcommerceData.cart);
  const dispatch = useDispatch();


  const RemoveProductCart = (id) => {
    dispatch(deleteProductCart(id));
  };

  const checkOutHandler = () => {
    dispatch(AddOrder(cart))
  };


  return (
    <Box>
      <Heading as={'h3'} size={'lg'} textAlign={'center'}>Cart</Heading>
      {cart?.length && cart.map((prod) => (
        <CartItem 
        
          key={prod.id}
          id={prod.id}
          image={prod.image}
          title={prod.title}
          price={prod.price}
          category={prod.category}
          description={prod.description}
          RemoveProductCart= {RemoveProductCart}
          />
        ))};
        <CheckOut cart={cart} checkOutHandler={checkOutHandler}/>
    </Box>
  )};

function CartItem({id, image, title, price, category, description, RemoveProductCart}) {
  return(
    <Box 
      rounded={'lg'} 
      width={'fit-content'} 
      margin={'auto'}
      border={'1px solid grey'}
      marginBottom={'2rem'}
    >
      <Stack 
        direction={{base: 'column', md : 'row'}}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Box
          rounded={'lg'}
          //mt={-7}
          pos={'relative'}
          height={'300px'}
          width={'300px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: '97%',
            h: '97%',
            pos: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundImage: `url(${image})`,
            filter: 'blur(12px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={250}
            width={250}
            marginLeft={'30px'}
            marginTop={'20px'}
            //objectFit={'cover'}
            src={image}
            alt="#"
          />
        </Box>
        {/* <Box border={'1px solid green'} height={'300px'} w={'300px'}>
          <Heading></Heading>
        </Box> */}
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box 
            as={'header'}
            height={'300px'} 
            w={'300px'} 
            textAlign={'start'} 
            padding={'20px'}
          >
            <Heading
              lineHeight={1.1}
              fontWeight={400}
              fontSize={{ base: 'lg', sm: 'xl', lg: '2xl' }}>
               {title} 
            </Heading>
            <Text
              color={useColorModeValue('gray.900', 'gray.500')}
              fontWeight={500}
              p={2}
              fontSize={'2xl'}>
              ₹{price} 
            </Text>
            <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              p={1}
              fontSize={'lg'}>
              {category}
            </Text>
            <Text
                color={useColorModeValue('gray.500', 'gray.400')}
                fontSize={'lg'}
                textOverflow={'ellipsis'}
                overflow={'hidden'}
                whiteSpace={'nowrap'}
                fontWeight={'300'}>
                {description}
              </Text>
            {/* <Box>
              {Rating({rating : Number(rating?.rate)})}
            </Box> */}
            <Button variant={'solid'} marginTop={4} leftIcon={<DeleteIcon/>} onClick={() => RemoveProductCart(id)}>Remove</Button>
          </Box>
          </Stack>
      </Stack>
    </Box>
  )
}

export default Cart;