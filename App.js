import { StyleSheet} from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import UsersList from './screens/UsersList';
import CreateUserScreen from './screens/CreateUserScreen';
import UserDetailScreen from './screens/UserDetailScreen';

const Stack = createNativeStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle:{
                backgroundColor:"#CC1F36"
            },
            headerTintColor:"#fff",
            headerTitleStyle:{
                fontWeight:"bold"
            }
        }}>

            <Stack.Screen name="CreateUserScreen"
            option={{title: "Create a new user"}}
            component={CreateUserScreen}
            />

            <Stack.Screen name="UsersList" 
            option={{title: "Users List"}} 
            component={UsersList}
            />

            <Stack.Screen name="UserDetailScreen"
            option={{title: "User Detail"}} 
            component={UserDetailScreen}
            />
        </Stack.Navigator>
    )
}

export default function App() {
    return ( 
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});