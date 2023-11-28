import React from 'react';
import { ContentCard } from '../content-card/ContentCard';
import { ContentCardApiResponse, ContentListProps } from './type';

export const ContentList = ({ contentCards }: ContentListProps) => {
  return contentCards.map((content: ContentCardApiResponse) => (
    <ContentCard
      key={content.id}
      name={content.name}
      image={content.image.uri}
    />
  ));
};
