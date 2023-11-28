'use client';

import React, { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_CONTENT_CARDS } from '../graphql/queries';
import { ContentCard } from './content-card/ContentCard';
import { LoadingAnimation } from './loading-animation/LoadingAnimation';
import { SearchBar } from './search-bar/SearchBar';

export const App: React.FC = () => {
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

  // Make sure data is structured correctly
  const contentCards = data?.contentCards?.edges || [];
  console.log(contentCards);
  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div>
        {contentCards.map((content: any) => (
          <ContentCard
            key={content.id}
            name={content.name}
            imageUri={content.image.uri}
          />
        ))}
      </div>
    </div>
  );
};
