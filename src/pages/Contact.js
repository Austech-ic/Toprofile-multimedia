import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Textarea,
} from '@chakra-ui/react';
import React from 'react';
import CoverImage from '../assets/contactImage.png';
import { IoCall } from 'react-icons/io5';
import { IoMdMail } from 'react-icons/io';
import MapImage from '../assets/map.png';
import { BsBox2Fill } from 'react-icons/bs';
export const Contact = () => {
  return (
    <Box px={['5', '28']} my="20" h="auto">
      <Flex
        position={'relative'}
        justifyContent={'space-between'}
        borderRadius={'38.49px'}
        h="fit-content"
        border="1px solid #FFFFFF"
        boxShadow={'0px 2px 7.6px 0px #00000026'}
        overflow={'hidden'}
      >
        <Box w={['100%', '50%']} px={['10', '24']} py="10" textAlign={'left'}>
          <Text fontSize="28" fontWeight="500">
            Contact Us
          </Text>
          <Text fontSize="sm">
            Enim tempor eget pharetra facilisis sed maecenas adipiscing.{' '}
            <br></br> Eu leo molestie vel, ornare non id blandit netus.
          </Text>
          <form>
            <FormControl mt="10">
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  fontSize="sm"
                  w="fit-content"
                  pl="4"
                  pr="10"
                  color="#828282"
                >
                  Name
                </InputLeftElement>
                <Input pl="14" />
              </InputGroup>
            </FormControl>

            <FormControl mt="5">
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  fontSize="sm"
                  w="fit-content"
                  px="4"
                  color="#828282"
                >
                  Email
                </InputLeftElement>
                <Input pl="14" />
              </InputGroup>
            </FormControl>

            <FormControl mt="5">
              <InputGroup borderRadius={'9.24px'}>
                <InputLeftElement
                  pointerEvents="none"
                  fontSize="sm"
                  w="fit-content"
                  px="4"
                  color="#828282"
                >
                  Phone Number
                </InputLeftElement>
                <Input pl="28" />
              </InputGroup>
            </FormControl>

            <FormControl mt="5">
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  fontSize="sm"
                  w="fit-content"
                  px="4"
                  color="#828282"
                >
                  Message
                </InputLeftElement>
                <Textarea pt="8" />
              </InputGroup>
            </FormControl>
            <Button
              borderRadius={'18.48px'}
              h="12"
              color="white"
              my="5"
              w="full"
              bg="linear-gradient(90deg, #EC8111 5.56%, #722B90 96.58%)"
            >
              Send
            </Button>
            <Flex flexDirection={['column', 'row']} gap="10">
              <Flex gap="2" alignItems={'center'}>
                <IoCall size="28" />
                <Box fontSize={'xs'}>
                  <Text color={'#742C90'} fontWeight={'500'}>
                    PHONE
                  </Text>
                  <Text>09047068433</Text>
                </Box>
              </Flex>

              <Flex gap="2" alignItems={'center'}>
                <IoMdMail size="28" />
                <Box fontSize={'xs'}>
                  <Text color={'#742C90'} fontWeight={'500'}>
                    EMAIL
                  </Text>
                  <Text>toprofilemultimedia@gmail.com</Text>
                </Box>
              </Flex>
            </Flex>
          </form>
        </Box>
        <Box display={['none', 'block']}>
          <Image
            top="20"
            right="48"
            position={'absolute'}
            objectFit={'cover'}
            src={MapImage}
          />
          <Image w="full" objectFit={'cover'} h="full" src={CoverImage} />
        </Box>
      </Flex>
    </Box>
  );
};
