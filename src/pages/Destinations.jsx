import { Box, Heading, Text, Flex } from '@chakra-ui/react';

const Destinations = () => {
  return (
    <Box p={5} maxW="var(--max-width)" mx="auto">
      <Heading as="h1" size="xl" mb={4}>Our Destinations</Heading>
      <Text fontSize="lg" color="text.light" mb={6}>
        Explore the world with Indigo Airlines. We fly to numerous destinations across the globe, offering you the best in travel and comfort. Discover new places and make memories with us.
      </Text>
      <Flex wrap="wrap" justify="space-between">
        <Box flexBasis={["100%", "48%"]} p={4} mb={4} bg="white" boxShadow="md" borderRadius="lg">
          <Heading as="h3" size="lg" mb={2}>Dubai</Heading>
          <Text color="text.light">Experience the luxury and excitement of Dubai. A city known for its modern architecture, shopping, and vibrant nightlife.</Text>
        </Box>
        <Box flexBasis={["100%", "48%"]} p={4} mb={4} bg="white" boxShadow="md" borderRadius="lg">
          <Heading as="h3" size="lg" mb={2}>Paris</Heading>
          <Text color="text.light">Visit the city of love and explore iconic landmarks like the Eiffel Tower, Louvre Museum, and charming cafes along the Seine River.</Text>
        </Box>
        <Box flexBasis={["100%", "48%"]} p={4} mb={4} bg="white" boxShadow="md" borderRadius="lg">
          <Heading as="h3" size="lg" mb={2}>Singapore</Heading>
          <Text color="text.light">Discover the vibrant culture and stunning skyline of Singapore. Enjoy world-class dining, shopping, and entertainment.</Text>
        </Box>
        <Box flexBasis={["100%", "48%"]} p={4} mb={4} bg="white" boxShadow="md" borderRadius="lg">
          <Heading as="h3" size="lg" mb={2}>Malaysia</Heading>
          <Text color="text.light">Explore the diverse landscapes of Malaysia, from tropical beaches to lush rainforests and bustling cities.</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Destinations;
