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
  const state = useSelector(state => state.patient);
  const medData = state.medicalRecords.medication;
  console.log(medData)

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <NameCard
          imageUrl={state.image}
          name={state.name}
      />
        <View style={styles.panel}>
          <Text style={styles.title}>Prescription History</Text>
          {medData.length ? (
            <View>
              {medData.map((data,key) => {
                // This will render a row for each data element.
                return <TableComponent key={key} {...data} />;
              })}
            </View>
          ) : (
            <Text style={styles.altText}>No Prescription Data</Text>
          )}
        </View>
      </ScrollView>
    </View>
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
});
