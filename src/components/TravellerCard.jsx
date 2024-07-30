import { Box, Image, Heading, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const TravellerCard = ({ name, location, imgSrc }) => (
  <Box flexBasis={["100%", "45%", "22%"]} textAlign="center" mb={6} boxShadow="md" borderRadius="lg" overflow="hidden">
    <Image src={imgSrc} alt={name} />
    <Box p={4}>
      <Heading as="h4" size="md" mb={2}>{name}</Heading>
      <Text color="text.light">{location}</Text>
    </Box>
  </Box>
);

TravellerCard.propTypes = {
  name: PropTypes.string,
  location: PropTypes.string,
  imgSrc: PropTypes.url,
};

export default TravellerCard;