import { Box, Heading, Flex, Image } from '@chakra-ui/react';
import LoungeDetails from './LoungeDetails';
import loungeImage1 from '../assets/lounge-1.jpg';
import loungeImage2 from '../assets/lounge-2.jpg';

const Lounge = () => {
  return (
    <Flex justify="space-between" py={10} px={5} wrap="wrap">
      <Box flex="1" pr={[0, 5]} mb={[5, 0]}>
        <Image src={loungeImage1} alt="Lounge 1" mb={4} borderRadius="lg" />
        <Image src={loungeImage2} alt="Lounge 2" borderRadius="lg" />
      </Box>
      <Box flex="2">
        <Heading as="h2" size="xl" mb={6}>Unaccompanied Minor Lounge</Heading>
        <Flex wrap="wrap">
          <LoungeDetails title="Experience Tranquility" description="Serenity Haven offers a tranquil escape..." />
          <LoungeDetails title="Elevate Your Experience" description="Designed for discerning travelers, this exclusive lounge..." />
          <LoungeDetails title="A Welcoming Space" description="Creating a family-friendly atmosphere, The Family Zone..." />
          <LoungeDetails title="A Culinary Delight" description="Immerse yourself in a world of flavors..." />
        </Flex>
      </Box>
    </Flex>
  );
};

export default Lounge;
