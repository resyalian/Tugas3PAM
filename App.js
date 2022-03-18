import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenAwal from './screens/ScreenAwal';
import ScreenAkhir from './screens/ScreenAkhir';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
        <Stack.Screen name="ScreenAwal" component={ScreenAwal} />
        <Stack.Screen name="ScreenAkhir" component={ScreenAkhir} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;