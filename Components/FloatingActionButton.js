import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


this.state = {
    opacityImage: 1,
}

export default ({message, visible}) =>{
    
    if(visible == "True"){
        this.state.opacityImage = 0
    }else{
        this.state.opacityImage = 1
    }

    return(
        <View>
            <TouchableOpacity onPress={()=>alert(message)} style={styles.fab}>
                <MaterialCommunityIcons style={{opacity: this.state.opacityImage}} name="feather" size={32} color="#ffffff" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    fab: {
        width: 70, 
        height: 70, 
        backgroundColor: "#00acee",
        position: 'absolute',
        bottom: 20, 
        right: 20,
        borderRadius: 200,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 18,
        marginLeft: 2,
        marginRight: 2,
    }
});