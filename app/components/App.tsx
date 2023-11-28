'use client';

import React, { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_CONTENT_CARDS } from '../graphql/queries';
import ContentCard from './content-card/ContentCard';
import LoadingAnimation from './loading-animation/LoadingAnimation';
import { SearchBar } from './search-bar/SearchBar';

const App: React.FC = () => {
  const [searchKeywords, setSearchKeywords] = useState('');
  const [getContentCards, { loading, data }] = useLazyQuery(GET_CONTENT_CARDS);

  const handleSearch = React.useCallback(
    (keywords: string) => {
      setSearchKeywords(keywords);
      getContentCards({
        variables: {
          keywords,
        },
      });
    },
    [getContentCards]
  );

  useEffect(() => {
    // Add your debounce logic here (300 ms debounce)
    const debounceTimer = setTimeout(() => {
      handleSearch(searchKeywords);
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [searchKeywords, handleSearch]);

  if (loading) {
    return <LoadingAnimation />;
  }

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div>
        {data?.contentCards.edges.map((content: any) => (
          <ContentCard key={content.id} {...content} />
        ))}
      </div>
    </div>
  );
};

export default App;
