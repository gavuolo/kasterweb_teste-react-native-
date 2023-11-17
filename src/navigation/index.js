import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';

import StackView from './Stack';

export default function NavigationTeste() {
  return (
    <NavigationContainer>
      <StackView />
    </NavigationContainer>
  );
}
