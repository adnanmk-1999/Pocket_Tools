import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';

const BUTTONS = [
  ['C', 'DEL', '÷'],
  ['7', '8', '9', 'x'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '='],
];

const NumberButtons = ({
  onPress,
  onClear,
  onDelete,
  onEqual,
}) => {
  const handlePress = (value) => {
    if (value === 'C') return onClear();
    if (value === 'DEL') return onDelete();
    if (value === '=') return onEqual();
    return onPress(value);
  };

  const getButtonStyle = (label) => {
    if (label === '=') return styles.equalButton;
    if (label === 'DEL') return styles.deleteButton;
    return styles.defaultButton;
  };

  const getTextStyle = (label) => {
    if (label === '=') return styles.equalText;
    if (label === 'DEL') return styles.deleteText;
    return styles.text;
  };

  return (
    <View>
      {BUTTONS.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((label) => (
            <Pressable
              key={label}
              onPress={() => handlePress(label)}
              style={({ pressed }) => [
                styles.baseButton,
                getButtonStyle(label),
                pressed && styles.pressed,
              ]}
            >
              <Text style={getTextStyle(label)}>
                {label}
              </Text>
            </Pressable>
          ))}
        </View>
      ))}
    </View>
  );
};

export default NumberButtons;
