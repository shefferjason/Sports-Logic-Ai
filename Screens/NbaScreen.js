import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import PlayerCard from '../components/PlayerCard';

// Sample data - you'll replace this with real API data later
const samplePlayers = [
  {
    name: "LeBron James",
    team: "Los Angeles Lakers",
    position: "SF",
    predictions: {
      points: "26 points",
      rebounds: "8 rebounds",
      assists: "7 assists",
      confidence: "85%"
    }
  },
  {
    name: "Stephen Curry",
    team: "Golden State Warriors",
    position: "PG",
    predictions: {
      points: "29 points",
      threePointers: "5 three-pointers",
      assists: "6 assists",
      confidence: "88%"
    }
  },
  {
    name: "Giannis Antetokounmpo",
    team: "Milwaukee Bucks",
    position: "PF",
    predictions: {
      points: "32 points",
      rebounds: "12 rebounds",
      blocks: "2 blocks",
      confidence: "90%"
    }
  }
];

export default function NBAScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>NBA Player Predictions</Text>
        <Text style={styles.subHeaderText}>AI-powered performance forecasts</Text>
      </View>

      {samplePlayers.map((player, index) => (
        <PlayerCard key={index} player={player} sport="NBA" />
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
