import { Link } from '@chakra-ui/react';
import { NavLink as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavLink = ({ text, to }) => (
  <Link
    as={RouterLink}
    to={to}
    p={2}
    fontSize="md"
    color="white"
    fontWeight="medium"
    _hover={{ textDecoration: 'underline' }}
    mx={2}
  >
    {text}
  </Link>
);

NavLink.propTypes = {
  text: PropTypes.string,
  to: PropTypes.RouterLink,
}

export default NavLink;
