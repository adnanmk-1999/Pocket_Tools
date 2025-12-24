import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Pressable,
} from 'react-native';

/* ---------- Helpers ---------- */

const calculateInvestment = (
    principal,
    rate,
    years,
    compoundsPerYear
) => {
    const r = rate / 100;
    const n = compoundsPerYear;
    const t = years;

    const finalValue = principal * Math.pow(1 + r / n, n * t);
    const gain = finalValue - principal;
    const cagr = Math.pow(finalValue / principal, 1 / t) - 1;

    return {
        finalValue,
        gain,
        cagr,
    };
};

/* ---------- Screen ---------- */

const InvestmentReturnSimulator = () => {
    const [principal, setPrincipal] = useState('');
    const [rate, setRate] = useState('');
    const [years, setYears] = useState('');
    const [frequency, setFrequency] = useState('yearly');
    const [result, setResult] = useState(null);

    const calculate = () => {
        const p = parseFloat(principal);
        const r = parseFloat(rate);
        const y = parseFloat(years);

        if (!p || !r || !y || p <= 0 || y <= 0) {
            setResult(null);
            return;
        }

        const compounds = frequency === 'monthly' ? 12 : 1;

        const res = calculateInvestment(p, r, y, compounds);
        setResult(res);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Investment Return Simulator</Text>

            <Text style={styles.info}>
                Simulate long-term investment growth using compound interest.
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Initial Investment"
                placeholderTextColor="#666"
                keyboardType="numeric"
                value={principal}
                onChangeText={setPrincipal}
            />

            <TextInput
                style={styles.input}
                placeholder="Expected Annual Return (%)"
                placeholderTextColor="#666"
                keyboardType="numeric"
                value={rate}
                onChangeText={setRate}
            />

            <TextInput
                style={styles.input}
                placeholder="Investment Duration (years)"
                placeholderTextColor="#666"
                keyboardType="numeric"
                value={years}
                onChangeText={setYears}
            />

            <Text style={styles.section}>Compounding</Text>
            <View style={styles.row}>
                <Pressable
                    style={[
                        styles.option,
                        frequency === 'yearly' && styles.active,
                    ]}
                    onPress={() => setFrequency('yearly')}
                >
                    <Text style={styles.optionText}>Yearly</Text>
                </Pressable>

                <Pressable
                    style={[
                        styles.option,
                        frequency === 'monthly' && styles.active,
                    ]}
                    onPress={() => setFrequency('monthly')}
                >
                    <Text style={styles.optionText}>Monthly</Text>
                </Pressable>
            </View>

            <Pressable style={styles.button} onPress={calculate}>
                <Text style={styles.buttonText}>Calculate</Text>
            </Pressable>

            {result && (
                <View style={styles.result}>
                    <Text style={styles.resultText}>
                        Final Value: {result.finalValue.toFixed(2)}
                    </Text>
                    <Text style={styles.resultSub}>
                        Total Gain: {result.gain.toFixed(2)}
                    </Text>
                    <Text style={styles.resultSub}>
                        CAGR: {(result.cagr * 100).toFixed(2)}%
                    </Text>
                </View>
            )}

            <Text style={styles.disclaimer}>
                This is a simulation for educational purposes only. No financial advice.
            </Text>
        </View>
    );
};

export default InvestmentReturnSimulator;

/* ---------- Styles ---------- */

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
        textAlign: 'center',
        marginBottom: 10,
    },
    info: {
        color: '#aaa',
        fontSize: 13,
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        backgroundColor: '#111',
        borderRadius: 8,
        padding: 14,
        color: '#fff',
        fontSize: 16,
        marginBottom: 15,
    },
    section: {
        color: '#aaa',
        marginBottom: 6,
    },
    row: {
        flexDirection: 'row',
        marginBottom: 15,
    },
    option: {
        flex: 1,
        backgroundColor: '#111',
        padding: 12,
        borderRadius: 6,
        alignItems: 'center',
        marginRight: 8,
    },
    active: {
        backgroundColor: '#333',
    },
    optionText: {
        color: '#fff',
        fontWeight: '500',
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
        marginTop: 25,
        alignItems: 'center',
    },
    resultText: {
        color: '#fff',
        fontSize: 22,
        fontWeight: '600',
        marginBottom: 6,
    },
    resultSub: {
        color: '#aaa',
        fontSize: 15,
        marginBottom: 2,
    },
    disclaimer: {
        color: '#555',
        fontSize: 11,
        textAlign: 'center',
        marginTop: 25,
    },
});
