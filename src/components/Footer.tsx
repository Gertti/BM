import {
  Box,
  Container,
  Flex,
  Text,
  Button,
  VStack,
  HStack,
} from '@chakra-ui/react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box id="contact" py={[12, 16]} bg="black" borderTop="1px solid" borderColor="whiteAlpha.200" position="relative" overflow="hidden">
      {/* Subtle blue background elements */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        zIndex="0"
      >
        {/* Floating blue particles - random distribution */}
        {[...Array(20)].map((_, i) => {
          const randomTop = Math.floor(Math.random() * 80) + 10; // 10-90%
          const randomLeft = Math.floor(Math.random() * 85) + 5; // 5-90%
          const randomDelay = Math.random() * 2; // 0-2s delay
          const randomDuration = 3 + (Math.random() * 4); // 3-7s duration
          const randomFloatType = Math.floor(Math.random() * 3); // 0-2

          return (
            <Box
              key={i}
              position="absolute"
              width="3px"
              height="3px"
              borderRadius="50%"
              background="rgba(0, 191, 255, 0.8)"
              boxShadow="0 0 6px rgba(0, 191, 255, 0.6)"
              top={`${randomTop}%`}
              left={`${randomLeft}%`}
              animation={`float${randomFloatType} ${randomDuration}s ease-in-out infinite`}
              filter="brightness(1.2)"
              sx={{ animationDelay: `${randomDelay}s` }}
            />
          );
        })}
      </Box>

      <Container maxW="1200px" px={[4, 6, 8]} position="relative" zIndex="1">
        <VStack spacing={8}>
          {/* Main CTA Section */}
          <VStack spacing={6} textAlign="center">
            <Text
              fontSize={{ base: 'xl', md: '2xl' }}
              fontWeight="semibold"
              color="white"
            >
              Ready to automate your growth?
            </Text>
            <Button
              bg="#D77A45"
              color="white"
              _hover={{ bg: '#C96A35' }}
              size="lg"
              onClick={() => {
                // In a real app, this would open a calendar booking system
                window.open('mailto:hello@ben.com?subject=Book a call', '_blank');
              }}
            >
              Book a call
            </Button>
          </VStack>

          {/* Footer Bottom */}
          <Flex
            w="full"
            justify="space-between"
            align="center"
            pt={8}
            borderTop="1px solid"
            borderColor="whiteAlpha.200"
            direction={{ base: 'column', md: 'row' }}
            gap={{ base: 4, md: 0 }}
          >
            <Text fontSize="sm" color="whiteAlpha.600">
              © {currentYear} - All rights reserved.
            </Text>

            <HStack spacing={6} display={{ base: 'none', md: 'flex' }}>
              <Text fontSize="sm" color="whiteAlpha.600">
                hello@herocomplex.com
              </Text>
            </HStack>
          </Flex>
        </VStack>
      </Container>
    </Box>
  );
};

export default Footer;
