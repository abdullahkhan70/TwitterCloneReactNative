import React, { Component } from 'react';
import { View, Text, ScrollView, TextInput, TouchableHighlight, Button } from 'react-native';
import LoginStyle from '../css/LoginStyle';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Login extends Component{
    render(){
        const {navigate} = this.props.navigation;

        function pressHandler(){
            navigate('ForgotPass');
        }
        function loginBtn(){
            navigate('MainUserScreen');
        }

        return(
            <ScrollView 
                style={LoginStyle.container}
                showsVerticalScrollIndicator={false}
            >
                <Text style={LoginStyle.twitter}>Log in to Twitter.</Text>
                <Text style={LoginStyle.entry}>Phone number, email address or username</Text>
               
                <TextInput
                    autoCorrect={false}
                    style={LoginStyle.inputText}
                    underlineColorAndroid='#00acee'
                />

                <Text style={LoginStyle.entry}>Password</Text>

               <View style={{flex:1, flexDirection: 'row'}}>
               <TextInput
                   inlineImageLeft='logo@1x'
                   secureTextEntry={true} 
                   style={LoginStyle.inputText}
                   autoCorrect={false}
                   underlineColorAndroid='#00acee'
               />
               <Icon 
                    name="eye"
                    size={30}
                    color={'#00acee'}
                />
                </View>

                <Button 
                    title='Forgotten your password?'
                    onPress={pressHandler}
                />
               
               <View style={{flex:2, alignItems:'flex-end', justifyContent: 'flex-end', borderTopColor: '#808080', borderTopWidth:1, marginVertical: 250, marginHorizontal:0}}>  
               <TouchableHighlight
                    style={LoginStyle.submit}
                    underlayColor='#fff'
                    onPress={loginBtn}
                >
                    <Text style={LoginStyle.submitText}>Log in</Text>
                </TouchableHighlight>

               </View>
            </ScrollView>
        );
    }
}