import { createStackNavigator } from 'react-navigation-stack';

const Stack = createStackNavigator();

function MyStack(){
    return(
            <Stack.Navigator
              initialRouteName="Home"
              headerMode="screen"
              screenOptions={{
                headerTintColor: 'white',
                headerStyle: { backgroundColor: 'tomato' },
              }}
            />
    );
}