import React from 'react';
import {View, Button, Image, TouchableOpacity, Modal, Text} from 'react-native';


export default class LoginOptions extends React.Component{
    
    render(){
        //const {navigate} = this.props.navigation;
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
    return(
        
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
    );
    }
}