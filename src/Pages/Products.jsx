import { 
  Box, 
  Stack,
  Heading,
  Flex, 
} from '@chakra-ui/react';
import React, { useEffect } from 'react'
import FilterComponents from '../Components/FilterComponents';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../Redux/products/action';
import ProductSimple from '../Components/ProductSimple';
import { useSearchParams } from 'react-router-dom';

function Products() {
  const products = useSelector((store) => store.EcommerceData.products);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams('');

  useEffect(() => {
    if (products?.length === 0) {
      let params = {
        category : searchParams.getAll('category'),
      };
      dispatch(fetchData(params));
    }
  },[dispatch, products?.length, searchParams]);

  return (
    <Box>
      <Stack display={{md :'flex'}} flexDirection={{md: 'row'}}>
        <Box>
          <FilterComponents/>
        </Box>
        <Box style={{border: '1px solid grey'}}></Box>
        <Box>
          <Heading as='h4'>Products</Heading>
          <Flex flexWrap='wrap'  justifyContent='space-around'>
            {products.map((product) => {
              return(
                <ProductSimple 
                  key={product.id}
                  id={product.id}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  category={product.category}
                  rating ={product.rating}
                />
              );
            })}
          </Flex>
          
        </Box>
      </Stack>
    </Box>
  );
};
export default Products;



