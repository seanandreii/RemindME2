import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const NotesScreen = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: "this morning’s meeting, we have to improve the quality of office facilities and another...",
      date: "28/10/2012",
      pinned: true,
    },
    {
      id: 2,
      text: "need for this month:\n-clothes\n-snack...",
      date: "16/08/2013",
      pinned: false,
    },
    {
      id: 3,
      text: "Message from Jose:\nDon’t forget to complete assignments on Tuesday",
      date: "15/08/2017",
      pinned: false,
    },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>ClockWise</Text>
      <View style={styles.tabs}>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Schedule</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tab, styles.activeTab]}>
          <Text style={styles.tabText}>Note</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.searchBar}
        placeholder="Search Note"
        placeholderTextColor="#ccc"
      />

      <ScrollView style={styles.notesList}>
        {notes.map((note) => (
          <View key={note.id} style={styles.noteCard}>
            <Text style={styles.noteText}>{note.text}</Text>
            <Text style={styles.noteDate}>{note.date}</Text>
            {note.pinned && (
              <Ionicons
                name="star"
                size={16}
                color="white"
                style={styles.pinIcon}
              />
            )}
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.addButton}>
        <Ionicons name="add" size={24} color="#fff" />
      </TouchableOpacity>
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
  searchBar: {
    backgroundColor: "#5B3AB6",
    padding: 10,
    borderRadius: 8,
    color: "#fff",
    marginBottom: 10,
  },
  notesList: {
    flex: 1,
  },
  noteCard: {
    backgroundColor: "#6B42E0",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    position: "relative",
  },
  noteText: {
    color: "#fff",
    fontSize: 14,
  },
  noteDate: {
    color: "#ddd",
    fontSize: 12,
    marginTop: 5,
  },
  pinIcon: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  addButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#5B3AB6",
    borderRadius: 50,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default NotesScreen;
