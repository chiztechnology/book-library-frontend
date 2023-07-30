import React from 'react';
import { MantineProvider } from '@mantine/core';
import BookLibrary from './components/BookLibrary';

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <BookLibrary />
    </MantineProvider>
  );
}

export default App;