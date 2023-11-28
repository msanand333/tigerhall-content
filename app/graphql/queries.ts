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
          experts {
            ...Expert
          }
        }
        ... on Stream {
          name
          id
          image {
            ...Image
          }
          experts {
            ...Expert
          }
        }
        ... on Ebook {
          name
          id
          image {
            ...Image
          }
          experts {
            ...Expert
          }
        }

        ... on Event {
          name
          id
          image {
            ...Image
          }
          experts {
            ...Expert
          }
        }
      }
    }
  }

  fragment Image on Image {
    uri
  }

  fragment Expert on Expert {
    firstName
    lastName
    title
    company
  }
`;
