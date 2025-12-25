import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Pressable,
} from 'react-native';

import Screen from '../../screens';
import styles from './styles';

/* ---------- Helpers ---------- */
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

        const value = w / ((h / 100) ** 2);
        setBmi(value);
        setCategory(getCategory(value));
    };

    return (
        <Screen>
            <View style={styles.container}>

                {/* ---------- Helper Text ---------- */}
                <Text style={styles.helperText}>
                    Enter your height and weight to calculate BMI.
                </Text>

                {/* ---------- Inputs ---------- */}
                <View style={styles.card}>
                    <TextInput
                        style={styles.input}
                        placeholder="Height (cm)"
                        placeholderTextColor="#666"
                        keyboardType="numeric"
                        value={height}
                        onChangeText={setHeight}
                    />
                </View>

                <View style={styles.card}>
                    <TextInput
                        style={styles.input}
                        placeholder="Weight (kg)"
                        placeholderTextColor="#666"
                        keyboardType="numeric"
                        value={weight}
                        onChangeText={setWeight}
                    />
                </View>

                {/* ---------- Calculate ---------- */}
                <Pressable
                    onPress={calculateBMI}
                    style={({ pressed }) => [
                        styles.primaryButton,
                        pressed && styles.buttonPressed,
                    ]}
                >
                    <Text style={styles.buttonText}>Calculate</Text>
                </Pressable>

                {/* ---------- Result ---------- */}
                {bmi !== null && (
                    <View style={styles.resultCard}>
                        <Text style={styles.bmiValue}>
                            {bmi.toFixed(1)}
                        </Text>
                        <Text style={styles.category}>
                            {category}
                        </Text>
                    </View>
                )}

            </View>
        </Screen>
    );
};

export default BMICalculator;
