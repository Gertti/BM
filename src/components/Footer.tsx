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
    <Box id="contact" py={[12, 16]} bg="black" borderTop="1px solid" borderColor="whiteAlpha.200">
      <Container maxW="1200px" px={[4, 6, 8]}>
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
