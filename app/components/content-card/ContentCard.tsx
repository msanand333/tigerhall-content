import { Image } from '@chakra-ui/react';
import React from 'react';
import { ContentCardProps } from './types';

export const ContentCard = (props: ContentCardProps) => {
  const { name = '', image = '' } = props;
  return (
    <div className='w-[244px] rounded-lg'>
      <Image src={image} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};
