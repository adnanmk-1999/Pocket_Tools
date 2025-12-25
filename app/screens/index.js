import React from 'react';
import { View, StatusBar } from 'react-native';
import Background from '../components/background';


const Screen = ({ children }) => {
    return (
        <Background>
            <StatusBar translucent backgroundColor="transparent" />
            <View style={{ flex: 1, paddingTop: 40 }}>
                {children}
            </View>
        </Background>
    );
};

export default Screen;
