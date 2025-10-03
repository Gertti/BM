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
      py={[16, 20]} 
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
            linear-gradient(rgba(0, 191, 255, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 191, 255, 0.08) 1px, transparent 1px)
          `}
          backgroundSize="50px 50px"
          opacity="0.4"
          animation="gridMove 25s linear infinite"
        />

        {/* Glowing blue orbs */}
        <Box
          position="absolute"
          top="15%"
          right="10%"
          width="300px"
          height="300px"
          borderRadius="50%"
          background="radial-gradient(circle, rgba(0, 191, 255, 0.1) 0%, transparent 70%)"
          animation="pulse 8s ease-in-out infinite"
        />
        
        <Box
          position="absolute"
          bottom="15%"
          left="5%"
          width="200px"
          height="200px"
          borderRadius="50%"
          background="radial-gradient(circle, rgba(0, 191, 255, 0.08) 0%, transparent 70%)"
          animation="pulse 6s ease-in-out infinite reverse"
        />

        {/* Floating tech particles */}
        {[...Array(12)].map((_, i) => (
          <Box
            key={i}
            position="absolute"
            width="4px"
            height="4px"
            borderRadius="50%"
            background="rgba(0, 191, 255, 0.3)"
            top={`${10 + (i * 8)}%`}
            left={`${3 + (i * 7)}%`}
            animation={`float${i % 3} ${5 + (i % 2)}s ease-in-out infinite`}
          />
        ))}

        {/* Geometric shapes */}
        <Box
          position="absolute"
          top="30%"
          left="15%"
          width="80px"
          height="80px"
          border="2px solid rgba(0, 191, 255, 0.15)"
          borderRadius="lg"
          animation="rotateClockwise 20s linear infinite"
        />
        
        <Box
          position="absolute"
          bottom="25%"
          right="20%"
          width="60px"
          height="60px"
          border="2px solid rgba(0, 191, 255, 0.1)"
          borderRadius="50%"
          animation="rotateCounterClockwise 15s linear infinite"
        />
      </Box>

      <Container maxW="1200px" px={[4, 6, 8]} position="relative" zIndex="1">
        <VStack spacing={[12, 16]}>
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
                  bg="#D77A45"
                  color="white"
                  size="lg"
                  w="full"
                  _hover={{
                    bg: '#C96A35',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 20px rgba(215, 122, 69, 0.4)',
                  }}
                  _active={{
                    bg: '#B85A25',
                    transform: 'scale(0.97)',
                    boxShadow: '0 4px 10px rgba(215, 122, 69, 0.3)'
                  }}
                  _focus={{
                    boxShadow: '0 0 0 3px rgba(215, 122, 69, 0.3)'
                  }}
                  transition="all 0.25s ease"
                  fontWeight="bold"
                  fontSize="lg"
                  boxShadow="0 4px 14px rgba(215, 122, 69, 0.3)"
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
