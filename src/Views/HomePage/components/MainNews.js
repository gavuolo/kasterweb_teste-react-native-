import React from 'react';
// import {Content, ImageNews, SubTitle, Title} from './style';
import {TouchableOpacity} from 'react-native';
import {Content, ImageNews, SubTitle, Title} from './styles';

export default function MainNews({navigation, main}) {
  return (
    <Content>
      {main === null ? (
        <></>
      ) : (
        <TouchableOpacity onPress={() => navigation.navigate('News')}>
          <ImageNews
            source={{
              uri: main[0].urlToImage,
            }}
          />
          <Title>{main[0].title}</Title>
          <SubTitle>{main[0].description}</SubTitle>
        </TouchableOpacity>
      )}
    </Content>
  );
}
