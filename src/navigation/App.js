import "react-native-gesture-handler"
import React from "react"
import { NavigationContainer, DefaultTheme } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons"

//screens
import HomeScreen from "../screens/HomeScreen"
import AddPetScreen from "../screens/AddPetScreen"
import ProfileScreen from "../screens/ProfileScreen"
import PetDescriptionScreen from "../screens/PetDescriptionScreen"

//assets
import { colorTheme } from "../theme/colors"

const HomeStack = createStackNavigator()
const Tab = createMaterialBottomTabNavigator()

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colorTheme.primary
  }
}

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Inicio"
        component={HomeScreen}
        options={{
          title: "FindFriend🐕",
          headerStyle: {
            backgroundColor: colorTheme.primary,
            elevation: 0,
            shadowOpacity: 0
          },
          headerTitleStyle: {
            color: "#FFF",
            textAlign: "center"
          }
        }}
      />
      <HomeStack.Screen
        name="PetDescriptionScreen"
        component={PetDescriptionScreen}
        headerMode="none"
        options={{
          headerShown: false
        }}
      />
    </HomeStack.Navigator>
  )
}
export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator initialRouteName="home">
        <Tab.Screen
          name="home"
          component={HomeStackScreen}
          options={{
            tabBarLabel: "Inicio",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcon name="paw" color={color} size={24} />
            )
          }}
        />

        <Tab.Screen
          name="adoption"
          component={AddPetScreen}
          options={{
            tabBarLabel: "Nueva Adopción",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcon
                name="plus-thick"
                color={color}
                size={24}
              />
            )
          }}
        />

        <Tab.Screen
          name="profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "Perfil",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcon name="account" color={color} size={24} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
