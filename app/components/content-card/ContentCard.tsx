// ContentCard.tsx
import { Image } from '@chakra-ui/next-js';
import React from 'react';

type ContentCardProps = {
  name: string;
  id: string;
  image: { uri: string };
};

const ContentCard: React.FC<ContentCardProps> = ({ name, id, image }) => {
  return (
    <div>
      <Image src={image.uri} alt={name} />
      <h3>{name}</h3>
      {/* Add other content details */}
    </div>
  );
};

export default ContentCard;
