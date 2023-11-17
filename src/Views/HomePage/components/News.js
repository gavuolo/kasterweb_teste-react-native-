import React from 'react';
import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';

export default function News({navigation, title, description, image}) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('News')}>
      <Teste>
        <TesteImagem
          source={{
            uri: image,
          }}
        />
        <TextBox>
          <Title>{title}</Title>
        </TextBox>
      </Teste>
    </TouchableOpacity>
  );
}

const Teste = styled.View`
  width: 95%;
  height: 100px;
  margin: 2%;
  display: flex;
  flex-direction: row;
  border: 1px black;
`;

const TesteImagem = styled.Image`
  width: 50%;
  height: 100%;
`;
const TextBox = styled.View`
  width: 50%;
  height: auto;
  padding: 2%;
  display: flex;
`;
const Title = styled.Text`
  font-weight: bold;
`;
