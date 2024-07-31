import { Box, Heading, Image } from '@chakra-ui/react';
import headerImage from '../assets/header.jpg';

const Header = () => {
    const planStyle = {display:'flex', justifyContent:'center', alignItem:'center'};

  return (
    <Box textAlign="center" py={10}>
      <Heading as="h1" size="2xl" mb={4}>
        Find And Book A Great Experience
      </Heading>
      <div style={planStyle}>
        <Image src={headerImage} alt="header" />
      </div>
      
    </Box>
  );
};

export default Header;
