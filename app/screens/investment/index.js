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
const calculateCompound = (p, r, t, n) =>
    p * Math.pow(1 + r / (n * 100), n * t);

/* ---------- Screen ---------- */
const InvestmentSimulator = () => {
    const [principal, setPrincipal] = useState('');
    const [rate, setRate] = useState('');
    const [years, setYears] = useState('');
    const [frequency, setFrequency] = useState('yearly');
    const [result, setResult] = useState(null);

    const calculate = () => {
        const p = parseFloat(principal);
        const r = parseFloat(rate);
        const t = parseFloat(years);

        if (isNaN(p) || isNaN(r) || isNaN(t) || p <= 0 || t <= 0) {
            setResult(null);
            return;
        }

        const n = frequency === 'monthly' ? 12 : 1;
        const value = calculateCompound(p, r, t, n);
        setResult(value);
    };

    return (
        <Screen>
            <View style={styles.container}>
                {/* Helper text */}
                <Text style={styles.helperText}>
                    Simulate long-term investment growth using compound interest.
                </Text>

                {/* Inputs */}
                <View style={styles.card}>
                    <TextInput
                        style={styles.input}
                        placeholder="Initial Investment"
                        placeholderTextColor="#666"
                        keyboardType="numeric"
                        value={principal}
                        onChangeText={setPrincipal}
                    />
                </View>

                <View style={styles.card}>
                    <TextInput
                        style={styles.input}
                        placeholder="Expected Annual Return (%)"
                        placeholderTextColor="#666"
                        keyboardType="numeric"
                        value={rate}
                        onChangeText={setRate}
                    />
                </View>

                <View style={styles.card}>
                    <TextInput
                        style={styles.input}
                        placeholder="Investment Duration (years)"
                        placeholderTextColor="#666"
                        keyboardType="numeric"
                        value={years}
                        onChangeText={setYears}
                    />
                </View>

                {/* Compounding tabs */}
                <Text style={styles.sectionTitle}>Compounding</Text>
                <View style={styles.segment}>
                    {['yearly', 'monthly'].map((type) => (
                        <Pressable
                            key={type}
                            onPress={() => setFrequency(type)}
                            style={({ pressed }) => [
                                styles.segmentButton,
                                frequency === type && styles.segmentActive,
                                pressed && styles.pressed,
                            ]}
                        >
                            <Text style={styles.segmentText}>
                                {type === 'yearly' ? 'Yearly' : 'Monthly'}
                            </Text>
                        </Pressable>
                    ))}
                </View>

                {/* Calculate */}
                <Pressable
                    onPress={calculate}
                    style={({ pressed }) => [
                        styles.calculateButton,
                        pressed && styles.calculatePressed,
                    ]}
                >
                    <Text style={styles.calculateText}>Calculate</Text>
                </Pressable>

                {/* Result */}
                {result !== null && (
                    <View style={styles.resultCard}>
                        <Text style={styles.resultLabel}>Estimated Value</Text>
                        <Text style={styles.resultValue}>
                            {result.toFixed(2)}
                        </Text>
                    </View>
                )}

                {/* Disclaimer */}
                <Text style={styles.disclaimer}>
                    This is a simulation for educational purposes only. No financial advice.
                </Text>
            </View>
        </Screen>
    );
};

export default InvestmentSimulator;
