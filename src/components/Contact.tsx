import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  SimpleGrid,
} from '@chakra-ui/react';

const Contact = () => {
  return (
    <Box
      id="contact"
      py={[5.6, 8.4]}
      minH="500px"
      bg="white"
      position="relative"
      overflow="hidden"
      display="flex"
      alignItems="center"
    >
      {/* Subtle blue background elements */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        zIndex="0"
      >
        {/* Floating blue particles - similar to logos section */}
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
      </Box>

      <Container maxW="1200px" px={[4, 6, 8]} position="relative" zIndex="1" h="full">
        <VStack spacing={[6, 8]} h="full" justify="center">
          {/* Section Header */}
          <VStack spacing={4} textAlign="center" maxW="600px">
            <Heading
              as="h2"
              fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
              fontWeight="bold"
              color="black"
              letterSpacing="tight"
            >
              Get In Touch
            </Heading>
            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              color="blackAlpha.700"
              lineHeight="1.6"
            >
              Ready to automate your growth systems? Let's discuss how we can help your team focus on what matters most.
            </Text>
          </VStack>

          {/* Contact Form - Centered */}
          <Box
            maxW="600px"
            w="full"
            mx="auto"
            bg="blackAlpha.50"
            p={{ base: 6, md: 8 }}
            borderRadius="xl"
            border="2px solid"
            borderColor="rgba(0, 191, 255, 0.1)"
            _hover={{
              borderColor: 'rgba(0, 191, 255, 0.2)',
              boxShadow: '0 10px 30px rgba(0, 191, 255, 0.1)',
            }}
            transition="all 0.3s ease"
          >
              <VStack spacing={{ base: 4, md: 6 }} as="form">
                <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4} w="full">
                  <FormControl>
                    <FormLabel color="black" fontWeight="semibold">
                      First Name
                    </FormLabel>
                    <Input
                      placeholder="John"
                      bg="white"
                      border="2px solid"
                      borderColor="blackAlpha.200"
                      _hover={{ borderColor: 'rgba(0, 191, 255, 0.3)' }}
                      _focus={{
                        borderColor: '#00BFFF',
                        boxShadow: '0 0 0 1px #00BFFF',
                      }}
                      size="lg"
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel color="black" fontWeight="semibold">
                      Last Name
                    </FormLabel>
                    <Input
                      placeholder="Doe"
                      bg="white"
                      border="2px solid"
                      borderColor="blackAlpha.200"
                      _hover={{ borderColor: 'rgba(0, 191, 255, 0.3)' }}
                      _focus={{
                        borderColor: '#00BFFF',
                        boxShadow: '0 0 0 1px #00BFFF',
                      }}
                      size="lg"
                    />
                  </FormControl>
                </SimpleGrid>

                <FormControl>
                  <FormLabel color="black" fontWeight="semibold">
                    Email
                  </FormLabel>
                  <Input
                    type="email"
                    placeholder="john@company.com"
                    bg="white"
                    border="2px solid"
                    borderColor="blackAlpha.200"
                    _hover={{ borderColor: 'rgba(0, 191, 255, 0.3)' }}
                    _focus={{
                      borderColor: '#00BFFF',
                      boxShadow: '0 0 0 1px #00BFFF',
                    }}
                    size="lg"
                  />
                </FormControl>

                <FormControl>
                  <FormLabel color="black" fontWeight="semibold">
                    Company
                  </FormLabel>
                  <Input
                    placeholder="Your Company"
                    bg="white"
                    border="2px solid"
                    borderColor="blackAlpha.200"
                    _hover={{ borderColor: 'rgba(0, 191, 255, 0.3)' }}
                    _focus={{
                      borderColor: '#00BFFF',
                      boxShadow: '0 0 0 1px #00BFFF',
                    }}
                    size="lg"
                  />
                </FormControl>

                <FormControl>
                  <FormLabel color="black" fontWeight="semibold">
                    Message
                  </FormLabel>
                  <Textarea
                    placeholder="Tell us about your automation needs..."
                    bg="white"
                    border="2px solid"
                    borderColor="blackAlpha.200"
                    _hover={{ borderColor: 'rgba(0, 191, 255, 0.3)' }}
                    _focus={{
                      borderColor: '#00BFFF',
                      boxShadow: '0 0 0 1px #00BFFF',
                    }}
                    size="lg"
                    rows={6}
                    resize="vertical"
                  />
                </FormControl>

                <Button
                  bg="linear-gradient(135deg, #D77A45 0%, #C96A35 100%)"
                  color="white"
                  size="lg"
                  w="full"
                  _hover={{
                    bg: 'linear-gradient(135deg, #C96A35 0%, #B85A25 100%)',
                    transform: 'translateY(-3px)',
                    boxShadow: '0 12px 25px rgba(215, 122, 69, 0.5)',
                  }}
                  _active={{
                    bg: 'linear-gradient(135deg, #B85A25 0%, #A64A1A 100%)',
                    transform: 'scale(0.96)',
                    boxShadow: '0 6px 15px rgba(215, 122, 69, 0.4)'
                  }}
                  _focus={{
                    boxShadow: '0 0 0 3px rgba(215, 122, 69, 0.4)'
                  }}
                  transition="all 0.3s ease"
                  fontWeight="bold"
                  fontSize="lg"
                  borderRadius="xl"
                  boxShadow="0 6px 18px rgba(215, 122, 69, 0.4)"
                >
                  Send Message
                </Button>
              </VStack>
            </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Contact;
