import React from 'react';
import { View, Text } from 'react-native';
import FloatingActionButton from '../../Components/FloatingActionButton';

export default UserSearch = () => {
    return(
        <View>
            <Text>User Search Screen!</Text>
            <FloatingActionButton message="User Search!" visible={"False"} />
        </View>
    );
} 