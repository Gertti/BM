import {
  Box,
  Container,
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

    // Start animation
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <Box
      bg="white"
      pt={{ base: 4, md: 6 }}
      pb={{ base: 0, md: 0 }}
      position="relative"
      overflow="hidden"
    >
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

          {/* Auto-scrolling Slider for all screen sizes */}
          <Box
            w="full"
            overflow="hidden"
            mt={{ base: "-1rem", md: "-1rem" }}
            pt={{ base: 0, md: 0 }}
          >
            <Box
              ref={sliderRef}
              display="flex"
              w="max-content"
              sx={{
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
                  w={{ base: "100px", md: "180px", lg: "220px" }}
                  h={{ base: "70px", md: "120px", lg: "140px" }}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mx={{ base: "15px", md: "30px", lg: "40px" }}
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
                  w={{ base: "100px", md: "180px", lg: "220px" }}
                  h={{ base: "70px", md: "120px", lg: "140px" }}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mx={{ base: "15px", md: "30px", lg: "40px" }}
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
