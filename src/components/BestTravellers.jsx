import { Box, Heading, Flex } from '@chakra-ui/react';
import TravellerCard from './TravellerCard';
import traveller1 from '../assets/traveller-1.jpg';
import traveller2 from '../assets/traveller-2.jpg';
import traveller3 from '../assets/traveller-3.jpg';
import traveller4 from '../assets/traveller-4.jpg';

const BestTravellers = () => {
  return (
    <Box textAlign="center" py={10}>
      <Heading as="h2" size="xl" mb={8}>Best travellers of the month</Heading>
      <Flex wrap="wrap" justify="center" maxW="var(--max-width)" mx="auto">
        <TravellerCard name="Emily Johnson" location="Dubai" imgSrc={traveller1} />
        <TravellerCard name="David Smith" location="Paris" imgSrc={traveller2} />
        <TravellerCard name="Olivia Brown" location="Singapore" imgSrc={traveller3} />
        <TravellerCard name="Daniel Taylor" location="Malaysia" imgSrc={traveller4} />
      </Flex>
    </Box>
  );
};

export default BestTravellers;
