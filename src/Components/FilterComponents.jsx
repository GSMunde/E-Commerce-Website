import { 
    Box, 
    Checkbox, 
    CheckboxGroup, 
    VStack, 
    Text, 
    Menu, 
    MenuButton, 
    MenuList, 
    MenuOptionGroup, 
    MenuItemOption, 
    MenuDivider, 
    Button 
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { fetchData } from '../Redux/products/action';

function FilterComponents() {
    const [searchParams, setSearchParams] = useSearchParams('');
    const dispatch = useDispatch();


    const [categoryValue, setCategoryValues] = useState(
        searchParams.getAll("category") || []
    );


    const handleChategory = (value) => {
        setCategoryValues(value);
    };

    useEffect(() => {
        if (categoryValue) {
            setSearchParams({category : categoryValue});
            let params = {
                category : searchParams.getAll("category"),
            };
            dispatch(fetchData(params));
        }
    },[categoryValue, dispatch, searchParams, setSearchParams]);

  return (
    <Box>
        <Box display={{base : 'none', md: 'block'}} p='2rem 1rem'>
            <Text fontSize='2xl' textAlign='start'>Filters</Text>
            <Text fontSize='lg' fontWeight={400} py={2} textAlign='start'>Category</Text>


            <CheckboxGroup colorScheme='green' defaultValue={categoryValue} onChange={handleChategory}>
                <VStack alignItems={'baseline'}>
                    <Checkbox value="Indian Wear">Indian Wear</Checkbox>
                    <Checkbox value="Bags">Bags</Checkbox>
                    <Checkbox value="Foot wear">Foot wear</Checkbox>
                    <Checkbox value="Westernwear">Westernwear</Checkbox>
                    <Checkbox value="Jewellery">Jewellery</Checkbox>
                </VStack>
            </CheckboxGroup>
        </Box>
        <Box display={{base : 'block', md: 'none'}} p='0rem 2rem'>
            <Menu closeOnSelect={false}>
                <MenuButton as={Button} colorScheme='blue'>
                    MenuItem
                </MenuButton>
                <MenuList minWidth='240px'>
                    <MenuOptionGroup defaultValue='asc' title='Order' type='radio'>
                    <MenuItemOption value='asc'>Ascending</MenuItemOption>
                    <MenuItemOption value='desc'>Descending</MenuItemOption>
                    </MenuOptionGroup>
                    <MenuDivider />
                    <MenuOptionGroup title='Country' type='checkbox'>
                    <MenuItemOption value='email'>Email</MenuItemOption>
                    <MenuItemOption value='phone'>Phone</MenuItemOption>
                    <MenuItemOption value='country'>Country</MenuItemOption>
                    </MenuOptionGroup>
                </MenuList>
            </Menu>
        </Box>
    </Box>
  )
};



export default FilterComponents;