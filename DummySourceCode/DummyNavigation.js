import React from "react";
import {
  Image,
  Text,
  TextInput,
  Dimensions,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  Feather,
  AntDesign,
  FontAwesome,
  SimpleLineIcons,
} from "react-native-vector-icons";

import Home from "../screens/Home/Home";
import Login from "../screens/Login/Login";
import Signup from "../screens/Signup/SignupScreen";
import ForgotPass from "../screens/ForgotPassword/ForgotPass";
import UserTimeline from "../screens/UserTimeline/UserTimeline";
import UserSearch from "../screens/UserSearch/UserSearch";
import UserNotification from "../screens/Notifications/NotificationScreen";
import UserMessage from "../screens/UserMessages/UserMessage";
import DrawerContents from './CustomDrawer';

const AuthStack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const UserTimelineStack = createStackNavigator();
const UserSearchStack = createStackNavigator();
const UserNotificationStack = createStackNavigator();
const UserMessageStack = createStackNavigator();
const SignupStack = createStackNavigator();
const Drawer = createDrawerNavigator();

var { height, width } = Dimensions.get("window");

const UserTimelineStackScreen = () => {
  return (
    <UserTimelineStack.Navigator
      screenOptions={({navigation})=>({
        headerStyle: {
          height: 110,
        },
        headerLeft: () => (
          <View>
            <TouchableWithoutFeedback
              
              onPress={navigation.openDrawer}>
              <Image
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 200,
                  marginLeft: 20,
                  marginTop: 10,
                }}
                source={require("./ProfileImage.png")}
              />
            </TouchableWithoutFeedback>
          </View>
        ),
      })}
    >
      <UserTimelineStack.Screen
        name="UserTimeLine"
        component={UserTimeline}
        options={{
          headerTitle: () => (
            <Image
              style={{ height: 30, width: 30, marginLeft: 15, marginTop: 13 }}
              source={require("./logo.png")}
            />
          ),
         
        }}
      />
    </UserTimelineStack.Navigator>
  );
};

const UserSearchStackScreen = () => {
  return (
    <UserSearchStack.Navigator
      screenOptions={({navigation})=>({
        headerStyle: {
          height: 110,
        },
        headerLeft: () => (
          <View>
            <TouchableWithoutFeedback
              
              onPress={navigation.openDrawer}>
              <Image
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 200,
                  marginLeft: 20,
                  marginTop: 10,
                }}
                source={require("./ProfileImage.png")}
              />
            </TouchableWithoutFeedback>
          </View>
        ),
      })}
    >
      <UserSearchStack.Screen
        name="UserSearch"
        component={UserSearch}
        options={{
          headerTitle: () => (
            <View>
              <TextInput
                style={{
                  paddingLeft: 20,
                  height: 50,
                  width: "85%",
                  backgroundColor: "#DCDCDC",
                  borderRadius: 50,
                  fontSize: 18,
                  marginTop: 5,
                }}
                placeholder="Search Twitter"
              />
            </View>
          ),
          
          headerRight: () => (
            <Feather
              style={{ marginRight: 20, marginTop: 10 }}
              name="settings"
              size={28}
              color="#00acee"
            />
          ),
        }}
      />
    </UserSearchStack.Navigator>
  );
};

const UserNotificationStackScreen = () => {
  return (
    <UserNotificationStack.Navigator
      screenOptions={({navigation})=>({
        headerStyle: {
          height: 110,
        },
        headerLeft: () => (
          <View>
            <TouchableWithoutFeedback
              
              onPress={navigation.openDrawer}>
              <Image
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 200,
                  marginLeft: 20,
                  marginTop: 10,
                }}
                source={require("./ProfileImage.png")}
              />
            </TouchableWithoutFeedback>
          </View>
        ),
      })}
    >
      <UserNotificationStack.Screen
        name="UserNotification"
        component={UserNotification}
        options={{
          headerTitle: () => (
            <Text
              style={{
                marginRight: 85,
                fontSize: 24,
                fontWeight: "bold",
                marginTop: 10,
              }}
            >
              Notifications
            </Text>
          ),
          headerRight: () => (
            <Feather
              style={{ marginRight: 20, marginTop: 10 }}
              name="settings"
              size={28}
              color="#00acee"
            />
          ),
        }}
      />
    </UserNotificationStack.Navigator>
  );
};

