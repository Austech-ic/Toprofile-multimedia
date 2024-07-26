import { Button, Flex, Text } from '@chakra-ui/react';
import React from 'react';

export const Navbar = () => {
  return (
    <Flex
      px="28"
      py="3"
      alignItems={'center'}
      justifyContent={'space-between'}
      borderBottom={'1px solid #3E3E3E'}
    >
      <Text
        bg="linear-gradient(90deg, #EC8111 32%, #FFFFFF 100%)"
        bgClip="text"
        fontSize="lg"
        fontWeight="bold"
      >
        Toprofilemultimedia
      </Text>
      <Flex
        textTransform={'uppercase'}
        fontSize="xs"
        alignItems={'center'}
        fontWeight={'500'}
        gap="5"
        color={'white'}
      >
        <Text>Services</Text>
        <Text>Contact us</Text>
        <Button
          fontSize="xs"
          fontWeight={'400'}
          bg="linear-gradient(90deg, #EC8111 5.56%, #722B90 96.58%)"
          textTransform={'uppercase'}
          borderRadius={'40'}
          color="white"
        >
          Book now
        </Button>
      </Flex>
    </Flex>
  );
};
