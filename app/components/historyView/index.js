import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
} from 'react-native';

const HistoryView = ({ data = [], onClear }) => {
  if (!data.length) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>
          No history
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>History</Text>
        <Pressable onPress={onClear}>
          <Text style={styles.clearText}>Clear</Text>
        </Pressable>
      </View>

      <ScrollView>
        {data.map((item, index) => (
          <View
            key={`${item.expression}-${index}`}
            style={styles.row}
          >
            <Text style={styles.expression}>
              {item.expression}
            </Text>
            <Text style={styles.result}>
              = {item.result}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default HistoryView;

const styles = StyleSheet.create({
  container: {
    maxHeight: 160,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
  },
  title: {
    color: '#aaa',
    fontSize: 14,
  },
  clearText: {
    color: '#ff6666',
    fontSize: 14,
  },
  row: {
    paddingVertical: 4,
  },
  expression: {
    color: '#ccc',
    fontSize: 14,
  },
  result: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  emptyContainer: {
    padding: 10,
    alignItems: 'center',
  },
  emptyText: {
    color: '#666',
    fontSize: 14,
  },
});
