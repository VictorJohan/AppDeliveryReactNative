import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from './src/views/login/Login';
import { RegisterScreen } from './src/views/register/Register';
import { ProfileInfoScreen } from './src/views/profile/info/ProfileInfo';
import { RolScreen } from './src/views/rol/Rol';


export type RootStackParamList = {
  LoginScreen: undefined;
  RegisterScreen: undefined;
  ProfileInfoScreen: undefined;
  RolScreen: undefined;
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
          options={{ title: 'Perfil', headerShown: true }}
          name="ProfileInfoScreen"
          component={ProfileInfoScreen}
        />

        <Stack.Screen
          options={{ title: 'Rol', headerShown: true }}
          name="RolScreen"
          component={RolScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;