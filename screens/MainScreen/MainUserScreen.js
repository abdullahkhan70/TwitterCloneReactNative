import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MainUserScreenStyle from "../css/MainUserScreenStyle";
import MoreOptions from './MoreOptions';
import BottomNavigation from '../../routes/HomeBottomNavigation';

export default class MainUserScreen extends React.Component {
    
  static navigationOptions = {
    headerTitle: () => (
      <Image
        style={{ height: 30, width: 30, marginLeft: 15 }}
        source={require("./logo.png")}
      />
    ),
    headerRight: () => ( 
       // <MoreOptions navigation={navigator}/>
       <View>
           <TouchableOpacity
                onPress={()=>navigator('SignupScreen')}
           >
               <Text>Click Me</Text>
           </TouchableOpacity>
       </View>
    ),
  };
  render() {
      //static const { navigator } = this.props.navigation;
    return (
      <View style={MainUserScreenStyle.container}>
        <BottomNavigation />
      </View>
    );
  }
}
