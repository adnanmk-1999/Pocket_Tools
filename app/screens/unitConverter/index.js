import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UnitConverter = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Unit Converter
            </Text>
            <Text style={styles.subtext}>
                Coming in Phase 2
            </Text>
        </View>
    );
};

export default UnitConverter;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    text: {
        fontSize: 22,
        color: '#fff',
        marginBottom: 5,
    },
    subtext: {
        color: '#888',
    },
});
