import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      {/* HEADER */}
      <View style={styles.header}>
        <Image source={require("../assets/app_icon.png")} style={styles.appIcon} />
        <Text style={styles.title}>SportsLogic AI</Text>
        <Text style={styles.subtitle}>AI-Powered NFL & NBA Player Predictions</Text>
      </View>

      {/* NFL CARD */}
      <TouchableOpacity 
        style={styles.card}
        onPress={() => navigation.navigate("Nfl")}
      >
        <Image source={require("../assets/nfl_logo.png")} style={styles.logo} />
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
        <Image source={require("../assets/nba_logo.png")} style={styles.logo} />
        <View style={{ flex: 1 }}>
          <Text style={styles.cardTitle}>NBA Season</Text>
          <Text style={styles.cardText}>AI-powered NBA player performance insights</Text>
        </View>
      </TouchableOpacity>

      {/* AI ANALYSIS CARD */}
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("AskAi")}
      >
        <Image source={require("../assets/robot_icon.png")} style={styles.logo} />
        <View style={{ flex: 1 }}>
          <Text style={styles.cardTitle}>AI Analysis</Text>
          <Text style={styles.cardText}>Ask AI about matchups, stats & predictions</Text>
        </View>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f7f9fc",
  },
  header: {
    alignItems: "center",
    marginBottom: 25,
  },
  appIcon: {
    width: 70,
    height: 70,
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1d5cff",
  },
  subtitle: {
    fontSize: 15,
    color: "#555",
    marginTop: 4,
    textAlign: "center",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
    alignItems: "center",
    elevation: 4,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 15,
    borderRadius: 8,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },
  cardText: {
    color: "#666",
  },
});