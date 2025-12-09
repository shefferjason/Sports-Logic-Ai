import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Ionicons, FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <MaterialCommunityIcons name="robot" size={70} color="#1d5cff" />
        <Text style={styles.title}>SportsLogic AI</Text>
        <Text style={styles.subtitle}>AI-Powered NFL & NBA Player Predictions</Text>
      </View>

      {/* NFL CARD */}
      <TouchableOpacity 
        style={styles.card}
        onPress={() => navigation.navigate("Nfl")}
      >
        <FontAwesome5 name="football-ball" size={45} color="#d9534f" style={styles.icon} />
        <View style={{ flex: 1 }}>
          <Text style={styles.cardTitle}>NFL Season</Text>
          <Text style={styles.cardText}>AI-powered NFL player stats & projections</Text>
        </View>
      </TouchableOpacity>

      {/* NBA CARD */}
      <TouchableOpacity 
        style={styles.card}
        onPress={() => navigation.navigate("Nba")}
      >
        <MaterialCommunityIcons name="basketball" size={48} color="#f0ad4e" style={styles.icon} />
        <View style={{ flex: 1 }}>
          <Text style={styles.cardTitle}>NBA Season</Text>
          <Text style={styles.cardText}>AI-powered NBA performance insights</Text>
        </View>
      </TouchableOpacity>

      {/* AI ANALYSIS CARD */}
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("AskAi")}
      >
        <Ionicons name="chatbubble-ellipses" size={48} color="#5bc0de" style={styles.icon} />
        <View style={{ flex: 1 }}>
          <Text style={styles.cardTitle}>AI Analysis</Text>
          <Text style={styles.cardText}>Ask AI about matchups & predictions</Text>
        </View>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f2f4f8",
  },
  header: {
    alignItems: "center",
    marginBottom: 25,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1d5cff",
    marginTop: 10,
  },
  subtitle: {
    fontSize: 15,
    color: "#555",
    marginTop: 4,
    textAlign: "center",
    paddingHorizontal: 15,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 18,
    marginBottom: 20,
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },