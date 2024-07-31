import { Box, Heading, Text, Flex, Link, Icon } from '@chakra-ui/react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

import Indigo from '../assets/indigo.jpg'

const Footer = () => {
    const indStyle = {width:'9rem', height:'3rem'}
  return (
    <Box bg="lightSkyBlue" py={10} color="primary.100">
      <Flex justify="space-between" wrap="wrap" maxW="var(--max-width)" mx="auto" px={5}>
        <Box flexBasis="100%" mb={6}>
          <Heading as="h3" size="lg" mb={4}>
            <img src={Indigo} alt="" style={indStyle} />
          </Heading>
          <Text mb={2}>Where Excellence Takes Flight. With a strong commitment to customer satisfaction and a passion for air travel, Indigo Airlines offers exceptional service and seamless journeys.</Text>
          <Text>From friendly smiles to state-of-the-art aircraft, we connect the world, ensuring safe, comfortable, and unforgettable experiences.</Text>
        </Box>
        <Box flexBasis="45%" mb={6}>
          <Heading as="h4" size="md" mb={4}>INFORMATION</Heading>
          <Link mb={2} display="block" href='/'>Home</Link>
          <Link mb={2} display="block" href='/about'>About</Link>
          <Link mb={2} display="block" href='/offers'>Offers</Link>
          <Link mb={2} display="block" href='/status'>Flight Status</Link>
          <Link mb={2} display="block" href='/destinations'>Destinations</Link>
        </Box>
        <Box flexBasis="45%" mb={6}>
          <Heading as="h4" size="md" mb={4}>CONTACT</Heading>
          <Link mb={2} display="block" href='#'>Support</Link>
          <Link mb={2} display="block" href='#'>Media</Link>
          <Link mb={2} display="block" href='#'>Socials</Link>
        </Box>
      </Flex>
      <Flex justify="space-between" align="center" mt={10} borderTop="1px solid rgba(255, 255, 255, 0.1)" pt={5} maxW="var(--max-width)" mx="auto" px={5} wrap="wrap">
        <Text fontSize="sm">Copyright © 2024 Web Design Mastery. All rights reserved.</Text>
        <Flex>
          <Link href="#" mx={2}><Icon as={FaFacebookF} /></Link>
          <Link href="#" mx={2}><Icon as={FaTwitter} /></Link>
          <Link href="#" mx={2}><Icon as={FaInstagram} /></Link>
          <Link href="#" mx={2}><Icon as={FaYoutube} /></Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
