import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  VStack,
  HStack,
  Text,
  Button,
  Icon,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import {
  FaShareNodes,
  FaChartLine,
  FaUsers,
  FaGavel,
  FaQuoteLeft,
  FaStar,
} from 'react-icons/fa6';
import {
  FaCheckCircle,
  FaShieldAlt,
} from 'react-icons/fa';

const WhatWeDo = () => {
  const advertiserServices = [
    'Affiliate agency services',
    'Sourcing high-quality publishers and well-performing digital traffic across a wide-variety of channels',
    'Optimizing campaigns to improve front-end and back-end conversions',
    'Digital funnel conversion rate optimization',
    'Monetization of decline and/or under-monetized traffic'
  ];

  const publisherServices = [
    'Sourcing top tier advertisers with high conversion rates',
    'Assistance in monetizing decline and/or under-monetized traffic'
  ];

  const verticals = [
    {
      title: 'Financial Services',
      icon: FaChartLine,
      color: '#00BFFF',
      services: [
        'Wealth Management',
        'Business loans', 
        'Mortgage loans',
        '• Purchase',
        '• Refinance / Cash-out Refinance', 
        '• Home Equity / HELOC',
        'Personal loans',
        'Student Loans',
        '• Private Student Loans',
        '• Student Loan Refinance',
        'Online Banking',
        '• Checking',
        '• Savings',
        '• Business Accounts',
        '• Debt Consolidation'
      ]
    },
    {
      title: 'Insurance',
      icon: FaShieldAlt,
      color: '#0080FF',
      services: [
        'Auto Insurance',
        'Pet Insurance', 
        'Life Insurance',
        'Home Insurance'
      ]
    },
    {
      title: 'Legal Services',
      icon: FaGavel,
      color: '#4169E1',
      services: [
        'Personal Injury'
      ]
    }
  ];

  const testimonials = [
    {
      text: "Hero Complex transformed our lead generation completely. Their publisher network delivered quality traffic that converted at 3x our previous rates.",
      author: "Sarah Mitchell",
      position: "VP Marketing, FinanceFlow",
      rating: 5
    },
    {
      text: "Working with Hero Complex opened doors to premium advertiser partnerships we never had access to before. Revenue increased 250% in 6 months.",
      author: "Marcus Chen", 
      position: "Founder, MediaConnect",
      rating: 5
    },
    {
      text: "The funnel optimization and traffic monetization strategies Hero Complex implemented generated an additional $2M in annual revenue for us.",
      author: "Jessica Torres",
      position: "CEO, InsurTech Solutions", 
      rating: 5
    }
  ];

  return (
    <Box
      id="whatwedo"
      py={{ base: 16, md: 24 }}
      bg="linear-gradient(180deg, #000000 0%, #111827 50%, #000000 100%)"
      position="relative"
      overflow="hidden"
    >
      {/* Clean Background */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        zIndex="0"
      >
        {/* Subtle blue gradient */}
        <Box
          position="absolute"
          top="20%"
          left="10%"
          width="400px"
          height="400px"
          borderRadius="50%"
          background="radial-gradient(circle, rgba(0, 191, 255, 0.08) 0%, transparent 70%)"
          animation="pulse 8s ease-in-out infinite"
          filter="blur(60px)"
        />
        <Box
          position="absolute"
          bottom="20%"
          right="10%"
          width="300px"
          height="300px"
          borderRadius="50%"
          background="radial-gradient(circle, rgba(0, 128, 255, 0.06) 0%, transparent 70%)"
          animation="pulse 10s ease-in-out infinite reverse"
          filter="blur(60px)"
        />
      </Box>

      <Container maxW="1200px" px={{ base: 4, md: 8 }} position="relative" zIndex="1">
        <VStack spacing={{ base: 12, md: 16 }}>
          
          {/* Header Section */}
          <VStack spacing={6} textAlign="center" maxW="900px" mx="auto">
            <Heading
              as="h2"
              fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
              fontWeight="bold"
              color="white"
              letterSpacing="tight"
            >
              What We{' '}
              <Text as="span" color="#00BFFF">
                Do
              </Text>
            </Heading>
            
            <VStack spacing={4}>
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                color="white"
                fontWeight="semibold"
                textAlign="center"
                lineHeight="1.5"
              >
                Hero Complex is positioned at the center of the digital marketing space, with an ever-expanding network to provide endless value to nearly any solution.
              </Text>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color="whiteAlpha.800"
                textAlign="center"
                lineHeight="1.6"
              >
                We generate long-lasting, highly-profitable win-win strategic partnerships between brands, as well as with publishers and advertisers.
              </Text>
            </VStack>
          </VStack>

          {/* Services Section */}
          <VStack spacing={8} w="full" maxW="1000px" mx="auto">
            <VStack spacing={3} textAlign="center">
              <Heading
                as="h3"
                fontSize={{ base: '2xl', md: '3xl' }}
                fontWeight="bold"
                color="white"
                textAlign="center"
              >
                Our{' '}
                <Text as="span" color="#00BFFF">
                  Services
                </Text>
              </Heading>
              <Text
                fontSize="lg"
                color="whiteAlpha.700"
                textAlign="center"
                maxW="600px"
              >
                Comprehensive solutions for advertisers and publishers
              </Text>
            </VStack>
            
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="full">
              
              {/* Advertisers */}
              <Box
                bg="rgba(0, 191, 255, 0.03)"
                borderRadius="2xl"
                border="1px solid"
                borderColor="rgba(0, 191, 255, 0.2)"
                p={{ base: 6, md: 8 }}
                _hover={{
                  borderColor: 'rgba(0, 191, 255, 0.4)',
                  boxShadow: '0 20px 40px rgba(0, 191, 255, 0.1)',
                  transform: 'translateY(-4px)',
                }}
                transition="all 0.3s ease"
              >
                <VStack spacing={6} align="start">
                  <HStack spacing={3}>
                    <Box
                      bg="#00BFFF"
                      p={3}
                      borderRadius="lg"
                      boxShadow="0 0 15px rgba(0, 191, 255, 0.3)"
                    >
                      <Icon as={FaUsers} boxSize={6} color="white" />
                    </Box>
                    <Heading
                      as="h3"
                      fontSize="2xl"
                      fontWeight="bold"
                      color="white"
                    >
                      For Advertisers
                    </Heading>
                  </HStack>
                  
                  <List spacing={3}>
                    {advertiserServices.map((service, index) => (
                      <ListItem key={index} display="flex" alignItems="flex-start">
                        <ListIcon as={FaCheckCircle} color="#00BFFF" mt={1} />
                        <Text
                          color="whiteAlpha.900"
                          fontSize="md"
                          lineHeight="1.5"
                        >
                          {service}
                        </Text>
                      </ListItem>
                    ))}
                  </List>
                </VStack>
              </Box>

              {/* Publishers */}
              <Box
                bg="rgba(0, 128, 255, 0.03)"
                borderRadius="2xl"
                border="1px solid"
                borderColor="rgba(0, 128, 255, 0.2)"
                p={{ base: 6, md: 8 }}
                _hover={{
                  borderColor: 'rgba(0, 128, 255, 0.4)',
                  boxShadow: '0 20px 40px rgba(0, 128, 255, 0.1)',
                  transform: 'translateY(-4px)',
                }}
                transition="all 0.3s ease"
              >
                <VStack spacing={6} align="start">
                  <HStack spacing={3}>
                    <Box
                      bg="#0080FF"
                      p={3}
                      borderRadius="lg"
                      boxShadow="0 0 15px rgba(0, 128, 255, 0.3)"
                    >
                      <Icon as={FaShareNodes} boxSize={6} color="white" />
                    </Box>
                    <Heading
                      as="h3"
                      fontSize="2xl"
                      fontWeight="bold"
                      color="white"
                    >
                      For Publishers
                    </Heading>
                  </HStack>
                  
                  <List spacing={3}>
                    {publisherServices.map((service, index) => (
                      <ListItem key={index} display="flex" alignItems="flex-start">
                        <ListIcon as={FaCheckCircle} color="#0080FF" mt={1} />
                        <Text
                          color="whiteAlpha.900"
                          fontSize="md"
                          lineHeight="1.5"
                        >
                          {service}
                        </Text>
                      </ListItem>
                    ))}
                  </List>
                </VStack>
              </Box>
            </SimpleGrid>
          </VStack>

          {/* Quote Section */}
          <VStack spacing={4} textAlign="center" maxW="800px" mx="auto">
            <Heading
              as="h3"
              fontSize={{ base: '2xl', md: '3xl' }}
              fontWeight="bold"
              color="white"
              textAlign="center"
            >
              Client{' '}
              <Text as="span" color="#00BFFF">
                Testimonial
              </Text>
            </Heading>
            
            <Box
              bg="rgba(0, 191, 255, 0.05)"
              borderRadius="2xl"
              border="1px solid"
              borderColor="rgba(0, 191, 255, 0.2)"
              p={{ base: 6, md: 8 }}
              textAlign="center"
              mx="auto"
            >
            <VStack spacing={4}>
              <Icon as={FaQuoteLeft} boxSize={8} color="#00BFFF" opacity={0.5} />
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                fontStyle="italic"
                color="white"
                lineHeight="1.6"
              >
                "Hero Complex doesn't just deliver traffic - they deliver results. Working with them has been transformational for our business."
              </Text>
              <Text
                fontSize="md"
                color="#00BFFF"
                fontWeight="semibold"
              >
                - Industry Partner
              </Text>
            </VStack>
            </Box>
          </VStack>

          {/* Verticals */}
          <VStack spacing={10} w="full" maxW="1000px" mx="auto">
            <VStack spacing={3} textAlign="center">
              <Heading
                as="h3"
                fontSize={{ base: '3xl', md: '4xl' }}
                fontWeight="bold"
                color="white"
              >
                Verticals We{' '}
                <Text as="span" color="#00BFFF">
                  Master
                </Text>
              </Heading>
              <Text
                fontSize="lg"
                color="whiteAlpha.700"
              >
                And many, many more...
              </Text>
            </VStack>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} w="full">
              {verticals.map((vertical, index) => (
                <Box
                  key={index}
                  bg="rgba(255, 255, 255, 0.02)"
                  borderRadius="xl"
                  border="1px solid"
                  borderColor={`${vertical.color}30`}
                  p={6}
                  _hover={{
                    borderColor: `${vertical.color}60`,
                    transform: 'translateY(-4px)',
                  }}
                  transition="all 0.3s ease"
                >
                  <VStack spacing={4} align="start">
                    <HStack spacing={3}>
                      <Box
                        bg={vertical.color}
                        p={2}
                        borderRadius="md"
                      >
                        <Icon as={vertical.icon} boxSize={5} color="white" />
                      </Box>
                      <Heading
                        as="h4"
                        fontSize="lg"
                        fontWeight="semibold"
                        color="white"
                      >
                        {vertical.title}
                      </Heading>
                    </HStack>
                    
                    <List spacing={1}>
                      {vertical.services.map((service, serviceIndex) => (
                        <ListItem key={serviceIndex}>
                          <Text
                            color={service.startsWith('•') ? "whiteAlpha.600" : "whiteAlpha.800"}
                            fontSize={service.startsWith('•') ? "xs" : "sm"}
                            pl={service.startsWith('•') ? 3 : 0}
                          >
                            {service}
                          </Text>
                        </ListItem>
                      ))}
                    </List>
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>
          </VStack>

          {/* Testimonials */}
          <VStack spacing={8} w="full" maxW="1000px" mx="auto">
            <Heading
              as="h3"
              fontSize={{ base: '2xl', md: '3xl' }}
              fontWeight="bold"
              color="white"
              textAlign="center"
            >
              What Our{' '}
              <Text as="span" color="#00BFFF">
                Partners
              </Text>{' '}
              Say
            </Heading>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} w="full">
              {testimonials.map((testimonial, index) => (
                <Box
                  key={index}
                  bg="rgba(255, 255, 255, 0.02)"
                  borderRadius="xl"
                  border="1px solid"
                  borderColor="rgba(255, 255, 255, 0.1)"
                  p={6}
                  _hover={{
                    borderColor: 'rgba(0, 191, 255, 0.2)',
                    transform: 'translateY(-4px)',
                  }}
                  transition="all 0.3s ease"
                >
                  <VStack spacing={4} align="start" h="full">
                    <HStack spacing={1}>
                      {[...Array(testimonial.rating)].map((_, starIndex) => (
                        <Icon
                          key={starIndex}
                          as={FaStar}
                          boxSize={4}
                          color="#FFD700"
                        />
                      ))}
                    </HStack>
                    
                    <Text
                      color="whiteAlpha.900"
                      fontSize="sm"
                      lineHeight="1.6"
                      fontStyle="italic"
                      flex="1"
                    >
                      "{testimonial.text}"
                    </Text>
                    
                    <VStack spacing={0} align="start">
                      <Text
                        color="white"
                        fontWeight="semibold"
                        fontSize="sm"
                      >
                        {testimonial.author}
                      </Text>
                      <Text
                        color="#00BFFF"
                        fontSize="xs"
                      >
                        {testimonial.position}
                      </Text>
                    </VStack>
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>
          </VStack>

          {/* CTA Section */}
          <VStack spacing={8} textAlign="center" pt={12} maxW="600px" mx="auto">
            <VStack spacing={4}>
              <Heading
                as="h3"
                fontSize={{ base: '2xl', md: '3xl' }}
                fontWeight="bold"
                color="white"
                textAlign="center"
              >
                Ready to Scale Your{' '}
                <Text as="span" color="#00BFFF">
                  Business?
                </Text>
              </Heading>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color="whiteAlpha.700"
                textAlign="center"
                maxW="500px"
                lineHeight="1.6"
              >
                Join the elite network of brands scaling through strategic partnerships and unlock your growth potential.
              </Text>
            </VStack>
            
            <Button
              bg="#00BFFF"
              color="white"
              _hover={{
                bg: '#0080FF',
                transform: 'translateY(-2px)',
                boxShadow: '0 15px 30px rgba(0, 191, 255, 0.3)'
              }}
              size="lg"
              fontSize="lg"
              h="56px"
              px={12}
              borderRadius="lg"
              fontWeight="bold"
              transition="all 0.3s ease"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({
                  behavior: 'smooth'
                });
              }}
            >
              Partner with Hero Complex
            </Button>
          </VStack>

        </VStack>
      </Container>
    </Box>
  );
};

export default WhatWeDo;
