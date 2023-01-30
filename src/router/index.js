import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Favorite, GetStarted, Home, Notification,Categories, Profile,Detail } from '../screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomNavigator from '../components/molecules/BottomNavigator';
// import Detail from '../screens/Detail';
// import  from '../screens/Categories'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainApp() {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
    <Tab.Screen name="Home"
     component={Home}
     options={{headerShown: false}} />
    <Tab.Screen
      name="Favorite"
      component={Favorite}
      options={{headerShown: false}}
    />
    
    <Tab.Screen
      name="Notification"
      component={Notification}
      options={{headerShown: false}}
    />

    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{headerShown: false}}
    />
    
    <Tab.Screen
      name="Detail"
      component={Detail}
      options={{headerShown: false}}
    />
  </Tab.Navigator>
  );
}


const Router = () => {
  return (
    <Stack.Navigator>
      
      <Stack.Screen
        name='GetStarted'
        component={GetStarted}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{ headerShown: false }}
      />

       <Stack.Screen
        name="Categories"
        component={Categories}
        options={{ headerShown: false }}
      />
    
    <Stack.Screen
        name="Detail"
        component={Detail}
        options={{ headerShown: false }}
      />
    
    </Stack.Navigator>
  );
}

export default Router

const styles = StyleSheet.create({})