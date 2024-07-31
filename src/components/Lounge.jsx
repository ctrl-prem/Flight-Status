import { Box, Heading, Flex, Image } from '@chakra-ui/react';
import LoungeDetails from './LoungeDetails';

import Lounge1 from '../assets/lounge.jpg';

const Lounge = () => {
  return (
    <Flex justifyContent="space-between" py={10} px={5} wrap="wrap" alignItems="center">
      <Box
        flex={{ base: "100%", md: "0.5" }}
        order={{base: '1', md:'0'}}
      >
        <Image
          src={Lounge1}
          alt="Lounge"
        />
      </Box>
      <Box flex={{ base: "100%", md: "1.2" }} maxW="600px" mx="auto">
        <Heading as="h2" size="xl" mb={6} textAlign='center'>Unaccompanied Minor Lounge</Heading>
        <Flex wrap="wrap" justifyContent='center'>
          <LoungeDetails title="Experience Tranquility" description="Serenity Haven offers a tranquil escape, featuring comfortable seating, calming ambiance, and attentive service." />
          <LoungeDetails title="Elevate Your Experience" description="Designed for discerning travelers, this exclusive lounge offers premium amenities, assistance, and private workspaces." />
          <LoungeDetails title="A Welcoming Space" description="Creating a family-friendly atmosphere, The Family Zone is the perfect haven for parents and children." />
          <LoungeDetails title="A Culinary Delight" description="Immerse yourself in a world of flavors, offering international cuisines, gourmet dishes, and carefully curated beverages." />
        </Flex>
      </Box>
    </Flex>
  );
};

export default Lounge;
