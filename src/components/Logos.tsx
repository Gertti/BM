import {
  Box,
  Container,
  HStack,
  Heading,
  Image,
  VStack,
} from '@chakra-ui/react';
import { useEffect, useRef } from 'react';

// Import logo assets
import logo1 from '../assets/1.png';
import logo2 from '../assets/2.png';
import logo3 from '../assets/3.png';
import logo4 from '../assets/4.png';
import logo5 from '../assets/5.png';
import logo6 from '../assets/6.png';

const Logos = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6];
  const sliderRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let startTime: number | undefined;
    const duration = 20000; // 20 seconds

    const animate = (currentTime: number) => {
      if (startTime === undefined) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = (elapsed % duration) / duration;

      // Move from 0 to -50% for seamless loop
      const translateX = progress * -50;
      slider.style.transform = `translateX(${translateX}%)`;

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseEnter = () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };

    const handleMouseLeave = () => {
      startTime = undefined;
      animationRef.current = requestAnimationFrame(animate);
    };

    slider.addEventListener('mouseenter', handleMouseEnter);
    slider.addEventListener('mouseleave', handleMouseLeave);

    // Start animation
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      slider.removeEventListener('mouseenter', handleMouseEnter);
      slider.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <Box
      bg="linear-gradient(180deg, #000000 0%, #0a0f1c 50%, #000000 100%)"
      pt={{ base: 4, md: 6 }}
      pb={{ base: 0, md: 0 }}
      position="relative"
      overflow="hidden"
    >
      {/* Subtle Background Elements */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        zIndex="0"
      >
        {/* Floating blue particles */}
        {[...Array(6)].map((_, i) => (
          <Box
            key={i}
            position="absolute"
            width="2px"
            height="2px"
            borderRadius="50%"
            background="rgba(0, 191, 255, 0.4)"
            top={`${20 + (i * 15)}%`}
            left={`${10 + (i * 15)}%`}
            animation={`float${i % 3} ${3 + (i % 2)}s ease-in-out infinite`}
            sx={{ animationDelay: `${i * 0.5}s` }}
          />
        ))}
        
        {/* Subtle gradient orbs */}
        <Box
          position="absolute"
          width="200px"
          height="200px"
          borderRadius="50%"
          background="radial-gradient(circle, rgba(0, 191, 255, 0.05) 0%, transparent 70%)"
          top="20%"
          left="80%"
          filter="blur(40px)"
        />
        <Box
          position="absolute"
          width="150px"
          height="150px"
          borderRadius="50%"
          background="radial-gradient(circle, rgba(232, 138, 92, 0.03) 0%, transparent 70%)"
          bottom="30%"
          left="15%"
          filter="blur(30px)"
        />
      </Box>

      {/* White fade overlay for entire section */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="rgba(255, 255, 255, 0.8)"
        zIndex="1"
      />

      <Container maxW="1400px" px={[6, 4, 6]} position="relative" zIndex="2">
        <VStack spacing={{ base: 0, md: -4 }}>
          {/* Title */}
          <Heading
            as="h2"
            fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
            fontWeight="bold"
            color="black"
            textAlign="center"
            letterSpacing="tight"
            mt={{ base: '-2rem', md: '-1rem' }}
            pt={{ base: 4, md: 3 }}
          >
            Our Trusted Partners:
          </Heading>

          {/* Desktop: Horizontal Row */}
          <Box display={{ base: "none", md: "block" }} w="full" mt={{ base: 0, md: -6 }}>
            <HStack
              spacing={{ base: 12, md: 16, lg: 20 }}
              justify="center"
              align="center"
              flexWrap="nowrap"
              w="full"
            >
              {logos.map((logo, index) => (
                <Box
                  key={index}
                  flex="1"
                  maxW={{ base: "220px", md: "260px", lg: "300px" }}
                  h={{ base: "110px", md: "130px", lg: "150px" }}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Image
                    src={logo}
                    alt={`Logo ${index + 1}`}
                    h="full"
                    w="auto"
                    maxW="full"
                    objectFit="contain"
                    opacity={0.9}
                    _hover={{ opacity: 1 }}
                    transition="all 0.3s ease"
                    transform="scale(1.2)"
                  />
                </Box>
              ))}
            </HStack>
          </Box>

          {/* Mobile: Auto-scrolling Slider */}
          <Box
            display={{ base: "block", md: "none" }}
            w="full"
            overflow="hidden"
            mt={{ base: "-1rem", md: 0 }}
            pt={{ base: 0, md: 0 }}
          >
            <Box
              ref={sliderRef}
              display="flex"
              w="max-content"
              sx={{
                cursor: 'grab',
                '&::-webkit-scrollbar': {
                  display: 'none',
                },
                scrollbarWidth: 'none',
              }}
            >
              {/* First set of logos */}
              {logos.map((logo, index) => (
                <Box
                  key={`first-${index}`}
                  flex="0 0 auto"
                  w="100px"
                  h="70px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mx="15px"
                >
                  <Image
                    src={logo}
                    alt={`Logo ${index + 1}`}
                    h="full"
                    w="auto"
                    maxW="full"
                    objectFit="contain"
                    opacity={0.9}
                    _hover={{ opacity: 1 }}
                    transition="opacity 0.3s ease"
                  />
                </Box>
              ))}
              {/* Duplicate set for seamless loop */}
              {logos.map((logo, index) => (
                <Box
                  key={`second-${index}`}
                  flex="0 0 auto"
                  w="100px"
                  h="70px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mx="15px"
                >
                  <Image
                    src={logo}
                    alt={`Logo ${index + 1}`}
                    h="full"
                    w="auto"
                    maxW="full"
                    objectFit="contain"
                    opacity={0.9}
                    _hover={{ opacity: 1 }}
                    transition="opacity 0.3s ease"
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Logos;
