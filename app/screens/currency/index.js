import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Pressable,
    ActivityIndicator,
    ScrollView,
} from 'react-native';

import Screen from '../../screens';
import styles from './styles';

/* ---------- Offline fallback (EUR base) ---------- */
const DEFAULT_RATES = {
    AUD: 1.7607,
    BGN: 1.9558,
    BRL: 6.5851,
    CAD: 1.6148,
    CHF: 0.9287,
    CNY: 8.2833,
    CZK: 24.321,
    DKK: 7.4702,
    GBP: 0.8729,
    HKD: 9.1674,
    HUF: 391.03,
    IDR: 19785,
    ILS: 3.7689,
    INR: 105.55,
    ISK: 148.0,
    JPY: 183.89,
    KRW: 1745.36,
    MXN: 21.149,
    MYR: 4.7898,
    NOK: 11.849,
    NZD: 2.0189,
    PHP: 69.33,
    PLN: 4.232,
    RON: 5.0894,
    SEK: 10.82,
    SGD: 1.5153,
    THB: 36.666,
    TRY: 50.479,
    USD: 1.1786,
    ZAR: 19.6054,
};

const CurrencyConverter = () => {
    const [rates, setRates] = useState(DEFAULT_RATES);
    const [base, setBase] = useState('EUR');
    const [target, setTarget] = useState('USD');
    const [amount, setAmount] = useState('');
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(true);
    const [offline, setOffline] = useState(false);

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const res = await fetch('https://api.frankfurter.app/latest');
                const data = await res.json();
                if (data?.rates) {
                    setRates(data.rates);
                    setOffline(false);
                }
            } catch {
                setOffline(true);
            } finally {
                setLoading(false);
            }
        };

        fetchRates();
    }, []);

    const convert = () => {
        const value = parseFloat(amount);
        if (isNaN(value)) {
            setResult(null);
            return;
        }

        const eurValue = base === 'EUR'
            ? value
            : value / rates[base];

        setResult(eurValue * rates[target]);
    };

    const currencies = ['EUR', ...Object.keys(rates)];

    return (
        <Screen>
            <ScrollView
                contentContainerStyle={styles.content}
                keyboardShouldPersistTaps="handled"
            >

                {/* ---------- Helper ---------- */}
                <Text style={styles.helperText}>
                    Convert currencies using daily ECB exchange rates.
                </Text>

                {offline && (
                    <Text style={styles.warning}>
                        Offline mode — rates may differ from real-time values.
                    </Text>
                )}

                {loading ? (
                    <ActivityIndicator size="large" color="#6C5CE7" />
                ) : (
                    <>
                        {/* ---------- Amount ---------- */}
                        <View style={styles.card}>
                            <TextInput
                                style={styles.input}
                                placeholder="Amount"
                                placeholderTextColor="#666"
                                keyboardType="numeric"
                                value={amount}
                                onChangeText={setAmount}
                            />
                        </View>

                        {/* ---------- Current Selection ---------- */}
                        <View style={styles.exchangeRow}>
                            <View style={styles.pill}>
                                <Text style={styles.pillText}>{base}</Text>
                            </View>

                            <Text style={styles.arrow}>→</Text>

                            <View style={styles.pill}>
                                <Text style={styles.pillText}>{target}</Text>
                            </View>
                        </View>

                        {/* ---------- Convert ---------- */}
                        <Pressable
                            onPress={convert}
                            style={({ pressed }) => [
                                styles.primaryButton,
                                pressed && styles.buttonPressed,
                            ]}
                        >
                            <Text style={styles.buttonText}>Convert</Text>
                        </Pressable>

                        {/* ---------- Result ---------- */}
                        {result !== null && (
                            <View style={styles.resultCard}>
                                <Text style={styles.resultValue}>
                                    {result.toFixed(2)}
                                </Text>
                                <Text style={styles.resultUnit}>
                                    {target}
                                </Text>
                            </View>
                        )}


                        {/* ---------- From ---------- */}
                        <Text style={styles.sectionTitle}>From</Text>
                        <View style={styles.wrap}>
                            {currencies.map((cur) => (
                                <Pressable
                                    key={cur}
                                    onPress={() => setBase(cur)}
                                    style={({ pressed }) => [
                                        styles.bubble,
                                        base === cur && styles.bubbleActive,
                                        pressed && styles.bubblePressed,
                                    ]}
                                >
                                    <Text style={styles.bubbleText}>{cur}</Text>
                                </Pressable>
                            ))}
                        </View>

                        {/* ---------- To ---------- */}
                        <Text style={styles.sectionTitle}>To</Text>
                        <View style={styles.wrap}>
                            {currencies.map((cur) => (
                                <Pressable
                                    key={cur}
                                    onPress={() => setTarget(cur)}
                                    style={({ pressed }) => [
                                        styles.bubble,
                                        target === cur && styles.bubbleActive,
                                        pressed && styles.bubblePressed,
                                    ]}
                                >
                                    <Text style={styles.bubbleText}>{cur}</Text>
                                </Pressable>
                            ))}
                        </View>


                    </>
                )}
            </ScrollView>
        </Screen>
    );
};

export default CurrencyConverter;
