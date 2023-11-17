import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomePage from '../Routes/HomePage/HomePage';
import NewsPage from '../Routes/NewsPage/NewsPage';
import {Image} from 'react-native';

const Stack = createStackNavigator();

export default function StackView() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={{
          headerTitle: () => (
            <Image
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Deutsche_Welle_symbol_2012.svg/1280px-Deutsche_Welle_symbol_2012.svg.png',
              }}
              style={{width: 50, height: 50}}
              resizeMode="contain"
            />
          ),
          headerTitleAlign: 'left',
          headerShown: true,
          headerStyle: {
            height: 70,
          },
        }}
      />
      <Stack.Screen
        name="News"
        component={NewsPage}
        options={{
          title: 'Notícias',
        }}
      />
    </Stack.Navigator>
  );
}
