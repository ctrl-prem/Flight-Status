import { Box, Heading, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const LoungeDetails = ({ title, description }) => (
  <Box flexBasis={["100%", "45%"]} p={4} mb={6}>
    <Heading as="h4" size="md" mb={2}>{title}</Heading>
    <Text color="text.light">{description}</Text>
  </Box>
);

LoungeDetails.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default LoungeDetails;