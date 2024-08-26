import { Box } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AddFetchData } from '../Redux/products/action';

function CartCounter() {
    const cart = useSelector(store => store.EcommerceData.cart)
    const dispatch = useDispatch();

    useEffect(() => {
      if (cart?.length === 0) {
        dispatch(AddFetchData());
      }
    },[cart?.length, dispatch]);
    
    
    return (
    <Box 
    fontSize={'10px'} 
    textColor={'white'}
    backgroundColor={'black'}
    borderRadius={'50%'}
    height={'15px'}
    w={'15px'}
    // paddingBottom={'20px'}
    position={'absolute'}
    right={'0'}
    top={'0'}
    >
        {cart?.length ? cart.length : 0}
    </Box>
  )
}

export default CartCounter;