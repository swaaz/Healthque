import React from "react";
import { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import NameCard from "../components/NameCard";
import MedicineCard from "../components/MedicineCard";

const MedicineHistoryDetails = (props) => {
  const [medicineDetails, setMedicineDetails] = useState([]);

  /**
   * Gets the history list of surgery data
   */
  const getMedicineDetails = async () => {
    const response = [
      {
        name: "Metformin",
        date: "05/01/2005",
        reason: "Diabetes type 2",
        dosageForm: "Tablet",
        strength: "500mg",
        instruction: "Twice a day ,after meals, morning and evening",
      },
      {
        name: "Aspirin",
        date: "05/01/2005",
        reason: "Headache",
        dosageForm: "Tablet",
        strength: "500mg",
        instruction: "Once a day ,after meals, morning",
      },
      {
        name: "Aspirin",
        date: "05/01/2005",
        reason: "Headache",
        dosageForm: "Tablet",
        strength: "500mg",
        instruction: "Once a day ,after meals, morning",
      },
      // {
      //   name: "Aspirin",
      //   date: "05/01/2005",
      //   reason: "Headache",
      //   dosageForm: "Tablet",
      //   strength: "500mg",
      //   instruction: "Once a day ,after meals, morning"
      // },
    ];

    setMedicineDetails(response);
    // setvaccineList([]);
  };

  useState(() => {
    getMedicineDetails();
  });

  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <View style={styles.container}>
        <NameCard
          imageUrl="https://avatars.githubusercontent.com/u/44167922?v=4"
          name="Suhan Acharya"
        />
        <View style={styles.panel}>
          <Text style={styles.title}>Medicine Details</Text>
          <View style={styles.medicine}>
            {medicineDetails.length ? (
              <View style={styles.item}>
                {medicineDetails.map((medicine, index) => {
                  return <MedicineCard key={index} {...medicine} />;
                })}
              </View>
            ) : (
              <Text>No details</Text>
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default MedicineHistoryDetails;

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
  scrollView: {
    width: "100%",
    height: "100%",
    paddingBottom: 10,
  },
  item: {
    paddingLeft: 20,
    paddingRight: 20,

    width: "100%",
    height: "100%",
  },
  medicine: {
    margin: 10,
    padding: 10,
    borderRadius: 40,
    backgroundColor: "#FFF",
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    // width: "100%",
    height: "100%",
    paddingBottom: 50,
  },
});
