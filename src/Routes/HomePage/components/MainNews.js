import React from 'react';
// import {Content, ImageNews, SubTitle, Title} from './style';
import {ActivityIndicator, TouchableOpacity} from 'react-native';
import {Content, ImageNews, SubTitle, Title} from './styles';
import styled from 'styled-components/native';

export default function MainNews({navigation, main}) {
  return (
    <Content>
      {main === null ? (
        <>
          <Container>
            <ActivityIndicator size="large" color="#0097fe" />
          </Container>
        </>
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

const Container = styled.View`
  flex: 1;
  background-color: red;
`;
