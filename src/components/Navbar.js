import {
  Button,
  Flex,
  Text,
  Box,
  IconButton,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      px={{ base: '4', md: '28' }}
      py="3"
      alignItems={'center'}
      justifyContent={'space-between'}
      borderBottom={'1px solid #3E3E3E'}
      position="relative" // Ensure the navbar has relative positioning for the mobile menu
    >
      <Text
        bg="linear-gradient(90deg, #EC8111 32%, #FFFFFF 100%)"
        bgClip="text"
        fontSize="lg"
        fontWeight="bold"
      >
        Toprofilemultimedia
      </Text>

      <Box display={{ base: 'none', md: 'flex' }} alignItems={'center'}>
        <Flex
          textTransform={'uppercase'}
          fontSize="xs"
          alignItems={'center'}
          fontWeight={'500'}
          gap="5"
          color={'white'}
        >
          <Text color="white">
            <a href="#service" color="white">
              Services
            </a>
          </Text>
          <Text color="white">
            <a href="#contact" color="white">
              Contact
            </a>
          </Text>
          <Button
            fontSize="xs"
            fontWeight={'400'}
            bg="linear-gradient(90deg, #EC8111 5.56%, #722B90 96.58%)"
            textTransform={'uppercase'}
            borderRadius={'40'}
            color="white"
          >
            <a href="#contact">Book now</a>
          </Button>
        </Flex>
      </Box>

      <IconButton
        aria-label="Open Menu"
        icon={isOpen ? <IoMdClose /> : <RxHamburgerMenu />}
        display={{ base: 'flex', md: 'none' }}
        onClick={isOpen ? onClose : onOpen}
      />

      {isOpen && (
        <VStack
          display={{ base: 'flex', md: 'none' }}
          pos="absolute"
          top="20" // Adjusted to position below the navbar
          left="0"
          right="0"
          bg="gray.800"
          zIndex="10"
          p={4} // Added padding for better spacing
          spacing={4}
          boxShadow="md"
        >
          <Text color="white">
            <a href="#service" color="white">
              Services
            </a>
          </Text>
          <Text color="white">
            <a href="#contact" color="white">
              Contact
            </a>
          </Text>
          <Button
            fontSize="xs"
            fontWeight={'400'}
            bg="linear-gradient(90deg, #EC8111 5.56%, #722B90 96.58%)"
            textTransform={'uppercase'}
            borderRadius={'40'}
            color="white"
          >
            <a href="#contact">Book now</a>
          </Button>
        </VStack>
      )}
    </Flex>
  );
};
