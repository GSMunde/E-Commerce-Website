import { 
  Avatar, 
  Menu, 
  MenuButton, 
  MenuDivider, 
  MenuGroup, 
  MenuItem, 
  MenuList 
} from '@chakra-ui/react';
import React from 'react'

function Profile() {
  return (
    <Menu>
        <MenuButton variant='link'>
        <Avatar w={'30px'} h={'30px'} src='https://bit.ly/broken-link' />
        </MenuButton>
        <MenuList zIndex={100000}>
            <MenuGroup title='Profile'>
            <MenuItem>My Account</MenuItem>
            <MenuItem>Payments </MenuItem>
            <MenuItem>Cart</MenuItem>
            <MenuItem>Orders</MenuItem>
            <MenuItem>Login</MenuItem>
            <MenuItem>Logout</MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title='Help'>
            <MenuItem>Docs</MenuItem>
            <MenuItem>FAQ</MenuItem>
            </MenuGroup>
        </MenuList>
    </Menu>
  )
}

export default Profile;