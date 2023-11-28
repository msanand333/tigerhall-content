'use client';

import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import client from './services/api';
import { App } from './components/App';

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <CacheProvider>
        <ChakraProvider>
          <main>
            <App />
          </main>
        </ChakraProvider>
      </CacheProvider>
    </ApolloProvider>
  );
}
