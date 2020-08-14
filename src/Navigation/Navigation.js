
import * as React from 'react';
import { View, Text,Image,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ToDoList from '../Screens/ToDoList'
import CreateItem from '../Screens/CreateItem'
import UpdateItem from '../Screens/UpdateItem';


const Stack = createStackNavigator();

function Navigation(props) {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="ToDoList">
                <Stack.Screen name="ToDoList" component={ToDoList}
                  options={({ navigation, route }) => ({ 
                    headerRight: () => (
                        <TouchableOpacity onPress={() => navigation.navigate('CreateItem')}
                            title="Info"
                            color="#fff">
                                <Image style={{width:25,height:25,marginRight:28}} source={require('../../assets/plus.png')} />
                        </TouchableOpacity>


                    ),
                    title: '',
                    headerStyle: {
                        backgroundColor: 'black',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                })} />
                <Stack.Screen name="CreateItem" component={CreateItem} 
                    options={() => ({ 
                    title: '',
                    headerStyle: {
                        backgroundColor: 'black',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                })}
                />
                  <Stack.Screen name="UpdateItem" component={UpdateItem} 
                    options={() => ({ 
                    title: '',
                    headerStyle: {
                        backgroundColor: 'black',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;