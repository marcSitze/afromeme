import React from 'react';
import {Image} from 'react-native';
import {
  Box,
  Text,
  HStack,
  VStack,
  Container,
  Button,
  Heading,
} from 'native-base';
import {ScrollView} from 'react-native-gesture-handler';

import profile from '../../assets/images/profile.png';
import {width, height} from '../../constants/layout';
import BaseWrapper from '../../components/Layout/BaseWrapper';
import PostProfile from '../../components/PostProfile';
import {profilePosts} from '../../helpers/defaultData';
import WhiteSpace from '../../components/Others/WhiteSpace';

const ViewProfile = () => {
  return (
    <BaseWrapper backArrow={true} headerText="John Doe">
      <ScrollView style={{paddingHorizontal: 5}}>
        <Box flex={1} py="4">
          <HStack flex={1} alignItems="center" justifyContent={'space-evenly'}>
            <Box alignItems={'center'}>
              <Box width={100} height={100}>
                <Image
                  style={{width: '100%', height: '100%', minHeight: 80}}
                  resizeMode="contain"
                  source={profile}
                />
              </Box>
            </Box>
            <Box alignItems={'center'}>
              <Text fontWeight={'bold'} fontSize="xl">
                10
              </Text>
              <Text color={'gray.500'}>Posts</Text>
            </Box>
            <Box alignItems={'center'}>
              <Text fontWeight={'bold'} fontSize="xl">
                10
              </Text>
              <Text color={'gray.500'}>Followers</Text>
            </Box>
            <Box alignItems={'center'}>
              <Text fontWeight={'bold'} fontSize="xl">
                10
              </Text>
              <Text color={'gray.500'}>Following</Text>
            </Box>

            {/**
             * @add @posts here
             */}
          </HStack>
          <Text fontSize={'lg'} fontWeight={'bold'} ml={7}>
            John Doe
          </Text>
          <WhiteSpace height={10} />
          <Button mb={4}>Follow</Button>
          <Box flex={1} flexDirection="row" flexWrap={'wrap'}>
            {profilePosts.map(data => (
              <PostProfile key={data.id} media={data.media} />
            ))}
            <WhiteSpace height={height / 2} />
          </Box>
        </Box>
      </ScrollView>
    </BaseWrapper>
  );
};

export default ViewProfile;
