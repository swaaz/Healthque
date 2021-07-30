import React from "react";
import { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import TableComponent from "../components/TableComponent";
import NameCard from "../components/NameCard";
import { useSelector } from "react-redux";

const MedicineHistoryPage = () => {
  const state = useSelector((state) => state.patient);
  const medData = state.medicalRecords.medication;
  console.log(medData);

  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <View style={styles.container}>
        <NameCard imageUrl={state.image} name={state.name} />
        <View style={styles.panel}>
          <Text style={styles.title}>Prescription History</Text>

          {medData.length ? (
            <View style={styles.card}>
              <TableComponent {...medData} />
            </View>
          ) : (
            <Text style={styles.altText}>No Prescription Data</Text>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default MedicineHistoryPage;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  panel: {
    width: "100%",
    height: "100%",
    flex: 1,
    backgroundColor: "#5BA2F4",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    // justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    color: "white",
    fontWeight: "700",
    marginTop: 20,
  },
  altText: {
    fontSize: 20,
    color: "white",
    fontWeight: "600",
    marginTop: "75%",
  },
  scrollView: {
    width: "100%",
    height: "100%",
  },
  body: {
    height: "100%",
    width: "100%",
  },
  card: {
    height: "100%",
    width: "75%",
  },
});
