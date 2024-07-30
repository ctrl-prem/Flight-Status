import { Box, Heading, Text, Flex } from '@chakra-ui/react';

const About = () => {
  return (
    <Box p={5} maxW="var(--max-width)" mx="auto">
      <Heading as="h1" size="xl" mb={4}>About Indigo</Heading>
      <hr />
      <Text fontSize="lg" color="text.light" mb={6}>
        Indigo Airlines is committed to delivering exceptional service and providing safe, comfortable, and unforgettable journeys. With state-of-the-art aircraft and a team of dedicated professionals, we connect the world and bring people together.
      </Text>
      <Flex wrap="wrap" justify="space-between">
        <Box flexBasis={["100%", "48%"]} mb={4}>
          <Heading as="h3" size="lg" mb={2}>Our Mission</Heading>
          <Text color="text.light">
            Our mission is to offer the best flying experience, ensuring every passenger&apos;s comfort and satisfaction from takeoff to landing.
          </Text>
        </Box>
        <Box flexBasis={["100%", "48%"]} mb={4}>
          <Heading as="h3" size="lg" mb={2}>Our Vision</Heading>
          <Text color="text.light">
            To be the world&apos;s leading airline, recognized for our excellence in service and innovation in aviation.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default About;
