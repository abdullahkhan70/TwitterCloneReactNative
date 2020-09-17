import React from 'react';
import { View, Text } from 'react-native';
import FloatingActionButton from '../../Components/FloatingActionButton';

export default UserMessage = () => {
    return(
        <View>
            <Text>User Search Screen!</Text>
            <FloatingActionButton message="User Message" visible={"True"} />
        </View>
    );
} 