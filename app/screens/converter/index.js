import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Pressable,
} from 'react-native';

import Screen from '../../screens';
import styles from './styles';

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

    const renderUnitButtons = (selected, onSelect) =>
        Object.entries(UNITS[category]).map(([key, unit]) => (
            <Pressable
                key={key}
                onPress={() => onSelect(key)}
                style={({ pressed }) => [
                    styles.unitButton,
                    selected === key && styles.unitButtonActive,
                    pressed && styles.pressed,
                ]}
            >
                <Text style={styles.unitText}>{unit.label}</Text>
            </Pressable>
        ));

    return (
        <Screen>
            <View style={styles.container}>
                {/* ---------- Helper Text ---------- */}
                <Text style={styles.helperText}>
                    Select units and enter a value to convert.
                </Text>

                {/* ---------- Category ---------- */}
                <View style={styles.segment}>
                    {['length', 'temperature'].map((type) => (
                        <Pressable
                            key={type}
                            onPress={() => {
                                setCategory(type);
                                setFromUnit(type === 'length' ? 'm' : 'c');
                                setToUnit(type === 'length' ? 'km' : 'f');
                                setResult(null);
                            }}
                            style={({ pressed }) => [
                                styles.segmentButton,
                                category === type && styles.segmentActive,
                                pressed && styles.pressed,
                            ]}
                        >
                            <Text style={styles.segmentText}>
                                {type === 'length' ? 'Length' : 'Temperature'}
                            </Text>
                        </Pressable>
                    ))}
                </View>

                {/* ---------- Input ---------- */}
                <View style={styles.card}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter value"
                        placeholderTextColor="#666"
                        keyboardType="numeric"
                        value={input}
                        onChangeText={setInput}
                    />
                </View>

                {/* ---------- From ---------- */}
                <Text style={styles.sectionTitle}>From</Text>
                <View style={styles.wrap}>
                    {renderUnitButtons(fromUnit, setFromUnit)}
                </View>

                {/* ---------- To ---------- */}
                <Text style={styles.sectionTitle}>To</Text>
                <View style={styles.wrap}>
                    {renderUnitButtons(toUnit, setToUnit)}
                </View>

                {/* ---------- Convert ---------- */}
                <Pressable
                    onPress={convert}
                    style={({ pressed }) => [
                        styles.convertButton,
                        pressed && styles.convertPressed,
                    ]}
                >
                    <Text style={styles.convertText}>Convert</Text>
                </Pressable>

                {/* ---------- Result ---------- */}
                {result !== null && (
                    <View style={styles.resultCard}>
                        <Text style={styles.resultText}>
                            {result.toFixed(4)}
                        </Text>
                    </View>
                )}
            </View>
        </Screen>
    );
};

export default UnitConverter;
