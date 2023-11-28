'use client';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import React from 'react';
import { SearchIcon } from '@chakra-ui/icons';
export const SearchBar = () => {
  const [value, setValue] = React.useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);
  return (
    <InputGroup maxW='md' bg='#383733' borderRadius='4px'>
      <InputLeftElement pointerEvents='none'>
        <SearchIcon color='white' />
      </InputLeftElement>
      <Input
        borderRadius='4px'
        color='white'
        borderColor='#797670'
        borderWidth='2px'
        boxSizing='border-box'
        outline='none'
        value={value}
        onChange={handleChange}
        placeholder='Search here'
        size='md'
      />
    </InputGroup>
  );
};
