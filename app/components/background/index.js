import React from 'react';
import { View } from 'react-native';
import styles from './styles';

const Background = ({ children }) => {
    return (
        <View style={styles.container}>
            {/* Neon shapes */}
            <View style={styles.neonCircleTop} />
            <View style={styles.neonCircleBottom} />
            <View style={styles.neonArcRight} />

            {/* Content */}
            <View style={styles.content}>
                {children}
            </View>
        </View>
    );
};

export default Background;
