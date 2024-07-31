import { Box, Button, Flex, Input, FormLabel, FormControl, Select, Heading } from '@chakra-ui/react';
import { useState } from 'react';
import PropTypes from 'prop-types';

const FlightStatusInquiry = () => {
  const [bookingClass, setBookingClass] = useState("Business Class");

  return (
    <Box>
      <Heading p={5}>
        Flight Status
      </Heading>
      <hr />
      <Box p={5} boxShadow="md" borderRadius="md" maxW="2xl" mx="auto" my={10} bg="gray.50">
        <Flex mb={8} justifyContent="center" alignItems="center">
          <Select
            value={bookingClass}
            onChange={(e) => setBookingClass(e.target.value)}
            size="lg"
            width="100%"
            maxW="20rem"
          >
            <option value="Economy Class">Economy Class</option>
            <option value="Business Class">Business Class</option>
            <option value="First Class">First Class</option>
          </Select>
        </Flex>
        <Flex as="form" wrap="wrap" justifyContent="space-around" alignItems='center'>
          <FormInput label="Flight ID" placeholder="Enter Flight ID" />
          <FormInput label="Date" placeholder="Select Travelling Date" type="date" />
          <Box width={{ base: "100%", md: "auto" }} mt={{ base: 4, md: 0 }}>
            <Button type="submit" mt={2} colorScheme="teal" size="lg" width="100%">Search</Button>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

const FormInput = ({ label, placeholder, type = "text" }) => (
  <FormControl flexBasis={{ base: "100%", md: "45%", lg: "30%" }} mb={4}>
    <FormLabel>{label}</FormLabel>
    <Input type={type} placeholder={placeholder} />
  </FormControl>
);

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default FlightStatusInquiry;
