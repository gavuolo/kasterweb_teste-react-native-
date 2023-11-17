import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import Header from './components/Header';
import HomePage from './Views/HomePage/HomePage';
import Navigation from './navigation';

export default function App() {
  return (
    <SafeAreaView>
      <Navigation />
    </SafeAreaView>
  );
}
