import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
} from 'react-native';

import colors from '../../config/colors';

const tools = [
  { name: 'Calculator', screen: 'Calculator', icon: require('../../assets/icons/calculator.png') },
  { name: 'Unit Converter', screen: 'UnitConverter', icon: require('../../assets/icons/converter.png') },
  { name: 'Timer & Stopwatch', screen: 'Timer', icon: require('../../assets/icons/timer.png') },
];

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pocket Tools</Text>
      <Text style={styles.subtitle}>Essential tools. Offline.</Text>

      <View style={styles.grid}>
        {tools.map((tool) => (
          <Pressable
            key={tool.name}
            style={styles.tile}
            onPress={() => navigation.navigate(tool.screen)}
          >
            <Image source={tool.icon} style={styles.icon} />
            <Text style={styles.tileText}>{tool.name}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background || '#000',
    padding: 20,
  },
  title: {
    fontSize: 32,
    color: '#fff',
    fontWeight: '700',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#aaa',
    marginBottom: 30,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  tile: {
    width: '47%',
    backgroundColor: '#111',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    marginBottom: 15,
  },
  icon: {
    width: 48,
    height: 48,
    marginBottom: 10,
  },
  tileText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
  },
});
