import { Box, Heading, Text, Flex } from '@chakra-ui/react';
import PlanItem from './PlanItem';

const TravelSupport = () => {
  return (
    <Box textAlign="center" py={10}>
      <Text fontSize="xl" color="text.dark" letterSpacing="wide" mb={2}>
        TRAVEL SUPPORT
      </Text>
      <Heading as="h2" size="xl" mb={4}>
        Plan your travel with confidence
      </Heading>
      <Text color="text.light" mb={8}>
        Find help with your bookings and travel plans, and see what to expect along your journey.
      </Text>
      <Flex wrap="wrap" justify="center">
        <PlanItem number="01" title="Travel Requirements for Dubai" description="Stay informed and prepared for your trip to Dubai..." />
        <PlanItem number="02" title="Multi-risk travel insurance" description="Comprehensive protection for your peace of mind..." />
        <PlanItem number="03" title="Travel Requirements by destinations" description="Stay informed and plan your trip with ease..." />
      </Flex>
    </Box>
  );
};

export default TravelSupport;
