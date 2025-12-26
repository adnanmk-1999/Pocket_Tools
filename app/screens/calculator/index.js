import React, { useState } from 'react';
import {
  View,
  Text,
  Alert,
} from 'react-native';

import Screen from '../../screens';
import NumberButtons from '../../components/numberButton';
import HistoryView from '../../components/historyView';

import styles from './styles';

/* ---------- Expression Evaluation ---------- */
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
    <Screen>
      <View style={styles.container}>
        {/* ---------- Display ---------- */}
        <View style={styles.displayContainer}>
          <Text style={styles.outputText}>
            {output || '0'}
          </Text>
        </View>

        {/* ---------- History + Keypad Stack ---------- */}
        <View style={styles.bottomStack}>
          <View style={styles.historyContainer}>
            <HistoryView
              data={history}
              onClear={clearHistory}
            />
          </View>

          <View style={styles.keypadContainer}>
            <NumberButtons
              onPress={handleInput}
              onClear={handleClear}
              onDelete={handleDelete}
              onEqual={handleEquals}
            />
          </View>
        </View>
      </View>
    </Screen>
  );
};

export default Calculator;
