// App.tsx
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './services/api';
import App from './components/App';

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <div>
        <App />
      </div>
    </ApolloProvider>
  );
}
