import { Box } from '@chakra-ui/react';
import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from './Hero';
import CoverImage from '../assets/hero-screen-cover-image.png';
import { Service } from './Service';
import { Gallary } from './Gallary';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { Events } from './Events';
export const MainScreen = () => {
  return (
    <Box>
      <Box position="relative">
        <Box
          bgImage={`url(${CoverImage})`}
          bgSize="cover"
          bgPosition="center"
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          zIndex="-1"
        />
        <Box
          bg="rgba(12, 12, 72, 0.6)"
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          zIndex="0"
        />
        <Box position="relative" zIndex="1">
          <Navbar />
          <Hero />
        </Box>
      </Box>

      <Service />
      {/* <Events /> */}
      {/* <Gallary /> */}
      <Contact />
      <Footer />
    </Box>
  );
};
