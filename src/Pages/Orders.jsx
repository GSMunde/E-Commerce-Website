import { Box, Heading, Image, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FetchOrderData } from '../Redux/products/action';


function Orders() {
    const orders = useSelector(store => store.EcommerceData.orders);
    const dispatch = useDispatch();
    console.log(orders);
    

    useEffect(() => {
        dispatch(FetchOrderData())
    },[dispatch]);

    return (
        <Box>
            <Heading as={'h3'} size={'lg'}>Your Orders</Heading>
            <Box>
                {orders.map(product => {
                    return(
                    <OrderItem 
                        key={product.id}
                        image={product.image}
                        title={product.title}
                        price={product.price}
                        category={product.category}
                        description={product.description}
                    />)
                })}
            </Box>
            
        </Box>
    )
};



function OrderItem({image, title, price, category, description}) {
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
                fontWeight={500}
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
                p={2}
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
            </Box>
            </Stack>
        </Stack>
      </Box>
    )
  }

export default Orders;