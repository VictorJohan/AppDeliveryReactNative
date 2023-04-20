import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from './src/views/login/Login';
import { RegisterScreen } from './src/views/register/Register';
import { RolScreen } from './src/views/rol/Rol';
import { AdminTabsNavigator } from './src/navigators/AdminTabNavigator';
import { ClienteTabsNavigator } from './src/navigators/ClienteTabNavigator';


export type RootStackParamList = {
  LoginScreen: undefined;
  RegisterScreen: undefined;
  RolScreen: undefined;
  AdminTabsNavigator: undefined;
  ClienteTabsNavigator: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
        />

        <Stack.Screen
          options={{ title: 'Registro', headerShown: true }}
          name="RegisterScreen"
          component={RegisterScreen}
        />

        <Stack.Screen
          options={{ title: 'Rol', headerShown: true }}
          name="RolScreen"
          component={RolScreen}
        />

        <Stack.Screen component={AdminTabsNavigator} 
        name='AdminTabsNavigator' />

        <Stack.Screen component={ClienteTabsNavigator} 
        name='ClienteTabsNavigator' />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;