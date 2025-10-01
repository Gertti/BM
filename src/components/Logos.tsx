import {
  Box,
  Container,
  Text,
  SimpleGrid,
  VStack,
  Image,
} from '@chakra-ui/react';

// Import logo images
import logo1 from '../assets/1.png';
import logo2 from '../assets/2.png';
import logo3 from '../assets/3.png';
import logo4 from '../assets/4.png';
import logo5 from '../assets/5.png';
import logo6 from '../assets/6.png';

const Logos = () => {
  const logos = [
    { src: logo1, alt: 'Rocket Mortgage' },
    { src: logo2, alt: 'SoFi' },
    { src: logo3, alt: 'Lemonade' },
    { src: logo4, alt: 'Credible' },
    { src: logo5, alt: 'College Ave' },
    { src: logo6, alt: 'Biz2Credit' },
  ];

  return (
    <Box 
      py={[12, 16]} 
      bg="white"
      position="relative"
      overflow="hidden"
    >
      {/* Enhanced tech background elements */}
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
            linear-gradient(rgba(0, 191, 255, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 191, 255, 0.06) 1px, transparent 1px)
          `}
          backgroundSize="40px 40px"
          opacity="0.4"
          animation="gridMove 20s linear infinite"
        />

        {/* Glowing blue elements */}
        <Box
          position="absolute"
          top="20%"
          left="5%"
          width="150px"
          height="150px"
          borderRadius="50%"
          background="radial-gradient(circle, rgba(0, 191, 255, 0.08) 0%, transparent 70%)"
          animation="pulse 7s ease-in-out infinite"
        />
        
        <Box
          position="absolute"
          bottom="20%"
          right="8%"
          width="120px"
          height="120px"
          borderRadius="50%"
          background="radial-gradient(circle, rgba(0, 191, 255, 0.06) 0%, transparent 70%)"
          animation="pulse 5s ease-in-out infinite reverse"
        />

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <Box
            key={i}
            position="absolute"
            width="3px"
            height="3px"
            borderRadius="50%"
            background="rgba(0, 191, 255, 0.25)"
            top={`${15 + (i * 10)}%`}
            left={`${8 + (i * 12)}%`}
            animation={`float${i % 3} ${4 + (i % 2)}s ease-in-out infinite`}
          />
        ))}

        {/* Geometric accents */}
        <Box
          position="absolute"
          top="40%"
          right="15%"
          width="40px"
          height="40px"
          border="1px solid rgba(0, 191, 255, 0.12)"
          borderRadius="md"
          animation="rotateClockwise 18s linear infinite"
        />
      </Box>
      
      <Container maxW="1200px" px={[4, 6, 8]} position="relative" zIndex="1">
        <VStack spacing={8}>
          <Text
            fontSize="sm"
            color="blackAlpha.700"
            textAlign="center"
            textTransform="uppercase"
            letterSpacing="wide"
            fontWeight="medium"
          >
            Trusted by teams using:
          </Text>
          
          <SimpleGrid
            columns={{ base: 2, sm: 3, md: 6 }}
            spacing={8}
            w="full"
            alignItems="center"
            maxW="1000px"
            mx="auto"
          >
            {logos.map((logo, index) => (
              <Box
                key={index}
                display="flex"
                alignItems="center"
                justifyContent="center"
                h="110px"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  maxH="100px"
                  maxW="100%"
                  objectFit="contain"
                  filter="grayscale(100%)"
                  _hover={{ 
                    filter: "grayscale(0%)",
                    transform: 'translateY(-4px)',
                  }}
                  transition="all 0.3s ease"
                  cursor="pointer"
                />
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default Logos;
