import { Box, Divider, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { FaPinterest, FaTwitter } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { IoLogoInstagram } from 'react-icons/io5';
import { MdFacebook } from 'react-icons/md';
import { TiSocialGooglePlus } from 'react-icons/ti';

export const Footer = () => {
  return (
    <Box
      h={{ base: 'auto', md: '50vh' }}
      mt="20"
      _before={{ background: '#001232' }}
      px={{ base: '4', md: '28' }}
      py={{ base: '8', md: '0' }}
      className="curve-top"
    >
      <Flex
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        gap="10"
        h="100%"
        className="content"
      >
        <Flex
          w="full"
          justifyContent={{ base: 'center', md: 'space-between' }}
          alignItems={'center'}
          flexDirection={{ base: 'column', md: 'row' }}
          textAlign={{ base: 'center', md: 'left' }}
        >
          <Text
            bg="linear-gradient(90deg, #EC8111 32%, #FFFFFF 100%)"
            bgClip="text"
            fontSize="lg"
            fontWeight="bold"
            mb={{ base: '4', md: '0' }}
          >
            Toprofilemultimedia
          </Text>
          <Flex gap="2">
            <IoLogoInstagram color="white" size={'20'} />
            <IoMdMail color="white" size={'20'} />
            <FaTwitter color="white" size={'20'} />
            <TiSocialGooglePlus color="white" size={'20'} />
            <MdFacebook color="white" size={'20'} />
            <FaPinterest color="white" size={'20'} />
          </Flex>
        </Flex>
        <Divider border="1px solid #7A7A7A" />
        <Flex
          w="full"
          justifyContent={{ base: 'center', md: 'space-between' }}
          alignItems={'center'}
          flexDirection={{ base: 'column', md: 'row' }}
          textAlign={{ base: 'center', md: 'left' }}
        >
          <Text color="white" fontSize="sm" mb={{ base: '4', md: '0' }}>
            Copyright © 2024 Toprofilemultimedia
          </Text>
          <Flex
            gap="2"
            color="white"
            fontSize="sm"
            flexDirection={{ base: 'column', md: 'row' }}
          >
            <Text>Services</Text>
            <Text>Contact Us</Text>
            <Text>Book Now</Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};
