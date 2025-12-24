import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  SafeAreaView,
} from 'react-native';

import NumberButtons from '../../components/numberButton';
import HistoryView from '../../components/historyView';
import colors from '../../config/colors';

const evaluateExpression = (expression) => {
  try {
    if (!expression) return null;

    const sanitized = expression
      .replace(/x/g, '*')
      .replace(/÷/g, '/');

    if (/[+\-*/.]$/.test(sanitized)) return null;

    const result = eval(sanitized);

    if (typeof result !== 'number' || !isFinite(result)) {
      return null;
    }

    return result;
  } catch {
    return null;
  }
};

const Calculator = () => {
  const [output, setOutput] = useState('');
  const [history, setHistory] = useState([]);

  const handleInput = (value) => {
    setOutput((prev) => prev + value);
  };

  const handleClear = () => {
    setOutput('');
  };

  const handleDelete = () => {
    setOutput((prev) => prev.slice(0, -1));
  };

  const handleEquals = () => {
    const result = evaluateExpression(output);

    if (result === null) {
      Alert.alert(
        'Invalid Expression',
        'Please enter a valid calculation.'
      );
      return;
    }

    setHistory((prev) => [
      ...prev,
      { expression: output, result },
    ]);

    setOutput(String(result));
  };

  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.outputText}>
          {output || '0'}
        </Text>
      </View>

      <HistoryView
        data={history}
        onClear={clearHistory}
      />

      <NumberButtons
        onPress={handleInput}
        onClear={handleClear}
        onDelete={handleDelete}
        onEqual={handleEquals}
      />
    </SafeAreaView>
  );
};

export default Calculator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background || '#000',
  },
  displayContainer: {
    padding: 20,
    alignItems: 'flex-end',
    justifyContent: 'center',
    minHeight: 120,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  outputText: {
    fontSize: 36,
    color: '#fff',
    fontWeight: '600',
  },
});
