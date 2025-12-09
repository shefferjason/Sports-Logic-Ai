import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  return (
    <LinearGradient
      colors={["#1e3c72", "#2a5298", "#ffffff"]}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Header */}
        <View style={styles.header}>
          <Ionicons name="planet-outline" size={80} color="#fff" />
          <Text style={styles.title}>SportsLogic AI</Text>
        </View>

        {/* Buttons */}
        <View style={styles.cardContainer}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("Nba")}
          >
            <Ionicons name="basketball-outline" size={50} color="#1e3c72" />
            <Text style={styles.cardText}>NBA</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("Nfl")}
          >
            <Ionicons name="american-football-outline" size={50} color="#1e3c72" />
            <Text style={styles.cardText}>NFL</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("AskAI")}
          >
            <Ionicons name="chatbubble-ellipses-outline" size={50} color="#1e3c72" />
            <Text style={styles.cardText}>Ask AI</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    padding: 20,
    alignItems: "center",
  },
  header: {
    marginTop: 60,
    marginBottom: 40,
    alignItems: "center",
  },
  title: {
    marginTop: 10,
    fontSize: 32,
    fontWeight: "bold",
    color: "#ffffff",
    textShadowColor: "rgba(0,0,0,0.3)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  cardContainer: {
    width: "100%",
    gap: 25,
  },
  card: {
    backgroundColor: "white",
    paddingVertical: 25,
    borderRadius: 20,
    alignItems: "center",
    elevation: 4,
  },
  cardText: {
    marginTop: 10,
    fontSize: 22,
    fontWeight: "bold",
    color: "#1e3c72",
  },
});