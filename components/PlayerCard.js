import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PlayerCard({ player, sport }) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View>
          <Text style={styles.playerName}>{player.name}</Text>
          <Text style={styles.teamName}>{player.team}</Text>
        </View>
        <View style={styles.positionBadge}>
          <Text style={styles.positionText}>{player.position}</Text>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.predictions}>
        <Text style={styles.predictionsTitle}>AI Predictions</Text>
        {Object.entries(player.predictions).map(([key, value]) => {
          if (key === 'confidence') return null;
          return (
            <View key={key} style={styles.predictionRow}>
              <Text style={styles.predictionLabel}>
                {key.replace(/([A-Z])/g, ' $1').trim()}:
              </Text>
              <Text style={styles.predictionValue}>{value}</Text>
            </View>
          );
        })}
      </View>

      <View style={styles.confidenceContainer}>
        <Text style={styles.confidenceLabel}>Confidence:</Text>
        <Text style={styles.confidenceValue}>
          {player.predictions.confidence}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    margin: 15,
    marginTop: 10,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  playerName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  teamName: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  positionBadge: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  positionText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 15,
  },
  predictions: {
    marginBottom: 15,
  },
  predictionsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#007AFF',
    marginBottom: 10,
  },
  predictionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
  },
  predictionLabel: {
    fontSize: 15,
    color: '#666',
    textTransform: 'capitalize',
  },
  predictionValue: {
    fontSize: 15,
    color: '#333',
    fontWeight: '600',
  },
  confidenceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: 12,
    borderRadius: 8,
    marginTop: 5,
  },
  confidenceLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#666',
  },
  confidenceValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#34C759',
  },
});
