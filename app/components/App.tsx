'use client';

import React from 'react';
import { SearchBar } from './search-bar/SearchBar';
import { useQuery, gql } from '@apollo/client';

const GET_CARDS = gql`
  query {
    contentCards(
      filter: {
        limit: 200
        keywords: ""
        types: [PODCAST, EBOOK, EVENT, STREAM, LEARNING_PATH]
      }
    ) {
      meta {
        total
      }
      edges {
        ... on Podcast {
          name
          image {
            ...Image
          }
        }
        ... on Stream {
          name
          image {
            ...Image
          }
        }
        ... on Ebook {
          name
          image {
            ...Image
          }
        }

        ... on Event {
          name
          image {
            ...Image
          }
        }

        ... on LearningPath {
          name
          image {
            ...Image
          }
        }
      }
    }
  }

  fragment Image on Image {
    uri
  }
`;

export const App = () => {
  const { data, error, loading } = useQuery(GET_CARDS);
  console.log({ data, error, loading });

  return (
    <main className='p-4'>
      <div className='flex justify-center items-center'>
        <SearchBar />
      </div>
      <div className=''></div>
    </main>
  );
};
