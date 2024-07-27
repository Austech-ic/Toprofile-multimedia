import React from 'react';
import { Box, Image, Flex, Text, SimpleGrid, Divider } from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slide1 from '../assets/Frame 3893.png';
import Slide2 from '../assets/Frame 51.png';
import { GoDotFill } from 'react-icons/go';
const Events = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const Tag = ({ name }) => {
    return (
      <Flex
        gap="2"
        alignItems={'center'}
        borderRadius={'8px'}
        px="5"
        w="fit-content"
        bg="white"
      >
        <GoDotFill color="rgba(217, 217, 217, 1)" />
        <Text>{name}</Text>
      </Flex>
    );
  };
  return (
    <Slider {...settings} style={{ overflow: 'hidden' }}>
      <Flex
        alignItems={'center'}
        flexDir={'column'}
        bg="rgba(242, 242, 242, 1)"
        px={['10', '28']}
        py="20"
        my="20"
        overflow={'hidden'}
      >
        {/* <Image src={Slide1} h="90%" w="100%" /> */}
        <Box w="fit-content" position={'relative'}>
          <Text textAlign={'left'} color="#752D8D" fontSize={'44'}>
            Event We Cover
          </Text>
          <Divider
            border="2px solid rgba(236, 129, 18, 1)"
            position="absolute"
            right={['0']}
            display={['none', 'flex']}
            w="32"
          />
          <Divider
            border="2px solid rgba(236, 129, 18, 1)"
            position="absolute"
            left={['0']}
            w="32"
            display={['flex', 'none']}
          />
        </Box>
        <SimpleGrid mt="10" rowGap={'10'} gap="5" columns={['1', '4']}>
          <Tag name="Carnival" />
          <Tag name="House Parties" />
          <Tag name="Wedding Receptions" />
          <Tag name="Beach Parties" />
          <Tag name="Dinner Nights" />
          <Tag name="Concerts" />
          <Tag name="Outreaches" />
          <Tag name="Anniversaries" />
          <Tag name="Grand Openings" />
          <Tag name="Seminars" />
          <Tag name="Movie Sets" />
          <Tag name="After Parties" />
          <Tag name="Company Events" />
          <Tag name="Sales Banquets" />
          <Tag name="School Dances" />
          <Tag name="Bachelors' Eve" />
        </SimpleGrid>
      </Flex>
      <Flex
        overflow={'hidden'}
        alignItems={'center'}
        flexDir={'column'}
        bg="rgba(242, 242, 242, 1)"
        px={['10', '28']}
        py="20"
        my="20"
      >
        {/* <Image src={Slide1} h="90%" w="100%" /> */}
        <Box w="fit-content" position={'relative'}>
          <Text textAlign={'left'} color="#752D8D" fontSize={'44'}>
            Event We Cover
          </Text>
          <Divider
            border="2px solid rgba(236, 129, 18, 1)"
            position="absolute"
            right={['0']}
            display={['none', 'flex']}
            w="32"
          />
          <Divider
            border="2px solid rgba(236, 129, 18, 1)"
            position="absolute"
            left={['0']}
            w="32"
            display={['flex', 'none']}
          />
        </Box>
        <SimpleGrid mt="10" rowGap={'10'} gap="5" columns={['1', '4']}>
          <Tag name="Matriculation" />
          <Tag name="Graduation" />
          <Tag name="Get-togethers " />
          <Tag name="End-of-the-year Parties" />
          <Tag name="Birthday Parties (Both Children and Adults)" />
          <Tag name=" Marketing/Publicity Stunts/Adverts" />
          <Tag name=" Naming Ceremonies" />
          <Tag name=" Traditional Ceremonies" />
          <Tag name="Christmas/New Year Parties" />
          <Tag name="Road Shows/Tours/Street Jamz" />
          <Tag name="Holiday Parties" />
          <Tag name="Award Banquets" />
        </SimpleGrid>
      </Flex>
    </Slider>
  );
};

export default Events;
