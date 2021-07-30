import React from "react";
import { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import NameCard from "../components/NameCard";
import SurgeryCard from "../components/SurgeryCard";

const SurgeryHistoryPage = () => {
  const surgeryList = useSelector((state) => state);
  console.log(surgeryList);

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={{ flex: 1 }}>
      <View style={styles.container}>
        <NameCard
          imageUrl="https://avatars.githubusercontent.com/u/42874695?v=4"
          name="Swasthik Shetty"
        />
        <View style={styles.panel}>
          <Text style={styles.title}>Surgery History</Text>
          {surgeryList.length ? (
            <View>
              {surgeryList.map((surgery) => {
                return <SurgeryCard key={surgery.key} {...surgery} />;
              })}
            </View>
          ) : (
            <View style={styles.altTextContainer}>
              <Text style={styles.altText}>No Previous surgery data</Text>
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default SurgeryHistoryPage;

const styles = StyleSheet.create({
  container: {
    // width: "100%",
    // height: "100%",
    flex: 1,
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
    flex: 1,
    flexDirection: "column",
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
  },
  altTextContainer: {
    flex: 1,
    justifyContent: "center",
  },
});
