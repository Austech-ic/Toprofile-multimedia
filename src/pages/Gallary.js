import { Box, Center, Flex, Grid, GridItem, Image } from '@chakra-ui/react';
import React from 'react';
import GallaryPhoto from '../assets/Group 1.png';
import TopRight from '../assets/top-r.png';
import TopLeft from '../assets/top-l.png';
import TopMiddle from '../assets/top-m.png';
import BottomLeft from '../assets/bottom-l.png';
import BottomRight from '../assets/bottom-r.png';
import BottomMiddle from '../assets/bottom-m.png';
import Radio1 from '../assets/radio1.png';
import Radio2 from '../assets/radio2.png';
import Right from '../assets/right.png';

export const Gallary = () => {
  return (
    <Flex
      id="gallery"
      px={['10', '28']}
      // bg="white"

      w="100%"
      h={['auto', '100vh']}
    >
      <Grid
        templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(5, 1fr)' }}
        templateRows={{ base: 'repeat(5, auto)', md: 'repeat(5, 1fr)' }}
        gap={5}
        w="full"
        pl={['0', '40']}
      >
        <GridItem
          colStart={{ base: 1, md: 1 }}
          colEnd={{ base: 3, md: 2 }}
          rowStart={1}
          rowEnd={2}
        >
          <Image src={TopLeft} />
        </GridItem>
        <GridItem
          colStart={{ base: 1, md: 1 }}
          colEnd={{ base: 3, md: 2 }}
          rowStart={2}
          rowEnd={3}
        >
          <Image src={TopRight} />
        </GridItem>
        <GridItem
          colStart={{ base: 1, md: 1 }}
          colEnd={{ base: 3, md: 2 }}
          rowStart={{ base: 3, md: 2 }}
          rowEnd={{ base: 4, md: 4 }}
        >
          <Image h="full" src={BottomLeft} />
        </GridItem>
        <GridItem
          colStart={{ base: 1, md: 2 }}
          colEnd={{ base: 3, md: 3 }}
          rowStart={{ base: 4, md: 1 }}
          rowEnd={2}
        >
          <Image src={TopMiddle} />
        </GridItem>
        <GridItem
          colStart={{ base: 1, md: 3 }}
          colEnd={{ base: 3, md: 4 }}
          rowStart={{ base: 5, md: 1 }}
          rowEnd={2}
        >
          <Image src={TopRight} />
        </GridItem>
        <GridItem
          colStart={{ base: 1, md: 2 }}
          colEnd={{ base: 3, md: 3 }}
          rowStart={{ base: 6, md: 3 }}
          rowEnd={{ base: 7, md: 4 }}
        >
          <Image h="full" src={BottomMiddle} />
        </GridItem>
        <GridItem
          colStart={{ base: 1, md: 2 }}
          colEnd={{ base: 3, md: 3 }}
          rowStart={{ base: 7, md: 2 }}
          rowEnd={{ base: 8, md: 3 }}
        >
          <Flex>
            <Image w="28" src={Radio1} />
            <Image w="24" src={Radio2} />
          </Flex>
        </GridItem>
        <GridItem
          colStart={{ base: 1, md: 3 }}
          colEnd={{ base: 3, md: 4 }}
          rowStart={{ base: 8, md: 2 }}
          rowEnd={{ base: 9, md: 3 }}
        >
          <Image src={Right} />
        </GridItem>
        <GridItem
          colStart={{ base: 1, md: 3 }}
          colEnd={{ base: 3, md: 4 }}
          rowStart={{ base: 9, md: 3 }}
          rowEnd={{ base: 10, md: 4 }}
        >
          <Image h="full" w="full" src={BottomRight} />
        </GridItem>
      </Grid>
    </Flex>
  );
};
