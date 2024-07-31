import { Box, Flex, Button, IconButton, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import NavLink from './NavLink';

import planImg from '../assets/indigo.jpg';

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const indStyle = {width:'9rem', height:'3rem'};
  return (
    <Box bg="lightSkyBlue" p={4} position="fixed" top={0} width="100%" zIndex="1000" className='navbar'>
      <Flex as="nav" justify="space-between" align="center" maxW="var(--max-width)" mx="auto" px={5}>
        <Box fontSize="lg" fontWeight="bold" color="white">
          <img src={planImg} alt="" style={indStyle} />
        </Box>
        <Box display={{ base: 'none', md: 'flex' }} as="ul" listStyleType="none" align="center">
          <NavLink text="Home" to="/" />
          <NavLink text="About" to="/about" />
          <NavLink text="Offers" to="/offers" />
          <NavLink text="Flight Status" to="/status" />
          <NavLink text="Destinations" to="/destinations" />
        </Box>
        <Button bg='teal.500' color='white' as="a" href="#" display={{ base: 'none', md: 'inline-flex' }}>
          Contact
        </Button>
        <IconButton
          aria-label="Open Menu"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          display={{ base: 'inline-flex', md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
      </Flex>
      {isOpen && (
        <Box pb={4} display={{ md: 'none' }}>
          <Flex as="ul" flexDirection="column" listStyleType="none" align="center">
            <NavLink text="Home" to="/" />
            <NavLink text="About" to="/about" />
            <NavLink text="Offers" to="/offers" />
            <NavLink text="Flight Status" to="/status" />
            <NavLink text="Destinations" to="/destinations" />
            <Button colorScheme='teal' as="a" href="#" mt={4}>
              Contact
            </Button>
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default NavBar;
