import { Box, Center, Image } from '@chakra-ui/react';
import React from 'react';
import GallaryPhoto from '../assets/Group 1.png';
export const Gallary = () => {
  return (
    <Center bg="white" h="100vh">
      <Image h="xl" src={GallaryPhoto} />
    </Center>
  );
};
