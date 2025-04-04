import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>ClockWise</Text>
      <View style={styles.tabs}>
        <TouchableOpacity style={[styles.tab, styles.activeTab]}>
          <Text style={styles.tabText}>Schedule</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Note</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.monthText}>SEPTEMBER 2025</Text>
      <View style={styles.calendar}></View>

      <Text style={styles.sectionTitle}>Schedule</Text>
      <ScrollView style={styles.scheduleList}>
        <View style={styles.eventCard}>
          <Text style={styles.eventTitle}>Meeting with A.G. Team</Text>
          <Text style={styles.eventDetails}>Time: 07:00 am - 10:00 am</Text>
          <Text style={styles.eventDetails}>Place: Office</Text>
          <Text style={styles.eventNotes}>Notes: Nothing</Text>
        </View>
        <View style={styles.eventCard}>
          <Text style={styles.eventTitle}>Dinner with Family</Text>
          <Text style={styles.eventDetails}>Time: 08:00 pm</Text>
          <Text style={styles.eventDetails}>Place: Parent's House</Text>
          <Text style={styles.eventNotes}>
            Notes: Don't forget to bring Anna
          </Text>
          <TouchableOpacity style={styles.addButton}>
            <Ionicons name="add" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1528",
    padding: 20,
  },
  logo: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "bold",
  },
  tabs: {
    flexDirection: "row",
    marginVertical: 10,
  },
  tab: {
    flex: 1,
    padding: 10,
    backgroundColor: "#3A1E68",
    alignItems: "center",
    borderRadius: 8,
    marginHorizontal: 5,
  },
  activeTab: {
    backgroundColor: "#5B3AB6",
  },
  tabText: {
    color: "#fff",
    fontWeight: "bold",
  },
  monthText: {
    color: "#fff",
    textAlign: "center",
    marginVertical: 10,
    fontSize: 16,
  },
  calendar: {
    height: 200,
    backgroundColor: "#2A1F45",
    borderRadius: 10,
    marginBottom: 10,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 18,
    marginVertical: 10,
  },
  scheduleList: {
    flex: 1,
  },
  eventCard: {
    backgroundColor: "#3A1E68",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  eventTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  eventDetails: {
    color: "#ddd",
    fontSize: 14,
  },
  eventNotes: {
    color: "#bbb",
    fontSize: 13,
    marginTop: 5,
  },
  addButton: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "#5B3AB6",
    borderRadius: 50,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
