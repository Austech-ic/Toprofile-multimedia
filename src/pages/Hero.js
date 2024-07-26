import { border, Box, Button, Flex, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { GoDotFill } from 'react-icons/go';
export const Hero = () => {
  const texts = [
    {
      text: 'Chart-topping Disc Jockey (DJ) in the city!',
      icon: <GoDotFill color="#E01B1B" />,
    },
    {
      text: 'Impeccable Video Coverage and Photography',
      icon: <GoDotFill color="#E0B51B" />,
    },
    {
      text: 'Master of Ceremony (optional)',
      icon: <GoDotFill color="#5660FF" />,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <Box id="home" h={['auto', '100vh']} pb="5">
      <Flex flexDirection={'column'} mt="24">
        <Text
          color="white"
          fontSize={['52', '72']}
          fontWeight={'700'}
          textTransform={'uppercase'}
        >
          Book us<br></br> for your next{' '}
          <span style={{ color: '#D04B76' }}>event!</span>
        </Text>
        <Text color="white" fontSize="20">
          Enjoy a lifetime memory from our high-quality and classy
          entertainment.
        </Text>
        <Flex my="10" justifyContent={'center'} alignItems={'center'}>
          <marquee
            width="25%"
            direction="left"
            scrollamount="10"
            behavior="scroll"
            style={{
              borderLeft: '1px solid #C3C3C3',
              borderRight: '1px solid #C3C3C3',
            }}
          >
            <Flex alignItems="center">
              <Box mr="2">{texts[currentIndex].icon}</Box>
              <Text color="white" fontSize="sm" fontWeight="500">
                {texts[currentIndex].text}
              </Text>
            </Flex>
          </marquee>
        </Flex>
        <Box display="flex" justifyContent={'center'} alignItems={'center'}>
          <Button
            mt="5"
            fontSize="xs"
            fontWeight={'500'}
            bg="linear-gradient(90deg, #EC8111 5.56%, #722B90 96.58%)"
            textTransform={'uppercase'}
            borderRadius={'40'}
            color="white"
            px="8"
          >
            Book Now
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};
