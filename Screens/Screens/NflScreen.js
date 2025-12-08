import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import PlayerCard from '../components/PlayerCard';

// Sample data - you'll replace this with real API data later
const samplePlayers = [
  {
    name: "Patrick Mahomes",
    team: "Kansas City Chiefs",
    position: "QB",
    predictions: {
      passingYards: "315 yards",
      touchdowns: "3 TDs",
      confidence: "87%"
    }
  },
  {
    name: "Christian McCaffrey",
    team: "San Francisco 49ers",
    position: "RB",
    predictions: {
      rushingYards: "120 yards",
      touchdowns: "2 TDs",
      confidence: "82%"
    }
  },
  {
    name: "Tyreek Hill",
    team: "Miami Dolphins",
    position: "WR",
    predictions: {
      receivingYards: "95 yards",
      touchdowns: "1 TD",
      confidence: "79%"
    }
  }
];

export default function NFLScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>NFL Player Predictions</Text>
        <Text style={styles.subHeaderText}>AI-powered performance forecasts</Text>
      </View>

      {samplePlayers.map((player, index) => (
        <PlayerCard key={index} player={player} sport="NFL" />
      ))}

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          More predictions coming soon...
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
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subHeaderText: {
    fontSize: 14,
    color: '#666',
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
