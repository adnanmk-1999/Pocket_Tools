import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Pressable,
} from 'react-native';

import Screen from '../../screens';
import styles from './styles';

const DiscountCalculator = () => {
    const [price, setPrice] = useState('');
    const [discount, setDiscount] = useState('');
    const [finalPrice, setFinalPrice] = useState(null);
    const [savedAmount, setSavedAmount] = useState(null);

    const calculateDiscount = () => {
        const p = parseFloat(price);
        const d = parseFloat(discount);

        if (isNaN(p) || isNaN(d) || p <= 0 || d < 0) {
            setFinalPrice(null);
            setSavedAmount(null);
            return;
        }

        const discountValue = (p * d) / 100;
        const final = p - discountValue;

        setSavedAmount(discountValue);
        setFinalPrice(final);
    };

    return (
        <Screen>
            <View style={styles.container}>

                {/* ---------- Helper Text ---------- */}
                <Text style={styles.helperText}>
                    Enter price and discount to calculate savings.
                </Text>

                {/* ---------- Inputs ---------- */}
                <View style={styles.card}>
                    <TextInput
                        style={styles.input}
                        placeholder="Original Price"
                        placeholderTextColor="#666"
                        keyboardType="numeric"
                        value={price}
                        onChangeText={setPrice}
                    />
                </View>

                <View style={styles.card}>
                    <TextInput
                        style={styles.input}
                        placeholder="Discount (%)"
                        placeholderTextColor="#666"
                        keyboardType="numeric"
                        value={discount}
                        onChangeText={setDiscount}
                    />
                </View>

                {/* ---------- Calculate ---------- */}
                <Pressable
                    onPress={calculateDiscount}
                    style={({ pressed }) => [
                        styles.primaryButton,
                        pressed && styles.buttonPressed,
                    ]}
                >
                    <Text style={styles.buttonText}>Calculate</Text>
                </Pressable>

                {/* ---------- Result ---------- */}
                {finalPrice !== null && (
                    <View style={styles.resultCard}>
                        <Text style={styles.savedText}>
                            You save {savedAmount.toFixed(2)}
                        </Text>
                        <Text style={styles.finalPrice}>
                            {finalPrice.toFixed(2)}
                        </Text>
                    </View>
                )}

            </View>
        </Screen>
    );
};

export default DiscountCalculator;
