import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Pressable,
} from 'react-native';

const getCategory = (bmi) => {
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 25) return 'Normal weight';
    if (bmi < 30) return 'Overweight';
    return 'Obese';
};

const BMICalculator = () => {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmi, setBmi] = useState(null);
    const [category, setCategory] = useState('');

    const calculateBMI = () => {
        const h = parseFloat(height);
        const w = parseFloat(weight);

        if (!h || !w) {
            setBmi(null);
            setCategory('');
            return;
        }

        const bmiValue = w / ((h / 100) ** 2);
        setBmi(bmiValue);
        setCategory(getCategory(bmiValue));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>BMI Calculator</Text>

            <TextInput
                style={styles.input}
                placeholder="Height (cm)"
                placeholderTextColor="#666"
                keyboardType="numeric"
                value={height}
                onChangeText={setHeight}
            />

            <TextInput
                style={styles.input}
                placeholder="Weight (kg)"
                placeholderTextColor="#666"
                keyboardType="numeric"
                value={weight}
                onChangeText={setWeight}
            />

            <Pressable style={styles.button} onPress={calculateBMI}>
                <Text style={styles.buttonText}>Calculate</Text>
            </Pressable>

            {bmi && (
                <View style={styles.result}>
                    <Text style={styles.bmiValue}>
                        BMI: {bmi.toFixed(1)}
                    </Text>
                    <Text style={styles.category}>
                        {category}
                    </Text>
                </View>
            )}
        </View>
    );
};

export default BMICalculator;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        padding: 20,
    },
    title: {
        color: '#fff',
        fontSize: 26,
        fontWeight: '700',
        marginBottom: 30,
        textAlign: 'center',
    },
    input: {
        backgroundColor: '#111',
        borderRadius: 8,
        padding: 14,
        color: '#fff',
        fontSize: 16,
        marginBottom: 15,
    },
    button: {
        backgroundColor: '#1e90ff',
        padding: 14,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    result: {
        marginTop: 30,
        alignItems: 'center',
    },
    bmiValue: {
        color: '#fff',
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 6,
    },
    category: {
        color: '#aaa',
        fontSize: 16,
    },
});
