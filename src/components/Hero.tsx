import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  Button,
  Link,
  HStack,
  Image,
} from '@chakra-ui/react';
import { useState, useEffect, useRef } from 'react';
import logoImage from '../assets/logo.png';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      return () => heroElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <Box
      ref={heroRef}
      minH={{ base: 'calc(100vh - 60px)', md: '100vh' }}
      display="flex"
      alignItems="center"
      pt={{ base: 4, md: 0 }}
      mt={{ base: -4, md: -8 }}
      position="relative"
      overflow="hidden"
    >
      {/* Animated Background Elements */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        zIndex="0"
      >
        {/* Main gradient background */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          background="radial-gradient(circle at center, rgba(0, 191, 255, 0.1) 0%, transparent 70%)"
          animation="pulse 4s ease-in-out infinite"
        />
        
        {/* Mouse-responsive gradient */}
        <Box
          position="absolute"
          width="400px"
          height="400px"
          borderRadius="50%"
          background="radial-gradient(circle, rgba(0, 191, 255, 0.15) 0%, rgba(0, 191, 255, 0.05) 40%, transparent 70%)"
          transform={`translate(${mousePosition.x - 50}%, ${mousePosition.y - 50}%)`}
          transition="transform 0.3s ease-out"
          pointerEvents="none"
        />

        {/* Geometric grid pattern */}
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
          backgroundSize="50px 50px"
          opacity="0.3"
          animation="gridMove 20s linear infinite"
        />

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <Box
            key={i}
            position="absolute"
            width="4px"
            height="4px"
            borderRadius="50%"
            background="rgba(0, 191, 255, 0.6)"
            top={`${20 + (i * 15)}%`}
            left={`${10 + (i * 12)}%`}
            animation={`float${i % 3} ${3 + (i % 2)}s ease-in-out infinite`}
          />
        ))}

      </Box>


      <Container maxW="1200px" px={[4, 6, 8]} position="relative" zIndex="1">
        <VStack spacing={[6, 8]} textAlign="center" maxW="800px" mx="auto">
          {/* Hero Complex Logo */}
          <Box display="flex" alignItems="center" justifyContent="center">
            <Image
              src={logoImage}
              alt="Hero Complex"
              h={{ base: "250px", sm: "300px", md: "350px" }}
              w="auto"
              fallback={
                <Box
                  w={{ base: "300px", sm: "350px", md: "400px" }}
                  h={{ base: "250px", sm: "300px", md: "350px" }}
                  bg="whiteAlpha.100"
                  borderRadius="lg"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
                  color="whiteAlpha.700"
                  textAlign="center"
                  px={4}
                  fontWeight="bold"
                >
                  HERO COMPLEX
                </Box>
              }
            />
          </Box>

          {/* Main headline */}
          <Heading
            as="h1"
            fontSize={{ base: 'clamp(2rem, 6vw, 3.5rem)', md: 'clamp(2.5rem, 4vw, 4rem)' }}
            fontWeight="bold"
            lineHeight="1.1"
            letterSpacing="tight"
            color="white"
          >
            Intelligent Automation for Modern Businesses
          </Heading>

          {/* Subcopy */}
          <Text
            fontSize={{ base: 'md', md: 'lg' }}
            color="white"
            maxW="600px"
            lineHeight="1.6"
          >
            We{' '}
            <Text as="span" fontWeight="bold">
              design, connect, and automate
            </Text>{' '}
            your growth systems so - your team focuses on{' '}
            <Text as="span" fontWeight="bold">
              what matters
            </Text>
            .
          </Text>

          {/* CTAs */}
          <HStack spacing={4} flexDirection={{ base: 'column', sm: 'row' }} w="full" justify="center">
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
              minW={{ base: 'full', sm: 'auto' }}
            >
              Get Started
            </Button>
            <Link
              href="#whatwedo"
              _hover={{ textDecoration: 'none' }}
              minW={{ base: 'full', sm: 'auto' }}
            >
              <Button
                bg="transparent"
                color="white"
                border="1px solid"
                borderColor="whiteAlpha.300"
                _hover={{ bg: 'whiteAlpha.100' }}
                size="lg"
                w="full"
              >
                See what we do
              </Button>
            </Link>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Hero;
