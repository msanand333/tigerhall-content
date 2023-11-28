import { gql } from '@apollo/client';

export const GET_CONTENT_CARDS = gql`
  query GetContentCards($keywords: String) {
    contentCards(
      filter: {
        limit: 50
        keywords: $keywords
        types: [PODCAST, EBOOK, EVENT, STREAM]
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
