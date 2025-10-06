import {
  Box,
  Container,
  Flex,
  Link,
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
            <Link
              href="#whatwedo"
              color="whiteAlpha.700"
              _hover={{ color: 'white' }}
              transition="color 0.2s"
              fontWeight="medium"
            >
              What we do
            </Link>
            <Button
              bg="#D77A45"
              color="white"
              _hover={{ bg: '#C96A35' }}
              size="sm"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({
                  behavior: 'smooth'
                });
              }}
            >
              Book a call
            </Button>
          </HStack>

          {/* Mobile CTA */}
          <Button
            bg="#D77A45"
            color="white"
            _hover={{ bg: '#C96A35' }}
            size="sm"
            display={{ base: 'flex', md: 'none' }}
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({
                behavior: 'smooth'
              });
            }}
          >
            Book a call
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
