import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeView from './view/HomeView';
import SettingView from './view/SettingView';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from './navigation/types';
import TestView from './view/TestView';


const RootStack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStack.Navigator initialRouteName='Home'>
          <RootStack.Screen name='Home' component={HomeView}></RootStack.Screen>
          <RootStack.Screen name='Setting' component={SettingView}></RootStack.Screen>
          <RootStack.Screen name='Test' component={TestView}></RootStack.Screen>
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}


export default App;
