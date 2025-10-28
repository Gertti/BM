import {
  Box,
  Container,
  Flex,
  Button,
  Text,
  HStack,
} from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Box
      position="sticky"
      top={0}
      bg="black"
      borderBottom="1px solid"
      borderColor="whiteAlpha.200"
      zIndex={1000}
      backdropFilter="blur(10px)"
    >
      <Container maxW="1200px" px={[4, 6, 8]}>
        <Flex h={{ base: "70px", md: "80px" }} align="center" justify="space-between">
          {/* Logo */}
          <Text
            fontSize={{ base: "3xl", md: "3xl" }}
            fontWeight="bold"
            color="white"
            letterSpacing="tight"
          >
            Hero Complex
          </Text>

          {/* Navigation Links */}
          <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
            <Button
              variant="ghost"
              color="whiteAlpha.700"
              _hover={{ color: 'white', bg: 'transparent' }}
              transition="color 0.2s"
              fontWeight="medium"
              fontSize="md"
              p={0}
              h="auto"
              onClick={() => {
                const element = document.getElementById('whatwedo');
                if (element) {
                  element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              }}
            >
              What we do
            </Button>
            <Button
              bg="#E88A5C"
              color="white"
              _hover={{ bg: '#D77A4B' }}
              size="sm"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({
                  behavior: 'smooth'
                });
              }}
            >
              Partner with Us
            </Button>
          </HStack>

          {/* Mobile CTA */}
          <Button
            bg="#E88A5C"
            color="white"
            _hover={{ bg: '#D77A4B' }}
            size="sm"
            display={{ base: 'flex', md: 'none' }}
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({
                behavior: 'smooth'
              });
            }}
          >
            Partner with Us
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
