import React from 'react';
import SearchButton from './SearchButton';
import NavSection from './NavSection';
import Section from './Section';
import ListPatient from './ListPatient';
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl" m={20}>
        <Grid>
          <ColorModeSwitcher justifySelf="flex-end" />
          <SearchButton />
          <NavSection />
        </Grid>
        <Section />
        <ListPatient />
      </Box>
    </ChakraProvider>
  );
}

export default App;
