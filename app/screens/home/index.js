import React from 'react';
import {
  ScrollView, View, Text, Pressable, Image
} from 'react-native';

import Screen from '../../screens';

import styles from './styles';

const tools = [
  { name: 'Calculator', screen: 'Calculator', icon: require('../../assets/icons/calculator.png') },
  { name: 'Unit Converter', screen: 'UnitConverter', icon: require('../../assets/icons/converter.png') },
  { name: 'Timer & Stopwatch', screen: 'Timer', icon: require('../../assets/icons/timer.png') },
  { name: 'BMI Calculator', screen: 'BMI', icon: require('../../assets/icons/bmi.png') },
  { name: 'Discount Calculator', screen: 'Discount', icon: require('../../assets/icons/discount.png') },
  { name: 'Currency Converter', screen: 'Currency', icon: require('../../assets/icons/currency.png') },
  { name: 'World Time', screen: 'Timezone', icon: require('../../assets/icons/timezone.png') },
  { name: 'Investment Simulator', screen: 'Investment', icon: require('../../assets/icons/investment.png') },
]
  ;

const Home = ({ navigation }) => {
  return (
    <Screen>

      <View style={styles.container}>
        <Text style={styles.title}>Pocket Tools</Text>
        <Text style={styles.subtitle}>Smart tools for everyday needs.</Text>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.grid}>
            {tools.map((tool) => (
              <Pressable
                key={tool.name}
                onPress={() => navigation.navigate(tool.screen)}
                style={({ pressed }) => [
                  styles.tile,
                  pressed && {
                    transform: [{ scale: 0.97 }],
                    backgroundColor: 'rgba(17, 24, 39, 0.7)',
                    borderColor: 'rgba(108, 92, 231, 0.4)'
                  },
                ]}
              >
                <Image source={tool.icon} style={styles.icon} />
                <Text style={styles.tileText}>{tool.name}</Text>
              </Pressable>
            ))}
          </View>
        </ScrollView>
      </View>

    </Screen>
  );
};

export default Home;
