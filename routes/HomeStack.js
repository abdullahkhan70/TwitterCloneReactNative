import "react-native-gesture-handler";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  Button,
  Image,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Modal,
} from "react-native";
import React from "react";
import Home from "../screens/Home/Home";
import Login from "../screens/Login/Login";
import ForgotPass from "../screens/ForgotPassword/ForgotPass";
import SignupScreen from "../screens/Signup/SignupScreen";
import LoginOptions from "../screens/Login/LoginOptions";
import MainUserScreen from "../screens/MainScreen/MainUserScreen";
import MoreOptions from "../screens/MainScreen/MoreOptions";
import ArticleDetails from '../screens/ArticleDetails/ArticleDetails';

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      headerShown: false,
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      headerTitleStyle: { alignSelf: "center" },
      headerTitle: () => (
        <Image
          style={{ height: 30, width: 30, marginLeft: 15 }}
          source={require("./logo.png")}
        />
      ),
      headerRight: () => <LoginOptions />,
    },
  },
  ForgotPass: {
    screen: ForgotPass,
    navigationOptions: {
      headerTitle: () => (
        <Text
          style={{ flex: 1, fontSize: 22, fontWeight: "bold", marginTop: 5 }}
        >
          Change Password
        </Text>
      ),
    },
  },
  SignupScreen: {
    screen: SignupScreen,
    navigationOptions: {
      headerTitle: () => (
        <Image
          style={{ height: 30, width: 30, marginLeft: 15 }}
          source={require("./logo.png")}
        />
      ),
    },
  },
  MainUserScreen: {
    screen: MainUserScreen,
  },
  ArticleDetails:{
    screen: ArticleDetails,
  }
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
