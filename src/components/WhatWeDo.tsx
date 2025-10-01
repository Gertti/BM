import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  VStack,
  Text,
  Button,
  Icon,
} from '@chakra-ui/react';
import { 
  FaChartLine, 
  FaCogs, 
  FaRocket 
} from 'react-icons/fa';

const WhatWeDo = () => {
  const services = [
    {
      title: 'Strategy & Clarity',
      description: 'Define growth thesis, KPIs, and stack.',
      icon: FaChartLine,
    },
    {
      title: 'Systems & Automations',
      description: 'Build lead flows and integrations.',
      icon: FaCogs,
    },
    {
      title: 'Performance & Scale',
      description: 'Measure, test, and optimize.',
      icon: FaRocket,
    },
  ];

  return (
    <Box 
      id="whatwedo" 
      py={[16, 20]} 
      bg="black"
      position="relative"
      overflow="hidden"
    >
      {/* Techy Background Elements */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        zIndex="0"
      >
        {/* Animated grid pattern */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          backgroundImage={`
            linear-gradient(rgba(0, 191, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 191, 255, 0.1) 1px, transparent 1px)
          `}
          backgroundSize="60px 60px"
          opacity="0.3"
          animation="gridMove 30s linear infinite"
        />

        {/* Glowing orbs */}
        <Box
          position="absolute"
          top="20%"
          left="10%"
          width="200px"
          height="200px"
          borderRadius="50%"
          background="radial-gradient(circle, rgba(0, 191, 255, 0.15) 0%, transparent 70%)"
          animation="pulse 6s ease-in-out infinite"
        />
        
        <Box
          position="absolute"
          bottom="20%"
          right="15%"
          width="150px"
          height="150px"
          borderRadius="50%"
          background="radial-gradient(circle, rgba(0, 191, 255, 0.1) 0%, transparent 70%)"
          animation="pulse 4s ease-in-out infinite reverse"
        />

        {/* Floating tech elements */}
        {[...Array(8)].map((_, i) => (
          <Box
            key={i}
            position="absolute"
            width="6px"
            height="6px"
            borderRadius="50%"
            background="rgba(0, 191, 255, 0.4)"
            top={`${15 + (i * 10)}%`}
            left={`${5 + (i * 11)}%`}
            animation={`float${i % 3} ${4 + (i % 3)}s ease-in-out infinite`}
          />
        ))}
      </Box>

      <Container maxW="1200px" px={[4, 6, 8]} position="relative" zIndex="1">
        <VStack spacing={[12, 16]}>
          {/* Section Title */}
          <Heading
            as="h2"
            fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
            fontWeight="bold"
            color="white"
            textAlign="center"
            letterSpacing="tight"
          >
            What we do
          </Heading>

          {/* Services Grid */}
          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={[8, 12]}
            w="full"
          >
            {services.map((service, index) => (
              <VStack
                key={index}
                align="center"
                spacing={6}
                p={8}
                bg="whiteAlpha.50"
                borderRadius="xl"
                border="2px solid"
                borderColor="rgba(0, 191, 255, 0.2)"
                _hover={{
                  bg: 'whiteAlpha.100',
                  borderColor: 'rgba(0, 191, 255, 0.4)',
                  transform: 'translateY(-8px)',
                  boxShadow: '0 20px 40px rgba(0, 191, 255, 0.1)',
                }}
                transition="all 0.4s ease"
                h="full"
                position="relative"
                overflow="hidden"
              >
                {/* Card glow effect */}
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  right="0"
                  bottom="0"
                  bg="linear-gradient(135deg, rgba(0, 191, 255, 0.05) 0%, transparent 50%)"
                  opacity="0"
                  _groupHover={{ opacity: "1" }}
                  transition="opacity 0.4s ease"
                />

                {/* Icon */}
                <Box
                  position="relative"
                  zIndex="2"
                  bg="rgba(0, 191, 255, 0.1)"
                  p={4}
                  borderRadius="full"
                  border="2px solid"
                  borderColor="rgba(0, 191, 255, 0.3)"
                  _hover={{
                    bg: 'rgba(0, 191, 255, 0.2)',
                    borderColor: 'rgba(0, 191, 255, 0.5)',
                    transform: 'scale(1.1)',
                  }}
                  transition="all 0.3s ease"
                >
                  <Icon
                    as={service.icon}
                    boxSize={8}
                    color="#00BFFF"
                  />
                </Box>

                {/* Content */}
                <VStack spacing={3} textAlign="center" position="relative" zIndex="2">
                  <Heading
                    as="h3"
                    fontSize="xl"
                    fontWeight="bold"
                    color="white"
                    lineHeight="1.3"
                  >
                    {service.title}
                  </Heading>
                  <Text
                    color="whiteAlpha.800"
                    fontSize="md"
                    lineHeight="1.6"
                    maxW="250px"
                  >
                    {service.description}
                  </Text>
                </VStack>
              </VStack>
            ))}
          </SimpleGrid>

          {/* CTA */}
          <Button
            bg="#D77A45"
            color="white"
            _hover={{ bg: '#C96A35' }}
            size="lg"
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({
                behavior: 'smooth'
              });
            }}
            mt={4}
          >
            Get in touch
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default WhatWeDo;
