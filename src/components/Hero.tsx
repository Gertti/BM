import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  Button,
  Link,
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

        {/* Mouse-responsive medium-sized balls around the hero section - Desktop only */}
        {[
          { x: 15, y: 20, size: 60, speed: 0.8 },
          { x: 85, y: 25, size: 50, speed: 0.7 },
          { x: 20, y: 70, size: 55, speed: 0.9 },
          { x: 80, y: 65, size: 65, speed: 0.75 },
          { x: 10, y: 45, size: 45, speed: 0.85 },
          { x: 90, y: 50, size: 58, speed: 0.72 },
          { x: 30, y: 15, size: 52, speed: 0.78 },
          { x: 70, y: 85, size: 48, speed: 0.82 },
        ].map((ball, i) => {
          const offsetX = (mousePosition.x - ball.x) * ball.speed;
          const offsetY = (mousePosition.y - ball.y) * ball.speed;
          
          return (
            <Box
              key={`mouse-ball-${i}`}
              display={{ base: "none", md: "block" }}
              position="absolute"
              width={`${ball.size}px`}
              height={`${ball.size}px`}
              borderRadius="50%"
              background={`radial-gradient(circle, rgba(0, 191, 255, ${0.2 + i * 0.02}) 0%, rgba(0, 191, 255, ${0.1 + i * 0.01}) 40%, transparent 70%)`}
              boxShadow={`0 0 ${20 + i * 2}px rgba(0, 191, 255, 0.3)`}
              left={`${ball.x}%`}
              top={`${ball.y}%`}
              style={{
                transform: `translate(-50%, -50%) translate(${offsetX}px, ${offsetY}px)`,
                transition: 'transform 0.2s ease-out',
              }}
              pointerEvents="none"
              filter="blur(8px)"
            />
          );
        })}
        

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

        {/* Floating particles - enhanced - Desktop only */}
        {[...Array(12)].map((_, i) => (
          <Box
            key={i}
            display={{ base: "none", md: "block" }}
            position="absolute"
            width={i < 6 ? "4px" : "3px"}
            height={i < 6 ? "4px" : "3px"}
            borderRadius="50%"
            background={i < 6 ? "rgba(0, 191, 255, 0.8)" : "rgba(0, 191, 255, 0.6)"}
            top={`${10 + (i * 8)}%`}
            left={`${5 + (i * 8)}%`}
            animation={`float${i % 3} ${2 + (i % 3)}s ease-in-out infinite`}
            sx={{ animationDelay: `${i * 0.3}s` }}
          />
        ))}

        {/* Independent moving lights - Desktop only */}
        <Box
          display={{ base: "none", md: "block" }}
          position="absolute"
          width="150px"
          height="150px"
          borderRadius="50%"
          background="radial-gradient(circle, rgba(0, 191, 255, 0.2) 0%, transparent 70%)"
          top="15%"
          right="20%"
          animation="slowFloat1 8s ease-in-out infinite"
        />
        <Box
          display={{ base: "none", md: "block" }}
          position="absolute"
          width="120px"
          height="120px"
          borderRadius="50%"
          background="radial-gradient(circle, rgba(0, 191, 255, 0.18) 0%, transparent 70%)"
          bottom="25%"
          left="15%"
          animation="slowFloat2 10s ease-in-out infinite"
        />
        <Box
          display={{ base: "none", md: "block" }}
          position="absolute"
          width="80px"
          height="80px"
          borderRadius="50%"
          background="radial-gradient(circle, rgba(0, 191, 255, 0.25) 0%, transparent 60%)"
          top="60%"
          right="10%"
          animation="slowFloat3 6s ease-in-out infinite"
        />

        {/* Brighter blue points - Desktop only */}
        {[...Array(15)].map((_, i) => (
          <Box
            key={`bright-${i}`}
            display={{ base: "none", md: "block" }}
            position="absolute"
            width={`${2 + (i % 3)}px`}
            height={`${2 + (i % 3)}px`}
            borderRadius="50%"
            background="rgba(0, 191, 255, 0.9)"
            boxShadow="0 0 8px rgba(0, 191, 255, 0.6)"
            top={`${5 + (i * 6)}%`}
            left={`${3 + (i * 6.5)}%`}
            animation={`brightFloat${i % 4} ${3 + (i % 3)}s ease-in-out infinite`}
            sx={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}

        {/* Additional scattered bright points - Desktop only */}
        <Box
          display={{ base: "none", md: "block" }}
          position="absolute"
          width="3px"
          height="3px"
          borderRadius="50%"
          background="rgba(0, 191, 255, 1)"
          boxShadow="0 0 10px rgba(0, 191, 255, 0.8)"
          top="25%"
          right="30%"
          animation="twinkle 2s ease-in-out infinite"
        />
        <Box
          display={{ base: "none", md: "block" }}
          position="absolute"
          width="4px"
          height="4px"
          borderRadius="50%"
          background="rgba(0, 191, 255, 1)"
          boxShadow="0 0 12px rgba(0, 191, 255, 0.8)"
          top="70%"
          left="25%"
          animation="twinkle 3s ease-in-out infinite"
          sx={{ animationDelay: "1s" }}
        />
        <Box
          display={{ base: "none", md: "block" }}
          position="absolute"
          width="2px"
          height="2px"
          borderRadius="50%"
          background="rgba(0, 191, 255, 1)"
          boxShadow="0 0 8px rgba(0, 191, 255, 0.9)"
          top="40%"
          right="15%"
          animation="twinkle 2.5s ease-in-out infinite"
          sx={{ animationDelay: "0.5s" }}
        />
        <Box
          display={{ base: "none", md: "block" }}
          position="absolute"
          width="3px"
          height="3px"
          borderRadius="50%"
          background="rgba(0, 191, 255, 1)"
          boxShadow="0 0 10px rgba(0, 191, 255, 0.8)"
          top="80%"
          right="40%"
          animation="twinkle 2.8s ease-in-out infinite"
          sx={{ animationDelay: "1.5s" }}
        />

        {/* Right side moving pointers/particles - Desktop only */}
        {[...Array(8)].map((_, i) => (
          <Box
            key={`right-pointer-${i}`}
            display={{ base: "none", md: "block" }}
            position="absolute"
            width={`${3 + (i % 2)}px`}
            height={`${3 + (i % 2)}px`}
            borderRadius="50%"
            background={`rgba(0, 191, 255, ${0.7 + (i % 3) * 0.1})`}
            boxShadow={`0 0 ${6 + (i % 3) * 2}px rgba(0, 191, 255, 0.5)`}
            top={`${15 + (i * 10)}%`}
            right={`${5 + (i % 3) * 8}%`}
            animation={`rightFloat${i % 3} ${4 + (i % 2)}s ease-in-out infinite`}
            sx={{ animationDelay: `${i * 0.4}s` }}
          />
        ))}

        {/* Additional right side bright points - Desktop only */}
        <Box
          display={{ base: "none", md: "block" }}
          position="absolute"
          width="4px"
          height="4px"
          borderRadius="50%"
          background="rgba(0, 191, 255, 1)"
          boxShadow="0 0 12px rgba(0, 191, 255, 0.8)"
          top="20%"
          right="8%"
          animation="rightPulse 3s ease-in-out infinite"
        />
        <Box
          display={{ base: "none", md: "block" }}
          position="absolute"
          width="3px"
          height="3px"
          borderRadius="50%"
          background="rgba(0, 191, 255, 0.9)"
          boxShadow="0 0 10px rgba(0, 191, 255, 0.7)"
          top="45%"
          right="12%"
          animation="rightPulse 4s ease-in-out infinite"
          sx={{ animationDelay: "1s" }}
        />
        <Box
          display={{ base: "none", md: "block" }}
          position="absolute"
          width="5px"
          height="5px"
          borderRadius="50%"
          background="rgba(0, 191, 255, 1)"
          boxShadow="0 0 15px rgba(0, 191, 255, 0.9)"
          top="65%"
          right="6%"
          animation="rightPulse 2.5s ease-in-out infinite"
          sx={{ animationDelay: "2s" }}
        />
        <Box
          display={{ base: "none", md: "block" }}
          position="absolute"
          width="2px"
          height="2px"
          borderRadius="50%"
          background="rgba(0, 191, 255, 0.8)"
          boxShadow="0 0 8px rgba(0, 191, 255, 0.6)"
          top="85%"
          right="15%"
          animation="rightPulse 3.5s ease-in-out infinite"
          sx={{ animationDelay: "0.5s" }}
        />

        {/* Additional small moving balls on right side - Desktop only */}
        {[...Array(12)].map((_, i) => (
          <Box
            key={`right-ball-${i}`}
            display={{ base: "none", md: "block" }}
            position="absolute"
            width={`${2 + (i % 3)}px`}
            height={`${2 + (i % 3)}px`}
            borderRadius="50%"
            background={`rgba(0, 191, 255, ${0.6 + (i % 4) * 0.1})`}
            boxShadow={`0 0 ${4 + (i % 3) * 2}px rgba(0, 191, 255, 0.4)`}
            top={`${8 + (i * 7.5)}%`}
            right={`${3 + (i % 4) * 6}%`}
            animation={`rightBallFloat${i % 4} ${3.5 + (i % 3)}s ease-in-out infinite`}
            sx={{ animationDelay: `${i * 0.3}s` }}
          />
        ))}

        {/* Extra scattered moving balls - Desktop only */}
        {[...Array(6)].map((_, i) => (
          <Box
            key={`right-scatter-${i}`}
            display={{ base: "none", md: "block" }}
            position="absolute"
            width="2px"
            height="2px"
            borderRadius="50%"
            background={`rgba(0, 191, 255, ${0.7 + (i % 2) * 0.2})`}
            boxShadow="0 0 6px rgba(0, 191, 255, 0.5)"
            top={`${12 + (i * 14)}%`}
            right={`${2 + (i % 2) * 20}%`}
            animation={`rightScatter${i % 3} ${4 + (i % 2)}s ease-in-out infinite`}
            sx={{ animationDelay: `${i * 0.5}s` }}
          />
        ))}

        {/* Small shiny blue balls for Mobile only - scattered all over */}
        {[...Array(25)].map((_, i) => (
          <Box
            key={`mobile-ball-${i}`}
            display={{ base: "block", md: "none" }}
            position="absolute"
            width={`${2 + (i % 3)}px`}
            height={`${2 + (i % 3)}px`}
            borderRadius="50%"
            background={`rgba(0, 191, 255, ${0.7 + (i % 3) * 0.1})`}
            boxShadow={`0 0 ${6 + (i % 3) * 2}px rgba(0, 191, 255, 0.6)`}
            top={`${5 + (i * 3.8)}%`}
            left={`${(i * 17 + 3) % 95}%`}
            animation={`float${i % 3} ${3 + (i % 3)}s ease-in-out infinite`}
            sx={{ animationDelay: `${i * 0.15}s` }}
            filter="brightness(1.2)"
          />
        ))}

        {/* Additional bright mobile balls */}
        {[...Array(20)].map((_, i) => (
          <Box
            key={`mobile-bright-${i}`}
            display={{ base: "block", md: "none" }}
            position="absolute"
            width={`${1.5 + (i % 2)}px`}
            height={`${1.5 + (i % 2)}px`}
            borderRadius="50%"
            background="rgba(0, 191, 255, 0.9)"
            boxShadow="0 0 8px rgba(0, 191, 255, 0.8)"
            top={`${8 + (i * 4.5)}%`}
            right={`${(i * 13 + 5) % 90}%`}
            animation={`brightFloat${i % 4} ${2.5 + (i % 3)}s ease-in-out infinite`}
            sx={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}

      </Box>

      {/* Static blue light backdrop behind content */}
      {/* Mobile: Single large blue ball */}
      <Box
        display={{ base: "block", md: "none" }}
        position="absolute"
        top="45%"
        left="50%"
        transform="translate(-50%, -50%)"
        width="85vw"
        height="60vh"
        background="radial-gradient(ellipse at center, rgba(0, 191, 255, 0.25) 0%, rgba(0, 191, 255, 0.15) 25%, rgba(0, 191, 255, 0.08) 50%, transparent 75%)"
        borderRadius="50%"
        zIndex="0"
        filter="blur(60px)"
      />
      {/* Desktop: Original backdrop */}
      <Box
        display={{ base: "none", md: "block" }}
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        width="80%"
        height="70%"
        background="radial-gradient(ellipse at center, rgba(0, 191, 255, 0.15) 0%, rgba(0, 191, 255, 0.08) 30%, rgba(0, 191, 255, 0.04) 50%, transparent 70%)"
        borderRadius="50%"
        zIndex="0"
        filter="blur(40px)"
      />

      <Container maxW="1200px" px={[4, 6, 8]} position="relative" zIndex="1">
        <VStack spacing={[4, 6, 8]} textAlign="center" maxW="800px" mx="auto">
          {/* Hero Complex Logo */}
          <Box display="flex" alignItems="center" justifyContent="center">
            <Image
              src={logoImage}
              alt="Hero Complex"
              h={{ base: "200px", sm: "280px", md: "380px", lg: "450px" }}
              w="auto"
              maxW="90vw"
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
            fontSize={{ base: 'clamp(1.3rem, 5vw, 2rem)', sm: 'clamp(1.8rem, 5vw, 2.5rem)', md: 'clamp(2rem, 3.5vw, 3.2rem)' }}
            fontWeight="bold"
            lineHeight="1.2"
            letterSpacing="tight"
            color="white"
            px={{ base: 2, sm: 0 }}
          >
            Intelligent Automation for Modern Businesses
          </Heading>

          {/* Subcopy */}
          <Text
            fontSize={{ base: 'sm', sm: 'md', md: 'lg' }}
            color="white"
            maxW="600px"
            lineHeight="1.6"
            px={{ base: 2, sm: 0 }}
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
          <VStack spacing={{ base: 3, sm: 4 }} w="full" maxW={{ base: "full", sm: "500px" }} px={{ base: 0, sm: 4 }} mt={{ base: 6, md: 0 }}>
            <Button
              bg="#D77A45"
              color="white"
              _hover={{ 
                bg: '#C96A35',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 20px rgba(215, 122, 69, 0.4)'
              }}
              _active={{ 
                bg: '#B85A25', 
                transform: 'scale(0.97)',
                boxShadow: '0 4px 10px rgba(215, 122, 69, 0.3)'
              }}
              _focus={{
                boxShadow: '0 0 0 3px rgba(215, 122, 69, 0.3)'
              }}
              size="lg"
              fontSize={{ base: 'md', md: 'lg' }}
              h={{ base: '52px', md: '56px' }}
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({
                  behavior: 'smooth'
                });
              }}
              w="full"
              borderRadius="lg"
              fontWeight="bold"
              transition="all 0.25s ease"
              boxShadow="0 4px 14px rgba(215, 122, 69, 0.3)"
            >
              Get Started
            </Button>
            <Link
              href="#whatwedo"
              _hover={{ textDecoration: 'none' }}
              w="full"
            >
              <Button
                bg="transparent"
                color="white"
                border="2px solid"
                borderColor="whiteAlpha.400"
                _hover={{ 
                  bg: 'whiteAlpha.100', 
                  borderColor: 'whiteAlpha.600',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 20px rgba(255, 255, 255, 0.15)'
                }}
                _active={{ 
                  bg: 'whiteAlpha.200', 
                  transform: 'scale(0.97)',
                  boxShadow: '0 4px 10px rgba(255, 255, 255, 0.1)'
                }}
                _focus={{
                  boxShadow: '0 0 0 3px rgba(255, 255, 255, 0.2)'
                }}
                size="lg"
                fontSize={{ base: 'md', md: 'lg' }}
                h={{ base: '52px', md: '56px' }}
                w="full"
                borderRadius="lg"
                fontWeight="bold"
                transition="all 0.25s ease"
                boxShadow="0 4px 14px rgba(255, 255, 255, 0.1)"
              >
                See what we do
              </Button>
            </Link>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Hero;
