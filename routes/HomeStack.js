import 'react-native-gesture-handler';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import { Button, Image, View, TouchableOpacity, Text, StyleSheet, Modal } from 'react-native';
import React from 'react';
import Home from '../screens/Home/Home';
import Login from '../screens/Login/Login';
import ForgotPass from '../screens/ForgotPassword/ForgotPass';
import SignupScreen from '../screens/Signup/SignupScreen';


const screens = {

    Home: {
        screen: Home,
        navigationOptions: {
            headerShown: false
        }

    },
    Login: {
        screen: Login,
        navigationOptions: {
           headerTitleStyle: { alignSelf: 'center' }, 
           headerTitle: () => 
           <Image 
                style={{height:30, width:30, marginLeft: 15}}
                source={require('./logo.png')} />,
           headerRight: ()=> (
            <View style={{flexDirection: 'row'}}>
                <Button 
                    title="Sign Up" 
                    onPress={() => alert('Sign Up!')}
                    style={{marginLeft: 20}}
                />
                <TouchableOpacity
                    onPress={pressedDropDownMenu}
                >
                <Image 
                    style={{height:35, width:35, marginRight: 10}}
                    source={require('./three_dots.png')} />
                </TouchableOpacity>
            </View>
           ),
        } 
    },
    ForgotPass:{
        screen: ForgotPass,
        navigationOptions:{
            headerTitle: () =>
            <Text style={{flex: 1, fontSize: 22, fontWeight: 'bold', marginTop: 5}}>
                Change Password
            </Text>
        }
    },
    SignupScreen:{
        screen: SignupScreen,
        navigationOptions:{
            headerTitle: () =>
                
                <Image 
                    style={{height:30, width:30, marginLeft: 15}}
                    source={require('./logo.png')} 
                />,
                
            
        }
    }

}

const pressedDropDownMenu= () =>{
    //  alert('hello world!');
    return(
        <Modal style={{margin: 200}}>
            <View>
                <Text>Hello World</Text>
            </View>
        </Modal>
    );
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);