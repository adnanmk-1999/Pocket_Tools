import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Pressable,
} from 'react-native';

const UNITS = {
    length: {
        m: { label: 'Meters', toBase: v => v, fromBase: v => v },
        km: { label: 'Kilometers', toBase: v => v * 1000, fromBase: v => v / 1000 },
        cm: { label: 'Centimeters', toBase: v => v / 100, fromBase: v => v * 100 },
    },
    temperature: {
        c: { label: 'Celsius', toBase: v => v, fromBase: v => v },
        f: {
            label: 'Fahrenheit',
            toBase: v => (v - 32) * (5 / 9),
            fromBase: v => v * (9 / 5) + 32,
        },
    },
};

const UnitConverter = () => {
    const [category, setCategory] = useState('length');
    const [fromUnit, setFromUnit] = useState('m');
    const [toUnit, setToUnit] = useState('km');
    const [input, setInput] = useState('');
    const [result, setResult] = useState(null);

    const convert = () => {
        const value = parseFloat(input);
        if (isNaN(value)) {
            setResult(null);
            return;
        }

        const baseValue = UNITS[category][fromUnit].toBase(value);
        const converted = UNITS[category][toUnit].fromBase(baseValue);

        setResult(converted);
    };

    const renderUnitButtons = (type, selected, onSelect) => {
        return Object.entries(UNITS[category]).map(([key, unit]) => (
            <Pressable
                key={key}
                style={[
                    styles.unitButton,
                    selected === key && styles.unitButtonActive,
                ]}
                onPress={() => onSelect(key)}
            >
                <Text style={styles.unitText}>{unit.label}</Text>
            </Pressable>
        ));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Unit Converter</Text>

            {/* Category Switch */}
            <View style={styles.row}>
                <Pressable
                    style={[
                        styles.categoryButton,
                        category === 'length' && styles.categoryActive,
                    ]}
                    onPress={() => {
                        setCategory('length');
                        setFromUnit('m');
                        setToUnit('km');
                        setResult(null);
                    }}
                >
                    <Text style={styles.categoryText}>Length</Text>
                </Pressable>

                <Pressable
                    style={[
                        styles.categoryButton,
                        category === 'temperature' && styles.categoryActive,
                    ]}
                    onPress={() => {
                        setCategory('temperature');
                        setFromUnit('c');
                        setToUnit('f');
                        setResult(null);
                    }}
                >
                    <Text style={styles.categoryText}>Temperature</Text>
                </Pressable>
            </View>

            {/* Input */}
            <TextInput
                style={styles.input}
                placeholder="Enter value"
                placeholderTextColor="#666"
                keyboardType="numeric"
                value={input}
                onChangeText={setInput}
            />

            {/* From Units */}
            <Text style={styles.sectionTitle}>From</Text>
            <View style={styles.wrap}>
                {renderUnitButtons(fromUnit, fromUnit, setFromUnit)}
            </View>

            {/* To Units */}
            <Text style={styles.sectionTitle}>To</Text>
            <View style={styles.wrap}>
                {renderUnitButtons(toUnit, toUnit, setToUnit)}
            </View>

            {/* Convert */}
            <Pressable style={styles.convertButton} onPress={convert}>
                <Text style={styles.convertText}>Convert</Text>
            </Pressable>

            {/* Result */}
            {result !== null && (
                <Text style={styles.result}>
                    Result: {result.toFixed(4)}
                </Text>
            )}
        </View>
    );
};

export default UnitConverter;

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
        marginBottom: 20,
    },
    row: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    categoryButton: {
        flex: 1,
        padding: 12,
        borderRadius: 8,
        backgroundColor: '#111',
        marginRight: 10,
        alignItems: 'center',
    },
    categoryActive: {
        backgroundColor: '#333',
    },
    categoryText: {
        color: '#fff',
        fontWeight: '500',
    },
    input: {
        backgroundColor: '#111',
        borderRadius: 8,
        padding: 14,
        color: '#fff',
        fontSize: 16,
        marginBottom: 20,
    },
    sectionTitle: {
        color: '#aaa',
        marginBottom: 8,
    },
    wrap: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 20,
    },
    unitButton: {
        backgroundColor: '#111',
        padding: 10,
        borderRadius: 6,
        marginRight: 8,
        marginBottom: 8,
    },
    unitButtonActive: {
        backgroundColor: '#444',
    },
    unitText: {
        color: '#fff',
        fontSize: 14,
    },
    convertButton: {
        backgroundColor: '#1e90ff',
        padding: 14,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
    },
    convertText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    result: {
        color: '#fff',
        fontSize: 18,
        marginTop: 20,
        fontWeight: '500',
    },
});
