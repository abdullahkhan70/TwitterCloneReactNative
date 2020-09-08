import React from 'react';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import ForgotPassStyle from '../css/ForgotPassStyle';

export default function ForgotPass(){

    const [isPress, setPress] = React.useState(false);
    const [changeText, setText] = React.useState('Find your Twitter account');
    const [changeStyle, setTextStyle] = React.useState(false)

    var touchProps = {
        activeOpacity: 1,
        underlayColor: '#00acee',                               // <-- "backgroundColor" will be always overwritten by "underlayColor"
        styles: isPress ? ForgotPassStyle.borderAssign : ForgotPassStyle.submit, // <-- but you can still apply other style changes
        onHideUnderlay: () => setPress(false),
        onShowUnderlay: () => setPress(true),
        onPress: () => {
            setText('We Couldn\'t find your account with\nthat information');
        },                 // <-- "onPress" is apparently required
      };
    
  

    return(
        <View style={ForgotPassStyle.container}>
            <Text style={ForgotPassStyle.mainText}>{changeText}</Text>
            <Text style={ForgotPassStyle.enterDetails}>Enter your email, phone number, or username.</Text>
            <TextInput style={ForgotPassStyle.enterText}/>
            <TouchableHighlight
                    {...touchProps}
                    style={ForgotPassStyle.submit}
                    
            >
                <Text style={ForgotPassStyle.submitText}>Search</Text>
            </TouchableHighlight>   
        </View>
    );  
}