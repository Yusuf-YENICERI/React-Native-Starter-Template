import React from 'react';
import {createStackNavigator} from "@react-navigation/stack"
import {NavigationContainer} from "@react-navigation/native"
import Tabs from './navigation/tabs';

import {Home, Settings, Feedback} from './screens';

import { Provider } from "react-redux";
import configureStore from './redux/store';

const store = configureStore();

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store} >
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={"Tabs"}>
          <Stack.Screen name="Tabs" component={Tabs} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="Feedback" component={Feedback} />

        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
  )
}

export default App;

// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
