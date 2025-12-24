import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Pressable,
    ActivityIndicator,
    ScrollView,
} from 'react-native';

/* ---------- Default fallback rates (offline) ---------- */
/* Base: EUR — Daily reference values (may differ from real-time) */

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

    /* ---------- Fetch daily rates ---------- */
    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await fetch('https://api.frankfurter.app/latest');
                const data = await response.json();

                if (data && data.rates) {
                    setRates(data.rates);
                    setOffline(false);
                }
            } catch (error) {
                setOffline(true);
            } finally {
                setLoading(false);
            }
        };

        fetchRates();
    }, []);

    /* ---------- Conversion logic ---------- */
    const convert = () => {
        const value = parseFloat(amount);
        if (isNaN(value)) {
            setResult(null);
            return;
        }

        if (base === 'EUR') {
            setResult(value * rates[target]);
        } else {
            const valueInEur = value / rates[base];
            setResult(valueInEur * rates[target]);
        }
    };

    const currencies = ['EUR', ...Object.keys(rates)];

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.content}
            keyboardShouldPersistTaps="handled"
        >
            <Text style={styles.title}>Currency Converter</Text>

            <Text style={styles.info}>
                Uses European Central Bank daily exchange rates.
            </Text>

            {offline && (
                <Text style={styles.warning}>
                    Not connected to internet. Rates may differ from real-time values.
                </Text>
            )}

            {loading ? (
                <ActivityIndicator size="large" color="#1e90ff" />
            ) : (
                <>
                    <TextInput
                        style={styles.input}
                        placeholder="Amount"
                        placeholderTextColor="#666"
                        keyboardType="numeric"
                        value={amount}
                        onChangeText={setAmount}
                    />

                    <View style={styles.row}>
                        <View style={styles.select}>
                            <Text style={styles.selectText}>{base}</Text>
                        </View>

                        <View style={styles.select}>
                            <Text style={styles.selectText}>to {target}</Text>
                        </View>
                    </View>

                    <Text style={styles.sectionTitle}>From</Text>
                    <View style={styles.row}>
                        {currencies.map((cur) => (
                            <Pressable
                                key={cur}
                                style={[
                                    styles.currencyButton,
                                    base === cur && styles.active,
                                ]}
                                onPress={() => setBase(cur)}
                            >
                                <Text style={styles.currencyText}>{cur}</Text>
                            </Pressable>
                        ))}
                    </View>

                    <Text style={styles.sectionTitle}>To</Text>
                    <View style={styles.row}>
                        {currencies.map((cur) => (
                            <Pressable
                                key={cur}
                                style={[
                                    styles.currencyButton,
                                    target === cur && styles.active,
                                ]}
                                onPress={() => setTarget(cur)}
                            >
                                <Text style={styles.currencyText}>{cur}</Text>
                            </Pressable>
                        ))}
                    </View>

                    <Pressable style={styles.button} onPress={convert}>
                        <Text style={styles.buttonText}>Convert</Text>
                    </Pressable>

                    {result !== null && (
                        <Text style={styles.result}>
                            Result: {result.toFixed(2)} {target}
                        </Text>
                    )}
                </>
            )}
        </ScrollView>
    );
};

export default CurrencyConverter;

/* ---------- Styles ---------- */

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    content: {
        padding: 20,
        paddingBottom: 40,
    },
    title: {
        color: '#fff',
        fontSize: 26,
        fontWeight: '700',
        marginBottom: 10,
        textAlign: 'center',
    },
    info: {
        color: '#aaa',
        fontSize: 13,
        textAlign: 'center',
        marginBottom: 10,
    },
    warning: {
        color: '#ffcc00',
        fontSize: 13,
        textAlign: 'center',
        marginBottom: 10,
    },
    sectionTitle: {
        color: '#aaa',
        marginBottom: 6,
        marginTop: 10,
    },
    input: {
        backgroundColor: '#111',
        borderRadius: 8,
        padding: 14,
        color: '#fff',
        fontSize: 16,
        marginBottom: 15,
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 10,
    },
    select: {
        flex: 1,
        backgroundColor: '#111',
        padding: 12,
        borderRadius: 6,
        marginRight: 8,
        alignItems: 'center',
    },
    selectText: {
        color: '#fff',
        fontWeight: '500',
    },
    currencyButton: {
        backgroundColor: '#111',
        padding: 10,
        borderRadius: 6,
        marginRight: 8,
        marginBottom: 8,
    },
    active: {
        backgroundColor: '#333',
    },
    currencyText: {
        color: '#fff',
        fontSize: 14,
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
        color: '#fff',
        fontSize: 18,
        marginTop: 20,
        fontWeight: '500',
        textAlign: 'center',
    },
});
