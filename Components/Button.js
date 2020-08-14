import React from 'react';
import { Text, View,TouchableOpacity,Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');


const Button = (props) => (
    <TouchableOpacity 
    activeOpacity={0.8}
    onPress={props.onPress}
    style={[{ 
      backgroundColor: '#4495cb', 
      width: width * 0.9,
      height: height * 0.08,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10
      }, props.style]}>
      <Text style={{ 
          color: 'white', 
          fontWeight: 'bold', 
      fontSize: 18}}>{props.text}</Text>
    </TouchableOpacity>
);

export default Button;
