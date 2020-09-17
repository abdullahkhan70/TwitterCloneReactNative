import React, { useState, useEffect} from 'react';
import { View, ScrollView, Text, TouchableOpacity, TextInput, Modal} from 'react-native';
import SignupScreenStyle from '../css/SignupScreenStyle';
import DatePicker from 'react-native-datepicker'

export default class SignupScreen extends React.Component{
    constructor(props){
        super(props);
    }
        state = {
            counter: 0,
            showText: false,
            date: "2016-05-15"
        }

    render(){
       
        const { counter, showText } = this.state;
        let charCounter = 0;

        return(
            <ScrollView style={SignupScreenStyle.container} showsVerticalScrollIndicator={false} onPress={
                () => {
                    if(this.state.showText == true){
                        this.setState({showText: false});
                    }
                }
            }>
                
                <Modal visible={false}>
                    <View style={SignupScreenStyle.modalContainer}>
                       
                    </View>
                </Modal>
                 
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
                <TextInput style={SignupScreenStyle.textInput2} placeholder="Phone number or email address" keyboardType={'email-address'} />
                
                <TouchableOpacity
                    onPress={()=>{
                        if(showText == false) {
                            this.setState({showText: true});
                        }
                        else{
                            this.setState({showText: false});
                        }
                    }}
                >
                    <TextInput 
                        style={SignupScreenStyle.textInput}
                        placeholder="Date of birth"
                    />
                </TouchableOpacity>
            {this.state.showText ?   
            <View>
                <Text style={SignupScreenStyle.modalText} visible={showText}>
                    This will not be shown publicly. Confirm{"\n"}
                    your own age, even if this account is for a{"\n"}
                    business, a pet, or something else.
                </Text>

                <DatePicker
                    style={{alignSelf:'center', marginTop: 50}}
                    date={this.state.date}
                    mode="date"
                    androidMode="spinner"
                    placeholder="select date"
                    format="YYYY-MM-DD"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    showIcon={false}
                    onDateChange={(date) => {this.setState({date: date})}}
                />
                 
            </View>
            : null }
            
            </ScrollView>
        );

       
    }
}