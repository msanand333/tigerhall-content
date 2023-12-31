import React from "react";
import { ContentCard } from "../content-card/ContentCard";
import { ContentCardApiResponse, ContentListProps } from "./types";

// Functional component representing a content list
export const ContentList = ({ contentCards }: ContentListProps) => {
  return contentCards.map((content: ContentCardApiResponse) => (
    <ContentCard
      key={content.id}
      title={content.name}
      imageSrc={content.image.uri}
      ownerName={content?.experts[0]?.firstName}
      ownerTitle={content?.experts[0]?.title}
      length={content.length}
    />
  ));
};
