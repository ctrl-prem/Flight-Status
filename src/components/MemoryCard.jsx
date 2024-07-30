import { Box, Heading, Text, Icon } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const MemoryCard = ({ icon, title, description }) => (
  <Box flexBasis={["100%", "45%", "30%"]} p={4} textAlign="center" mb={6} bg="white" boxShadow="md" borderRadius="lg">
    <Icon as={icon} boxSize={10} color="primary.100" mb={4} />
    <Heading as="h4" size="md" mb={2}>{title}</Heading>
    <Text color="text.light">{description}</Text>
  </Box>
);

MemoryCard.propTypes = {
  icon: PropTypes.icon,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default MemoryCard;
