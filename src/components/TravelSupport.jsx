import { Box, Heading, Text, Flex, Image } from "@chakra-ui/react";

import Travel from "../assets/travel.jpg";

const TravelSupport = () => {
  const subHeading = { fontWeight: "500" };

  return (
    <Box textAlign="center" py={{ base: 10, md: 12 }} px={{ base: 4, md: 8 }}>
      <Text fontSize={{ base: "lg", md: "xl" }} color="gray.700" letterSpacing="wide" mb={2}>
        TRAVEL SUPPORT
      </Text>
      <Heading as="h2" size={{ base: "xl", md: "3xl" }} mb={4}>
        Plan your travel with confidence
      </Heading>
      <Text color="gray.500" mb={8}>
        Find help with your bookings and travel plans, and see what to expect
        along your journey.
      </Text>
      <Flex
        wrap="wrap"
        justifyContent="space-around"
        alignItems="center"
        pl={{base:'0', md:'10'}}
      >
        <Box width={{ base: "100%", md: "50%" }} textAlign="left" mb={{ base: 8, md: 0 }}>
          <Text mb={4}>
            <strong>01</strong> <span style={subHeading}>Travel Requirements for Dubai</span>
          </Text>
          <Text mb={4}>
            Stay informed and prepared for your trip to Dubai, ensuring a smooth
            and hassle-free experience in this vibrant and captivating city.
          </Text>
          <Text mb={4}>
            <strong>02</strong> <span style={subHeading}>Multi-risk travel insurance</span>
          </Text>
          <Text mb={4}>
            Comprehensive protection for your peace of mind, covering a range of
            potential travel risks and unexpected situations.
          </Text>
          <Text mb={4}>
            <strong>03</strong> <span style={subHeading}>Travel Requirements by destinations</span>
          </Text>
          <Text mb={4}>
            Stay informed and plan your trip with ease, as we provide up-to-date
            information on travel requirements specific to your desired
            destinations.
          </Text>
        </Box>
        <Box
          width={{ base: "100%", md: "50%" }}
        >
          <Image src={Travel} />
        </Box>
      </Flex>
    </Box>
  );
};

export default TravelSupport;
