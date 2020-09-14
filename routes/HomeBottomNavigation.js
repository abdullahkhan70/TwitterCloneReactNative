import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Ionicons from 'react-native-vector-icons/EvilIcons';
import NotificationScreen from "../screens/Notifications/NotificationScreen";
import UserTimeline from "../screens/UserTimeline/UserTimeline";
import UserSearch from "../screens/UserSearch/UserSearch";
import UserMessage from "../screens/UserMessages/UserMessage";

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: UserTimeline,
      navigationOptions: {
        tabBarIcon: ({focused, color, size}) => {
            let colorName;

            colorName = focused ? '#00acee' : 'gray';
        
            console.log(color)
            return <Icon name="home" size={28} color={colorName}/>;
    
    },
      },
    },
    Search: {
      screen: UserSearch,
      navigationOptions: {
        tabBarIcon: ({focused, color, size}) => 
        {
            let colorNameSearch;
            
            colorNameSearch = focused ? '#00acee' : 'gray';

          return <AntDesign name="search1" size={28} color={colorNameSearch} />;
        },
      },
    },
    Notification: {
        screen: NotificationScreen,
        navigationOptions: {
          headerTitle: () =>{
            <Text>Notifications</Text>
          },
          tabBarIcon: ({focused, color, size}) => {
            let colorNameNotification;

            colorNameNotification = focused ? '#00acee' : 'gray';

            return <SimpleLineIcons name="bell" size={28} color={colorNameNotification} />;
          },
        },
      },
    Message: {
        screen: UserMessage,
        navigationOptions: {
          tabBarIcon: ({focused, color, size}) => {

            let colorNameMessage;

            colorNameMessage = focused ? '#00acee' : 'gray';

           return <AntDesign name="mail" size={28} color={colorNameMessage} />;
          },
        },
      },
  },
  {
    tabBarOptions: {
      showLabel: false,
    },
  }
);

export default createAppContainer(TabNavigator);
