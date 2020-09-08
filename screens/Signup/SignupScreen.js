import React from 'react';
import { View, ScrollView, Text, TouchableOpacity, TextInput} from 'react-native';
import SignupScreenStyle from '../css/SignupScreenStyle';

export default class SignupScreen extends React.Component{
    constructor(props){
        super(props);
    }
        state = {
            counter: 50,
            realText: '',
        }
    render(){
       
        const { counter,realText } = this.state;
        let charCounter = 0;
        let i = 0;

        return(
            <ScrollView style={SignupScreenStyle.container} showsVerticalScrollIndicator={false}>
                <Text style={SignupScreenStyle.mainText}>Create your account</Text>
                <TextInput 
                    
                    style={SignupScreenStyle.textInput} placeholder="Name" 
                    onChangeText={
                        text =>{
                            charCounter = text.length;
                            this.setState({counter: Math.max(charCounter, 0)});
                           
                        }
                }
                    maxLength={50}
                />
                <Text style={SignupScreenStyle.textCounter}>{counter}</Text>
                <TextInput style={SignupScreenStyle.textInput2} placeholder="Phone number or email address" />
                <TextInput style={SignupScreenStyle.textInput} placeholder="Date of birth" />
            </ScrollView>
        );
    }
}