'use client';

import React from 'react';
import { SearchBar } from './search-bar/SearchBar';
import { useQuery, gql } from '@apollo/client';
import { ContentView } from './content-view/ContentView';
import { ErrorView } from './error-view/ErrorView';
import { LoadingView } from './loading-view/LoadingView';
import { Image } from '@chakra-ui/react';

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
          id
          image {
            ...Image
          }
        }
        ... on Stream {
          name
          id
          image {
            ...Image
          }
        }
        ... on Ebook {
          name
          id
          image {
            ...Image
          }
        }

        ... on Event {
          name
          id
          image {
            ...Image
          }
        }

        ... on LearningPath {
          name
          id
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
  const cardContents = data?.contentCards.edges;
  console.log(cardContents);
  function addResizeToImageUrl(url: string) {
    // Find the index where "images.staging.tigerhall.io/" ends
    const insertionIndex =
      url.indexOf('images.staging.tigerhall.io/') +
      'images.staging.tigerhall.io/'.length;

    // Insert "resize/500x/" at the calculated index
    const modifiedUrl =
      url.slice(0, insertionIndex) + 'resize/500x/' + url.slice(insertionIndex);

    return modifiedUrl;
  }

  const contentView = () => {
    if (error) return <ErrorView />;
    if (loading) return <LoadingView />;
    else {
      cardContents.map((card: any) => {
        return (
          <div key={card.id}>
            <Image src={addResizeToImageUrl(card.image.uri)} alt='test' />
          </div>
        );
      });
    }
  };

  return (
    <main className='p-4'>
      <div className='flex justify-center items-center'>
        <SearchBar />
      </div>
      <div className='flex flex-wrap'>{contentView()}</div>
    </main>
  );
};
