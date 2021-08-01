import React from "react";
import { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import NameCard from "../components/NameCard";
import HospitalizationCard from "../components/HospitalizationCard";
import { useSelector } from "react-redux";

const HospitalizationHistoryPage = () => {
  const state = useSelector((state) => state.patient);
  const hospitalList = state.medicalRecords.hospitalized;
  console.log(hospitalList);

  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <View style={styles.container}>
        <NameCard imageUrl={state.image} name={state.name} />
        <View style={styles.panel}>
          <Text style={styles.title}>Hospitalization History</Text>
          {hospitalList.length ? (
            <View style={styles.card}>
              {hospitalList.map((visit, key) => {
                return <HospitalizationCard key={key} {...visit} />;
              })}
            </View>
          ) : (
            <Text style={styles.altText}>No Previous Hospitalization data</Text>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default HospitalizationHistoryPage;

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
  card: {
    height: "100%",
    width: "75%",
  },
});
