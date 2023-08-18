import Login from './Component/Login';
import Register from './Component/Register';
import Home from './Component/Home';
import Forgot_Pass from './Component/Forgot_Pass';
import Verification_Code from './Component/Verification_Code';
import Creat_New_Pass from './Component/Creat_New_Pass';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
      <Stack.Screen name="Forgot_Pass" component={Forgot_Pass} options={{
        headerTintColor: '#ffffff',
        title: '',
        headerStyle: {
          backgroundColor: '#141416',
        },
      }} />
      <Stack.Screen name="Verification_Code" component={Verification_Code} options={{
        headerTintColor: '#ffffff',
        title: '',
        headerStyle: {
          backgroundColor: '#141416',
        },
      }} />
      <Stack.Screen name="Creat_New_Pass" component={Creat_New_Pass} options={{
        headerTintColor: '#ffffff',
        title: '',
        headerStyle: {
          backgroundColor: '#141416',
        },
      }} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}
