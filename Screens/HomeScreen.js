import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons, FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <MaterialCommunityIcons name="robot" size={70} color="#4c6ef5" />
        <Text style={styles.title}>SportsLogic AI</Text>
        <Text style={styles.subtitle}>
          AI-Powered NFL & NBA Player Predictions
        </Text>
      </View>

      {/* NFL CARD */}
      <TouchableOpacity onPress={() => navigation.navigate("Nfl")}>
        <View style={[styles.card, styles.cardNfl]}>
          <FontAwesome5
            name="football-ball"
            size={45}
            color="#fff"
            style={styles.icon}
          />
          <View style={{ flex: 1 }}>
            <Text style={styles.cardTitle}>NFL Season</Text>
            <Text style={styles.cardText}>
              AI-powered NFL player stats & projections
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      {/* NBA CARD */}
      <TouchableOpacity onPress={() => navigation.navigate("Nba")}>
        <View style={[styles.card, styles.cardNba]}>
          <MaterialCommunityIcons
            name="basketball"
            size={48}
            color="#fff"
            style={styles.icon}
          />
          <View style={{ flex: 1 }}>
            <Text style={styles.cardTitle}>NBA Season</Text>
            <Text style={styles.cardText}>
              AI-powered NBA performance insights
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      {/* AI ANALYSIS CARD */}
      <TouchableOpacity onPress={() => navigation.navigate("AskAi")}>
        <View style={[styles.card, styles.cardAi]}>
          <Ionicons
            name="chatbubble-ellipses"
            size={48}
            color="#fff"
            style={styles.icon}
          />
          <View style={{ flex: 1 }}>
            <Text style={styles.cardTitle}>AI Analysis</Text>
            <Text style={styles.cardText}>
              Ask AI about matchups & predictions
            </Text>
          </View>
        </View>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f1f3f5",
  },

  header: {
    alignItems: "center",
    marginBottom: 30,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1d5cff",
    marginTop: 10,
  },

  subtitle: {
    fontSize: 15,
    color: "#555",
    marginTop: 5,
    textAlign: "center",
    paddingHorizontal: 20,
  },

  card: {
    flexDirection: "row",
    padding: 20,
    borderRadius: 18,
    marginBottom: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },

  // solid color variants (no external gradient lib needed)
  cardNfl: {
    backgroundColor: "#d9534f", // reddish
  },
  cardNba: {
    backgroundColor: "#e67e22", // orange
  },
  cardAi: {
    backgroundColor: "#1d5cff", // blue
  },

  icon: {
    marginRight: 20,
  },

  cardTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 6,
  },

  cardText: {
    color: "#f1f1f1",
    fontSize: 14,
  },
});