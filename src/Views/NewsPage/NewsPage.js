import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import {getMainNews} from '../../Service/mainNews';

export default function NewsPage() {
  const [main, setMain] = useState(null);
  async function apiResponse() {
    try {
      const response = await getMainNews();
      const articles = response?.articles || [];
      const mainNew = articles.slice(0, 1);
      setMain(mainNew);
    } catch (error) {
      console.warn('caiu no catch', error);
      return;
    }
  }
  useEffect(() => {
    apiResponse();
  }, []);

  return (
    <Content>
      <ContentBox>
        {main === null ? (
          <></>
        ) : (
          <>
            <Title>{main[0].title}</Title>
            <Details>
              {main[0].name}, {main[0].publishedAt}
            </Details>
            <ImageNews
              source={{
                uri: main[0].urlToImage,
              }}
            />
            <TextNews>{main[0].content}</TextNews>
          </>
        )}
      </ContentBox>
    </Content>
  );
}

const Content = styled.SafeAreaView`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ContentBox = styled.View`
  width: 85%;
  margin-top: 30px;
`;
const Title = styled.Text`
  font-size: 20px;
  font-weight: 900;
`;
const Details = styled.Text`
  font-size: 14px;
  font-weight: 300;
  margin: 20px 0 20px;
`;
const TextNews = styled.Text`
  font-size: 14px;
`;

const ImageNews = styled.Image`
  width: 100%;
  height: 200px;
  margin: 20px 0 20px;
`;
