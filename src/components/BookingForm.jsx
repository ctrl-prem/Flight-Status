import { Box, Button, Flex, Input, FormLabel, FormControl } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const BookingForm = () => {
  return (
    <Box p={5} boxShadow="md" borderRadius="md" maxW="var(--max-width)" mx="auto" mt={10}>
      <Flex mb={4} justify="center" align="center">
        <Button variant="outline" mx={2}>Economy Class</Button>
        <Button variant="solid" mx={2} color={"white"} bg={"primary.100"}>Business Class</Button>
        <Button variant="outline" mx={2}>First Class</Button>
      </Flex>
      <Flex as="form" wrap="wrap" justify="space-between">
        <FormInput label="Location" placeholder="Where are you going?" />
        <FormInput label="Travellers" placeholder="Add guests" type="number" />
        <FormInput label="Departure" placeholder="Add date" />
        <FormInput label="Return" placeholder="Add date" />
        <Button type="submit" colorScheme="teal" mx={2}>Search</Button>
      </Flex>
    </Box>
  );
};

const FormInput = ({ label, placeholder, type = "text" }) => (
  <FormControl flexBasis={["100%", "45%", "20%"]} mb={4}>
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
