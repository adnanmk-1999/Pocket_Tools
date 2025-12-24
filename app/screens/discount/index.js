import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Pressable,
} from 'react-native';

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
        <View style={styles.container}>
            <Text style={styles.title}>Discount Calculator</Text>

            <TextInput
                style={styles.input}
                placeholder="Original Price"
                placeholderTextColor="#666"
                keyboardType="numeric"
                value={price}
                onChangeText={setPrice}
            />

            <TextInput
                style={styles.input}
                placeholder="Discount (%)"
                placeholderTextColor="#666"
                keyboardType="numeric"
                value={discount}
                onChangeText={setDiscount}
            />

            <Pressable style={styles.button} onPress={calculateDiscount}>
                <Text style={styles.buttonText}>Calculate</Text>
            </Pressable>

            {finalPrice !== null && (
                <View style={styles.result}>
                    <Text style={styles.resultText}>
                        You save: {savedAmount.toFixed(2)}
                    </Text>
                    <Text style={styles.finalPrice}>
                        Final Price: {finalPrice.toFixed(2)}
                    </Text>
                </View>
            )}
        </View>
    );
};

export default DiscountCalculator;

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
    resultText: {
        color: '#aaa',
        fontSize: 16,
        marginBottom: 6,
    },
    finalPrice: {
        color: '#fff',
        fontSize: 22,
        fontWeight: '600',
    },
});
