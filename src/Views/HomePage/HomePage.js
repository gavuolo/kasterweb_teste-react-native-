import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
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
      const fourNews = articles.slice(0, 4);
      setHomePageNews(fourNews);
      const mainNew = articles.slice(0, 1);
      setMain(mainNew);
      console.log('ESSAS SAO A NEWS DA HOMEPAGE', homePageNews);
    } catch (error) {
      console.warn('caiu no catch', error);
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
          <Text>TV AO VIVO</Text>
        </LiveBox>
        <MainNews navigation={navigation} main={main} />
        <PackNews>
          {homePageNews === null
            ? null
            : homePageNews.map((newsItem, index) => (
                <News
                  key={index}
                  navigation={navigation}
                  title={newsItem.title}
                  description={newsItem.description}
                  image={newsItem.urlToImage}
                />
              ))}
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
