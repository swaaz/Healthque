import React from "react";
import { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import NameCard from "../components/NameCard";
import SurgeryCard from "../components/SurgeryCard";

const SurgeryHistoryPage = () => {
  
  const state = useSelector((state) => state.patient) ;
  const surgeryList = state.medicalRecords.surgery ;
  console.log(surgeryList)

  

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <NameCard
            imageUrl={state.image}
            name={state.name}
        />
        <View style={styles.panel}>
          <Text style={styles.title}>Surgery History</Text>
          {surgeryList.length ? (
            <View>
              {surgeryList.map((surgery, key) => {
                return <SurgeryCard key={key} {...surgery} />;
              })}
            </View>
          ) : (
            <Text style={styles.altText}>No Previous surgery data</Text>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default SurgeryHistoryPage;

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
