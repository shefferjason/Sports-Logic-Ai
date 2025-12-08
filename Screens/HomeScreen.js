import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Sports Logic AI</Text>
        <Text style={styles.subtitle}>
          AI-Powered NFL & NBA Player Stats Predictions
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>🏈 NFL Season</Text>
        <Text style={styles.cardText}>
          Get AI-powered predictions for NFL player performance and game outcomes
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>🏀 NBA Season</Text>
        <Text style={styles.cardText}>
          Analyze NBA player stats and get game predictions powered by AI
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>🤖 AI Analysis</Text>
        <Text style={styles.cardText}>
          Ask our AI anything about player performance, matchups, and predictions
        </Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Tap a tab below to get started!
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#007AFF',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    margin: 15,
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 22,
  },
  footer: {
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#999',
  },
});
