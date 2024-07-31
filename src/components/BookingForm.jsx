import { Box, Button, Flex, Input, FormLabel, FormControl, Select } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useState } from 'react';

const BookingForm = () => {
  const [bookingClass, setBookingClass] = useState("Business Class");

  return (
    <Box p={5} boxShadow="md" borderRadius="md" maxW="var(--max-width)" mx="auto" mt={10}>
      <Flex mb={4} justifyContent="center" alignItems="center" wrap='wrap'>
        <Box display={{ base: "none", md: "block" }}>
          <Button variant={bookingClass === "Economy Class" ? "solid" : "outline"} mx={2} onClick={() => setBookingClass("Economy Class")}>
            Economy Class
          </Button>
          <Button variant={bookingClass === "Business Class" ? "solid" : "outline"} mx={2} onClick={() => setBookingClass("Business Class")}>
            Business Class
          </Button>
          <Button variant={bookingClass === "First Class" ? "solid" : "outline"} mx={2} onClick={() => setBookingClass("First Class")}>
            First Class
          </Button>
        </Box>
        <Box display={{ base: "block", md: "none" }} width="100%" mb={4}>
          <Select value={bookingClass} onChange={(e) => setBookingClass(e.target.value)} width="100%">
            <option value="Economy Class">Economy Class</option>
            <option value="Business Class">Business Class</option>
            <option value="First Class">First Class</option>
          </Select>
        </Box>
      </Flex>
      <Flex as="form" wrap="wrap" justify="space-between">
        <FormInput label="Location" placeholder="Where are you going?" />
        <FormInput label="Travellers" placeholder="Add guests" type="number" />
        <FormInput label="Departure" placeholder="Add date" />
        <FormInput label="Return" placeholder="Add date" />
      </Flex>
      <Flex justifyContent='center' alignItems='center'>
        <Button type="submit" colorScheme="teal">Search</Button>
      </Flex>
    </Box>
  );
};

const FormInput = ({ label, placeholder, type = "text" }) => (
  <FormControl flexBasis={{ base: "100%", md: "45%", lg: "20%" }} mb={4}>
    <FormLabel>{label}</FormLabel>
    <Input type={type} placeholder={placeholder} />
  </FormControl>
);

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default BookingForm;
