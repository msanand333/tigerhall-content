// ContentCard.tsx

import { Image } from '@chakra-ui/react';
import React from 'react';

type ContentCardProps = {
  name: string;
  imageUri: string;
};

export const ContentCard: React.FC<ContentCardProps> = ({ name, imageUri }) => {
  console.log(name, imageUri);
  return (
    <div>
      <Image src={imageUri} alt={name} />
      {/* <img src={imageUri} alt={name} /> */}
      <h3>{name}</h3>
      {/* Add other content details */}
    </div>
  );
};
