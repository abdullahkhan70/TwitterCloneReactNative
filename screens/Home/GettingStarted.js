import React from 'react';
import { View, Image, Text, TouchableHighlight, Button } from 'react-native';
import GettingStarting from '../css/GettingStarting'


function GettingStarted({ navigation }){
        
        function pressHandler(){
            navigation('Login', {name:''});
        }
       
        return(
            
                    <View style={{flex:1,justifyContent: 'center', flexDirection:'column',alignItems:'center'}}>
                        <View>
                        <Image style={{height: 30, width: 30}} source={require('./logo.png')}/>
                        </View>
                        <View style={{}}>
                        <Text style={{fontSize:34, fontWeight:'bold',marginLeft: 50, marginTop: 150}}>See what's{"\n"}happening in the {"\n"}world right now.</Text>
                        
                        <TouchableHighlight
                            onPress={() => navigation('SignupScreen', {name: ''})}
                            style={GettingStarting.submit}
                            underlayColor='#fff'
                        >
                        <Text style={GettingStarting.submitText}>Create account</Text>
                        </TouchableHighlight>
                        
                        <View>
                        <Text style={GettingStarting.logIn}>Have an account already? </Text>
                        
                        <Button style={GettingStarting.logInBtn} title="Log in" onPress={pressHandler}/>
                        </View>
                        </View>
                    </View>
                
        );
    
}

export default GettingStarted;