import { Box } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Logos from './components/Logos';
import WhatWeDo from './components/WhatWeDo';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Box bg="black" minH="100vh">
      <Navbar />
      <Hero />
      <Logos />
      <WhatWeDo />
      <Contact />
      <Footer />
    </Box>
  );
}

export default App;
