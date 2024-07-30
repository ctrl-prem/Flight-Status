import { Box, Heading, Button, Flex } from '@chakra-ui/react';
import MemoryCard from './MemoryCard';
import { FaCalendarAlt, FaShieldAlt, FaBookmark } from 'react-icons/fa';

const Memories = () => {
  return (
    <Box textAlign="center" py={10} bg="extraLight">
      <Flex justify="space-between" align="center" mb={8} px={5} maxW="var(--max-width)" mx="auto" wrap="wrap">
        <Heading as="h2" size="xl" flexBasis={["100%", "auto"]} mb={[4, 0]}>
          Travel to make memories all around the world
        </Heading>
        <Button colorScheme="teal" flexBasis={["100%", "auto"]}>View All</Button>
      </Flex>
      <Flex wrap="wrap" justify="center" maxW="var(--max-width)" mx="auto">
        <MemoryCard icon={FaCalendarAlt} title="Book & relax" description="With 'Book and Relax,' you can sit back..." />
        <MemoryCard icon={FaShieldAlt} title="Smart Checklist" description="Introducing Smart Checklist with us..." />
        <MemoryCard icon={FaBookmark} title="Save More" description="From discounted ticket prices to exclusive promotions..." />
      </Flex>
    </Box>
  );
};

export default Memories;