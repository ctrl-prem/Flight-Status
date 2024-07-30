import { Box, Heading, Input, Button, Flex } from '@chakra-ui/react';

const Subscribe = () => {
  return (
    <Box bg="extraLight" py={10} textAlign="center">
      <Heading as="h2" size="xl" mb={6}>Subscribe newsletter & get latest news</Heading>
      <Flex as="form" justify="center" align="center" maxW="md" mx="auto">
        <Input placeholder="Enter your email here" type="email" borderRadius="full" />
        <Button colorScheme="teal" borderRadius="full" ml={2}>Subscribe</Button>
      </Flex>
    </Box>
  );
};

export default Subscribe;