const UserMessageStackScreen = () => {
  return (
    <UserMessageStack.Navigator
      screenOptions={({navigation})=>({
        headerStyle: {
          height: 110,
        },
        headerLeft: () => (
          <View>
            <TouchableWithoutFeedback
              
              onPress={navigation.openDrawer}>
              <Image
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 200,
                  marginLeft: 20,
                  marginTop: 10,
                }}
                source={require("./ProfileImage.png")}
              />
            </TouchableWithoutFeedback>
          </View>
        ),
      })}
    >
      <UserMessageStack.Screen
        name="UserMessage"
        component={UserMessage}
        options={{
          headerTitle: () => (
            <Text
              style={{
                marginRight: 110,
                fontSize: 24,
                fontWeight: "bold",
                marginTop: 10,
              }}
            >
              Messages
            </Text>
          ),
          headerRight: () => (
            <Feather
              style={{ marginRight: 20, marginTop: 10 }}
              name="settings"
              size={28}
              color="#00acee"
            />
          ),
        }}
      />
    </UserMessageStack.Navigator>
  );
};

const TabsNavigator = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="UserTimeLine"
        component={UserTimelineStackScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            let colorName;

            colorName = focused ? "#00acee" : "gray";

            console.log(color);
            return (
              <FontAwesome
                style={{ marginTop: 7 }}
                name="home"
                size={32}
                color={colorName}
              />
            );
          },
          tabBarLabel: "",
        }}
      />
      <Tabs.Screen
        name="UserSearch"
        component={UserSearchStackScreen}
        options={{
          headerTitle: null,
          tabBarIcon: ({ focused, color, size }) => {
            let colorNameSearch;

            colorNameSearch = focused ? "#00acee" : "gray";

            return (
              <AntDesign
                style={{ marginTop: 7 }}
                name="search1"
                size={30}
                color={colorNameSearch}
              />
            );
          },
          tabBarLabel: "",
        }}
      />
      <Tabs.Screen
        name="UserNotification"
        component={UserNotificationStackScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            let colorNameNotification;

            colorNameNotification = focused ? "#00acee" : "gray";

            return (
              <SimpleLineIcons
                style={{ marginTop: 7 }}
                name="bell"
                size={28}
                color={colorNameNotification}
              />
            );
          },
          tabBarLabel: "",
        }}
      />
      <Tabs.Screen
        name="UserMessage"
        component={UserMessageStackScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            let colorNameMessage;

            colorNameMessage = focused ? "#00acee" : "gray";

            return (
              <AntDesign
                style={{ marginTop: 7 }}
                name="mail"
                size={32}
                color={colorNameMessage}
              />
            );
          },
          tabBarLabel: "",
        }}
      />
    </Tabs.Navigator>
  );
};

const SignupStackScreen = () => {
  return (
    <SignupStack.Navigator>
      <SignupStack.Screen
        name="Signup"
        component={Signup}
        options={{
          headerTitle: () => (
            <Image
              style={{ height: 30, width: 30, marginLeft: 15 }}
              source={require("./logo.png")}
            />
          ),
        }}
      />
    </SignupStack.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContents {...props} /> }>
        <Drawer.Screen name="Home" component={TabsNavigator} />
        <Drawer.Screen name="Signup" component={SignupStackScreen} />
      </Drawer.Navigator>

      {/* <AuthStack.Navigator>
        <AuthStack.Screen
          name="Home"
          component={Home}
          options={{ title: "" }}
        />
        <AuthStack.Screen
          name="SignupScreen"
          component={Signup}
          options={{
            headerTitle: () => (
              <Image
                style={{ height: 30, width: 30, marginLeft: 15 }}
                source={require("./logo.png")}
              />
            ),
          }}
        />
        <AuthStack.Screen name="Login" component={Login} />
        <AuthStack.Screen name="ForgotPass" component={ForgotPass} />
        <AuthStack.Screen name="MainUserScreen" component={MainUserScreen} />
      </AuthStack.Navigator> */}
    </NavigationContainer>
  );
};
