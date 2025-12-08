import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function SettingsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>App Information</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Version</Text>
          <Text style={styles.value}>1.0.0</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Status</Text>
          <Text style={styles.value}>Beta</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Features</Text>
        <View style={styles.row}>
          <Text style={styles.label}>NFL Predictions</Text>
          <Text style={styles.valueActive}>Active</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>NBA Predictions</Text>
          <Text style={styles.valueActive}>Active</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>AI Chat</Text>
          <Text style={styles.valueActive}>Active</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Real-time Data</Text>
          <Text style={styles.valuePending}>Coming Soon</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.aboutText}>
          Sports Logic AI uses advanced machine learning algorithms to predict 
          player performance in NFL and NBA games. Our predictions are based on 
          historical data, current form, matchups, and various other factors.
        </Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          © 2024 Sports Logic AI
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
  section: {
    backgroundColor: '#fff',
    margin: 15,
    padding: 20,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#007AFF',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
  value: {
    fontSize: 16,
    color: '#666',
  },
  valueActive: {
    fontSize: 16,
    color: '#34C759',
    fontWeight: '600',
  },
  valuePending: {
    fontSize: 16,
    color: '#FF9500',
    fontWeight: '600',
  },
  aboutText: {
    fontSize: 15,
    color: '#666',
    lineHeight: 22,
  },
  footer: {
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#999',
  },
});
