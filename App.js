import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {TailwindProvider} from "tailwindcss-react-native";
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


// function MyStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={Home} />
//       <Stack.Screen name="Notifications" component={Notifications} />
//       <Stack.Screen name="Profile" component={Profile} />
//       <Stack.Screen name="Settings" component={Settings} />
//     </Stack.Navigator>
//   );
// }




export default function App() {
  return (
    <NavigationContainer>
   <TailwindProvider>
      <Stack.Navigator>
        {/* screens */}
      <Stack.Screen name="Home" component={Home} />

        
      </Stack.Navigator>
    </TailwindProvider>
 
    </NavigationContainer>
       
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'powderblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
