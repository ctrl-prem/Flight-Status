import { Box, Heading, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const PlanItem = ({ number, title, description }) => (
  <Box flexBasis={["100%", "45%", "30%"]} p={4} textAlign="left" mb={6}>
    <Text fontSize="xl" color="primary.100" mb={2}>{number}</Text>
    <Heading as="h4" size="md" mb={2}>{title}</Heading>
    <Text color="text.light">{description}</Text>
  </Box>
);

PlanItem.propTypes = {
  number: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default PlanItem;