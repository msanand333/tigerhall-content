'use client';

import React, { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_CONTENT_CARDS } from '../graphql/queries';
import { LoadingAnimation } from './loading-animation/LoadingAnimation';
import { SearchBar } from './search-bar/SearchBar';
import { ContentList } from './content-list/ContentList';

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
    const debounceTimer: NodeJS.Timeout = setTimeout(() => {
      handleSearch(searchKeywords);
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [searchKeywords, handleSearch]);

  const contentCards = data?.contentCards?.edges || [];

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div>
        {loading ? (
          <LoadingAnimation />
        ) : (
          <ContentList contentCards={contentCards} />
        )}
      </div>
    </div>
  );
};
