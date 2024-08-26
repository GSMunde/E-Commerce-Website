import { Box, Center, Heading, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function ProductSimple({id, image, title, price, category}) {
    return (
      <Center py={10}>
        
        <Box
          role={'group'}
          p={4}
          maxW={'280px'}
          h={'410px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          // rounded={'lg'}
          // pos={'relative'}
          zIndex={1}
          >
            <Link to={`/products/${id}`}>
          <Box
            rounded={'lg'}
            mt={-7}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${image})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'contain'}
              src={image}
              alt="#"
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
              {category}
            </Text>
            <Heading fontSize={'lg'} fontFamily={'body'} fontWeight={700} textOverflow={'ellipsis'}>
              {title}
            </Heading>
            <Stack direction={'row'} align={'center'}>
              <Text fontWeight={800} fontSize={'xl'}>
              ₹{price}
              </Text>
            </Stack>
          </Stack>
          </Link>
        </Box>
      </Center>
    )
  };