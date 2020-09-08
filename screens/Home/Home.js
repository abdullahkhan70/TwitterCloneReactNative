import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as Progress from 'react-native-progress';
import CountDown from 'react-native-countdown-component';
import GettingStarted from './GettingStarted'

class loading extends Component{
  
    constructor(){
        super();
        this.state = {
            showMe: true,
            getMore: true,
        };
    }

    ShowHideComponent = () => {
        if (this.state.showMe == true) {
          this.setState({ showMe: false });
        } else {
          this.setState({ showMe: true });
        }
      };

    render(){
      const statusValue = this.state.getMore;
      const {navigate} = this.props.navigation;
        return (
          
              <View style={styles.container}>
                {this.state.showMe ? (
                    <View>
                        <Progress.Circle size={130} indeterminate={true} />
                        <Image style={{marginTop: -115, width: 100, height: 100, marginLeft: 14}}  source={require('./logo.png')} />
                        <Text style={{fontWeight: 'bold', fontSize: 24, marginTop: 30, marginLeft: 20}}>Loading...</Text>
                        
                        </View>
                 ) : (<View>
                      <GettingStarted navigation={navigate}/>
                    </View>)}
                    <CountDown
                        until={5}
                        onFinish={this.ShowHideComponent}
                        onPress={() => alert('hello')}
                        size={0}
                        digitStyle={{backgroundColor: '#FFF'}}
                        digitTxtStyle={{color: '#FFFFFF'}}
                        timeToShow={['M', 'S']}
                        timeLabels={{m: '', s: ''}}
                    />
              </View>
              
        );
    }
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });


export default loading;