import { HStack, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';


export const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
      <HStack>
        <Image src={logo} boxSize='60px' />
        <Heading color='pink' size='md'>Games-O-Lotl</Heading>
      </HStack>
      
      
       <ColorModeSwitch/> 
    </HStack>
  )
}

export default NavBar