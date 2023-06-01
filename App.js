// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Role from './Screens/Role';
import Register from './Screens/Register';
import Login from './Screens/Login';
import Logo from './components/logo';
function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Register</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
          headerTitleAlign: 'center',
          headerTitle: (props) => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Logo />
              <Text style={{ marginLeft: 0, fontSize: 18, fontWeight: 'bold' }}>Cold Store</Text>
            </View>
          ),
          
        }}>
        
        <Stack.Screen name="Role" component={Role} /> 
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
         
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;