import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  Ionicons,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

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
        <LinearGradient
          colors={["#ff6b6b", "#d9534f"]}
          style={styles.card}
        >
          <FontAwesome5
            name="football-ball"
            size={45}
            color="#ffffff"
            style={styles.icon}
          />
          <View style={{ flex: 1 }}>
            <Text style={styles.cardTitle}>NFL Season</Text>
            <Text style={styles.cardText}>
              AI-powered NFL player stats & projections
            </Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>

      {/* NBA CARD */}
      <TouchableOpacity onPress={() => navigation.navigate("Nba")}>
        <LinearGradient
          colors={["#f7b731", "#e67e22"]}
          style={styles.card}
        >
          <MaterialCommunityIcons
            name="basketball"
            size={48}
            color="#ffffff"
            style={styles.icon}
          />
          <View style={{ flex: 1 }}>
            <Text style={styles.cardTitle}>NBA Season</Text>
            <Text style={styles.cardText}>
              AI-powered NBA performance insights
            </Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>

      {/* AI ANALYSIS CARD */}
      <TouchableOpacity onPress={() => navigation.navigate("AskAi")}>
        <LinearGradient
          colors={["#4dabf7", "#1d5cff"]}
          style={styles.card}
        >
          <Ionicons
            name="chatbubble-ellipses"
            size={48}
            color="#ffffff"
            style={styles.icon}
          />
          <View style={{ flex: 1 }}>
            <Text style={styles.cardTitle}>AI Analysis</Text>
            <Text style={styles.cardText}>
              Ask AI about matchups & predictions
            </Text>
          </View>
        </LinearGradient>
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

    // Soft shadow
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
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