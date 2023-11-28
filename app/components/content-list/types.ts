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
};

export type ContentListProps = {
  contentCards: ContentCardApiResponse[];
};