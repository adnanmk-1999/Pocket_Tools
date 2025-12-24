import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
} from 'react-native';

const buttons = [
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
    onPress(value);
  };

  return (
    <View style={styles.container}>
      {buttons.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((btn) => (
            <Pressable
              key={btn}
              style={styles.button}
              onPress={() => handlePress(btn)}
            >
              <Text style={styles.text}>{btn}</Text>
            </Pressable>
          ))}
        </View>
      ))}
    </View>
  );
};

export default NumberButtons;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    margin: 5,
    paddingVertical: 18,
    borderRadius: 10,
    backgroundColor: '#1c1c1c',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '500',
  },
});
