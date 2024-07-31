import { Box, Heading, Button, Flex } from '@chakra-ui/react';
import MemoryCard from './MemoryCard';
import { FaCalendarAlt, FaShieldAlt, FaBookmark } from 'react-icons/fa';

const Memories = () => {
  return (
    <Box textAlign="center" py={10} bg="gray.50">
      <Flex justify="space-between" align="center" mb={8} px={5} maxW="1200px" mx="auto" wrap="wrap">
        <Heading as="h2" size="xl" textAlign={{base:'center', md:'left'}} flexBasis={{ base: "100%", md: "65%" }} mb={{ base: 4, md: 0 }}>
          Travel to make memories all around the world
        </Heading>
        <Button 
          colorScheme="teal" 
          borderRadius="25px" 
          flexBasis={{ base: "100%", md: "auto" }} 
          ml={{ base: 0, md: 4 }}
          mt={{ base: 4, md: 0 }}
        >
          View All
        </Button>
      </Flex>
      <Flex wrap="wrap" justifyContent="space-around" maxW="1200px" mx="auto" gap={5}>
        <MemoryCard 
          icon={FaCalendarAlt} 
          title="Book & relax" 
          description="With 'Book and Relax,' you can sit back, unwind, and enjoy the journey while we take care of everything else."
        />
        <MemoryCard 
          icon={FaShieldAlt} 
          title="Smart Checklist" 
          description="Introducing Smart Checklist with us, the innovative solution revolutionizing the way you travel with our airline."
        />
        <MemoryCard 
          icon={FaBookmark} 
          title="Save More" 
          description="From discounted ticket prices to exclusive promotions and deals, we prioritize affordability without compromising on quality."
        />
      </Flex>
    </Box>
  );
};

export default Memories;
