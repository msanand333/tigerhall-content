// Type definition of props for the ContentCard graphQL API response

export type ContentCardApiResponse = {
  id: string;
  name: string;
  image: Record<string, string>;
  experts: {
    company: string;
    firstName: string;
    lastName: string;
    title: string;
  }[];
  length?: number;
};

// Type definition of props for ContentList component
export type ContentListProps = {
  contentCards: ContentCardApiResponse[];
};
