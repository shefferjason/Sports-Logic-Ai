import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>Sports Logic AI</Text>
        <Text style={styles.subtitle}>
          AI-Powered NFL & NBA Player Stats Predictions
        </Text>
      </View>

      {/* NFL CARD */}
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("Nfl")}
      >
        <Ionicons name="american-football" size={32} color="#d35400" />
        <View style={styles.cardText}>
          <Text style={styles.cardTitle}>NFL Season</Text>
          <Text style={styles.cardDescription}>
            AI predictions for player performance and game outcomes
          </Text>
        </View>
      </TouchableOpacity>

      {/* NBA CARD */}
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("Nba")}
      >
        <Ionicons name="basketball" size={32} color="#e67e22" />
        <View style={styles.cardText}>
          <Text style={styles.cardTitle}>NBA Season</Text>
          <Text style={styles.cardDescription}>
            Analyze player stats and get AI-powered game predictions
          </Text>
        </View>
      </TouchableOpacity>

      {/* AI ANALYSIS */}
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("AskAI")}
      >
        <Ionicons name="robot-outline" size={32} color="#3498db" />
        <View style={styles.cardText}>
          <Text style={styles.cardTitle}>AI Analysis</Text>
          <Text style={styles.cardDescription}>
            Ask AI anything about performance, matchups, and predictions
          </Text>
        </View>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f5f9",
    paddingHorizontal: 20,
  },

  header: {
    paddingTop: 60,
    paddingBottom: 30,
    alignItems: "center",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1f3c88",
  },

  subtitle: {
    marginTop: 8,
    fontSize: 16,
    color: "#4a4a4a",
    textAlign: "center",
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 16,
    marginBottom: 18,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },

  cardText: {
    marginLeft: 16,
    flex: 1,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#1f3c88",
  },

  cardDescription: {
    fontSize: 14,
    color: "#555",
  },
});