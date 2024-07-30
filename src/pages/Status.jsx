import { Box, Flex, Button, FormControl, FormLabel, Input, useColorModeValue, Heading } from '@chakra-ui/react';

import PropTypes from 'prop-types';

const FlightStatusInquiry = () => {
  const formBackground = useColorModeValue('gray.100', 'gray.700');

  return (
    <Box p={5} maxW="var(--max-width)" mx="auto">
      <Heading as="h1" size="xl" mb={4}>Flight Status</Heading>
      <hr />
      <Box
        p={5}
        boxShadow="md"
        borderRadius="md"
        maxW="xl"
        mx="auto"
        mt={10}
        bg={formBackground}
      >
        <Flex mb={4} justifyContent="center" alignItems="center">
          <Button variant="outline" mx={2} size="lg">Economy Class</Button>
          <Button variant="solid" mx={2} color="white" bg="teal.500" size="lg">Business Class</Button>
          <Button variant="outline" mx={2} size="lg">First Class</Button>
        </Flex>
        <Flex as="form" wrap="wrap" justifyContent="center" alignItems='center'>
          <FormInput label="Flight ID" placeholder="Enter Flight ID" />
          <FormInput label="Date" placeholder="Select Travelling Date" type="date" />
          <Button type="submit" colorScheme="teal" mx={2} size="lg" mt={[4, 4, 0]}>Search</Button>
        </Flex>
      </Box>
    </Box>
  );
};

const FormInput = ({ label, placeholder, type = "text" }) => (
  <FormControl flexBasis={["100%", "45%", "30%"]} mb={4} mx={2}>
    <FormLabel>{label}</FormLabel>
    <Input type={type} placeholder={placeholder} />
  </FormControl>
);

FormInput.propTypes={
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default FlightStatusInquiry;
