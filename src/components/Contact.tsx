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
  useToast,
} from '@chakra-ui/react';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const toast = useToast();

  // EmailJS Configuration
  const EMAILJS_SERVICE_ID = 'service_5wav7gx';
  const EMAILJS_NOTIFICATION_TEMPLATE = 'template_v2jjpjn'; // Notification to Ben
  const EMAILJS_CONFIRMATION_TEMPLATE = 'template_srzb4a7'; // Confirmation to user
  const EMAILJS_PUBLIC_KEY = 'niop94u-AJGEwInUO';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Prepare template parameters for both emails
      const templateParams = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        company: formData.company,
        message: formData.message,
        name: `${formData.firstName} ${formData.lastName}`, // For confirmation email
      };

      // Send notification email to Ben
      const notificationResult = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_NOTIFICATION_TEMPLATE,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      // Send confirmation email to user
      const confirmationResult = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_CONFIRMATION_TEMPLATE,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      if (notificationResult.status === 200 && confirmationResult.status === 200) {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          message: ''
        });
        
        toast({
          title: 'Message sent successfully!',
          description: 'Thank you for your message. We\'ll get back to you soon. Check your email for confirmation.',
          status: 'success',
          duration: 6000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      
      toast({
        title: 'Failed to send message',
        description: 'Please try again later or contact us directly.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

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
            bg="white"
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
              <VStack spacing={{ base: 4, md: 6 }} as="form" ref={formRef} onSubmit={handleSubmit}>
                <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4} w="full">
                  <FormControl isRequired>
                    <FormLabel color="black" fontWeight="semibold">
                      First Name
                    </FormLabel>
                    <Input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
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

                  <FormControl isRequired>
                    <FormLabel color="black" fontWeight="semibold">
                      Last Name
                    </FormLabel>
                    <Input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
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

                <FormControl isRequired>
                  <FormLabel color="black" fontWeight="semibold">
                    Email
                  </FormLabel>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
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
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
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

                <FormControl isRequired>
                  <FormLabel color="black" fontWeight="semibold">
                    Message
                  </FormLabel>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Please write a short message explaining your need…"
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
                  type="submit"
                  isLoading={isLoading}
                  loadingText="Sending..."
                  bg="#E88A5C !important"
                  color="white !important"
                  _hover={{
                    bg: isLoading ? '#E88A5C !important' : '#D77A4B !important',
                    transform: isLoading ? 'none' : 'translateY(-2px)',
                    boxShadow: isLoading ? '0 4px 14px rgba(232, 138, 92, 0.3)' : '0 8px 20px rgba(232, 138, 92, 0.4)'
                  }}
                  _active={{
                    bg: '#C96A3A !important',
                    transform: 'scale(0.97)',
                    boxShadow: '0 4px 10px rgba(232, 138, 92, 0.3)'
                  }}
                  _focus={{
                    boxShadow: '0 0 0 3px rgba(232, 138, 92, 0.3)'
                  }}
                  size="lg"
                  fontSize="md"
                  h="52px"
                  w="full"
                  borderRadius="lg"
                  fontWeight="bold"
                  transition="all 0.25s ease"
                  boxShadow="0 4px 14px rgba(232, 138, 92, 0.3)"
                  sx={{
                    backgroundColor: '#E88A5C !important',
                    '&:hover': {
                      backgroundColor: isLoading ? '#E88A5C !important' : '#D77A4B !important'
                    },
                    '&:active': {
                      backgroundColor: '#C96A3A !important'
                    }
                  }}
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
