import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from './src/Pages/Home';
import Formacao from './src/Pages/Formacao';
import Dados from './src/Pages/Dados';
import Experiencia from './src/Pages/Experiencia';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Formacao" component={Formacao}/>
            <Stack.Screen name="Dados" component={Dados}/>
            <Stack.Screen name="Experiencia" component={Experiencia}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}
