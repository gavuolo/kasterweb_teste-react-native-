import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import Header from './components/Header';
import HomePage from './Routes/HomePage/HomePage';

export default function App() {
  return (
    <SafeAreaView>
      <Header />
      <ScrollView>
        <HomePage />
      </ScrollView>
    </SafeAreaView>
  );
}
