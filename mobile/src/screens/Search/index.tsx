import React, {useState} from 'react';
import {Text, Input, Box, HStack} from 'native-base';

const Search = () => {
  const [text, setText] = useState('');

  return (
    <Box flex={1} px={3}>
      <HStack alignItems={'center'}>
        <Text mr={2} bg={'amber.400'}>back</Text>
        <Input flex={1} value={text} onChangeText={text => setText(text)} />
      </HStack>
      <Text>Search</Text>
    </Box>
  );
};

export default Search;
