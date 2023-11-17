import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Text} from 'react-native';
import styled from 'styled-components/native';
import MainNews from './components/MainNews';
import News from './components/News';
import {getMainNews} from '../../Service/mainNews';
import {ScrollView} from 'react-native';

export default function HomePage({navigation}) {
  const [main, setMain] = useState(null);
  const [homePageNews, setHomePageNews] = useState(null);
  async function apiResponse() {
    try {
      const response = await getMainNews();
      const articles = response?.articles || [];
      const fourNews = articles.slice(1, 5);
      setHomePageNews(fourNews);
      const mainNew = articles.slice(0, 1);
      setMain(mainNew);
    } catch (error) {
      console.warn(error);
      return;
    }
  }
  useEffect(() => {
    apiResponse();
  }, []);
  return (
    <ScrollView>
      <Content>
        <LiveBox>
          <PlayIcon
            source={{
              uri: 'https://www.friidesigns.com/wp-content/uploads/2018/11/white-play-icon-png-6.png',
            }}
          />

          <LiveText>TV AO VIVO</LiveText>
          <LiveInfo>DW News</LiveInfo>
        </LiveBox>
        <MainNews navigation={navigation} main={main} />
        <PackNews>
          {homePageNews === null ? (
            <Container>
              <ActivityIndicator size="large" color="#0097fe" />
            </Container>
          ) : (
            homePageNews.map((newsItem, index) => (
              <News
                key={index}
                navigation={navigation}
                title={newsItem.title}
                description={newsItem.description}
                image={newsItem.urlToImage}
              />
            ))
          )}
        </PackNews>
      </Content>
    </ScrollView>
  );
}
const Content = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const LiveBox = styled.View`
  margin-top: 30px;
  width: 85%;
  height: 50px;
  background-color: #0097fe;
  display: flex;
  align-items: center;
  flex-direction: row;
`;
const PackNews = styled.View`
  margin-top: 30px;
  width: 85%;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;
const Container = styled.View`
  flex: 1;
`;
const LiveText = styled.Text`
  width: 78px;
  font-size: 12px;
  font-weight: 800;
  margin: 0 10px 0 10px;
  padding: 2px;
  text-align: center;
  color: white;
  background-color: #4d4c51;
`;

const LiveInfo = styled.Text`
  color: white;
  font-size: 15px;
  font-weight: 500;
`;

const PlayIcon = styled.Image`
  width: 20px;
  height: 20px;
  margin-left: 10px;
`;
