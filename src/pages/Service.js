import { Box, Grid, GridItem, Image, Text } from '@chakra-ui/react';
import React from 'react';
import EventCoverage from '../assets/event-coverage.png';
import DiscJockey from '../assets/Disc-Jockey.png';
import EquipmentRental from '../assets/equipment-rental.png';
import AudiovisualProduction from '../assets/Audiovisual Production.png';
import DigitalMedia from '../assets/Digital-MediaAI.png';
export const Service = () => {
  return (
    <Box px="28" py="20" bg="white">
      <Text color="#752D8D" fontWeight="500" fontSize="32">
        Our Services
      </Text>
      <Grid
        mt="10"
        h="full"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={7}
      >
        <GridItem
          rowSpan={2}
          colSpan={1}
          border="1px solid #EDEDED"
          borderRadius={'24px'}
          h="2xl"
        >
          <Box>
            <Image
              h="md"
              objectFit={'cover'}
              borderTopRadius={'24px'}
              objectPosition={'top'}
              w="full"
              src={EventCoverage}
            />
          </Box>
          <Box px="6" pt="7" textAlign={'left'}>
            <Text fontWeight="500" fontSize={'20'}>
              Event Coverage
            </Text>
            <Text mt="3" fontSize={'sm'} color="#A4A4A4">
              With our digital cameras, we cover (record) live events such as
              conferences (business, academic, or political), weddings, parties,
              concerts, rallies, publicity stunts, festivals, anniversaries,
              outreaches, carnivals, etc
            </Text>
          </Box>
        </GridItem>
        <GridItem colSpan={1} border="1px solid #EDEDED" borderRadius={'24px'}>
          <Box>
            <Image
              h="24"
              objectFit={'cover'}
              borderTopRadius={'24px'}
              objectPosition={'top'}
              w="full"
              src={DiscJockey}
            />
          </Box>
          <Box px="6" pt="7" textAlign={'left'}>
            <Text fontWeight="500" fontSize={'20'}>
              Disc Jockey
            </Text>
            <Text mt="3" fontSize={'sm'} color="#A4A4A4">
              We have a chart-topping DJ service. We will set up and play
              recorded music for your audience, ensuring excellent music and
              sound production. Our DJs add creative flair to their art and we
              never run out of popular songs and danceable beats.
            </Text>
          </Box>
        </GridItem>
        <GridItem colSpan={1} border="1px solid #EDEDED" borderRadius={'24px'}>
          <Box>
            <Image
              h="24"
              objectFit={'cover'}
              borderTopRadius={'24px'}
              objectPosition={'top'}
              w="full"
              src={EquipmentRental}
            />
          </Box>
          <Box px="6" pt="7" textAlign={'left'}>
            <Text fontWeight="500" fontSize={'20'}>
              Equipment Rental
            </Text>
            <Text mt="3" fontSize={'sm'} color="#A4A4A4">
              When we can, we lease out our equipment to event managers and film
              makers. Thereby, we relieve you of the financial burden of owning
              high-grade equipment. We ensure you meet our equipment in a good
              and rentable condition.
            </Text>
          </Box>
        </GridItem>
        <GridItem colSpan={1} border="1px solid #EDEDED" borderRadius={'24px'}>
          <Box>
            <Image
              h="24"
              objectFit={'cover'}
              borderTopRadius={'24px'}
              objectPosition={'top'}
              w="full"
              src={AudiovisualProduction}
            />
          </Box>
          <Box px="6" pt="7" textAlign={'left'}>
            <Text fontWeight="500" fontSize={'20'}>
              Audiovisual Production
            </Text>
            <Text mt="3" fontSize={'sm'} color="#A4A4A4">
              This entails the making of both auditory and visual contents.
              Among these are adverts/commercials, corporate videos, TV shows,
              films, music videos, etc.
            </Text>
          </Box>
        </GridItem>
        <GridItem colSpan={1} border="1px solid #EDEDED" borderRadius={'24px'}>
          <Box>
            <Image
              h="24"
              objectFit={'cover'}
              borderTopRadius={'24px'}
              objectPosition={'top'}
              w="full"
              src={DigitalMedia}
            />
          </Box>
          <Box px="6" pt="7" textAlign={'left'}>
            <Text fontWeight="500" fontSize={'20'}>
              Digital Media/AI
            </Text>
            <Text mt="3" fontSize={'sm'} color="#A4A4A4">
              The business landscape has been taken over by the digital media.
              Our enterprise cuts across social media, web, live-streaming,
              animation, AI, etc.
            </Text>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};
