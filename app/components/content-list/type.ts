export type ContentCardApiResponse = {
  id: string;
  name: string;
  image: Record<string, string>;
};

export type ContentListProps = {
  contentCards: ContentCardApiResponse[];
};
