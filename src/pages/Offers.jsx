import { Box, Heading, Text, Flex } from '@chakra-ui/react';

const Offers = () => {
  return (
    <Box p={5} maxW="var(--max-width)" mx="auto">
      <Heading as="h1" size="xl" mb={4}>Special Offers</Heading>
      <hr />
      <Text fontSize="lg" color="text.light" mb={6}>
        Take advantage of our exclusive deals and discounts on flights to various destinations. Whether you&apos;re traveling for business or leisure, Indigo Airlines offers you the best rates and packages.
      </Text>
      <Flex wrap="wrap" justify="space-between">
        <Box flexBasis={["100%", "48%", "32%"]} p={4} mb={4} bg="white" boxShadow="md" borderRadius="lg">
          <Heading as="h3" size="lg" mb={2}>Summer Getaway</Heading>
          <Text color="text.light">Enjoy up to 30% off on select flights this summer. Book now and soak up the sun at your favorite destinations.</Text>
        </Box>
        <Box flexBasis={["100%", "48%", "32%"]} p={4} mb={4} bg="white" boxShadow="md" borderRadius="lg">
          <Heading as="h3" size="lg" mb={2}>Business Class Special</Heading>
          <Text color="text.light">Experience luxury in the sky with our Business Class Special offers. Save up to 40% on business class tickets.</Text>
        </Box>
        <Box flexBasis={["100%", "48%", "32%"]} p={4} mb={4} bg="white" boxShadow="md" borderRadius="lg">
          <Heading as="h3" size="lg" mb={2}>Family Travel Discounts</Heading>
          <Text color="text.light">Planning a family vacation? Get special discounts for family bookings on select routes.</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Offers;
