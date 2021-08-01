import React from "react";
import { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import NameCard from "../components/NameCard";
import VaccineCard from "../components/VaccineCard";
import { useSelector } from "react-redux";

const VaccineHistoryPage = () => {
  const state = useSelector((state) => state.patient);
  const vaccineList = state.medicalRecords.vaccination;

  // const getVaccine = async () => {
  //   const response = [
  //     {
  //       key: 1,
  //       nameOfVaccine: "Tetanus tdap",
  //       route: "IM",
  //       dateAdmin: "05/01/2005",
  //       quantityOfDose: "0.5ml",
  //       numDose: "1",
  //       dateSecondDose: "05/03/2005",
  //       dateThirdDose: "05/05/2005",
  //       boosterDose: "05/07/2005",
  //       validity: "10 months",
  //     },
  //     {
  //       key: 2,
  //       nameOfVaccine: "Tetanus tdap",
  //       route: "IM",
  //       dateAdmin: "05/01/2005",
  //       quantityOfDose: "0.5ml",
  //       numDose: "1",
  //       dateSecondDose: "05/03/2005",
  //       dateThirdDose: "05/05/2005",
  //       boosterDose: "05/07/2005",
  //       validity: "10 months",
  //     },
  //     {
  //       key: 3,
  //       nameOfVaccine: "Tetanus tdap",
  //       route: "IM",
  //       dateAdmin: "05/01/2005",
  //       quantityOfDose: "0.5ml",
  //       numDose: "1",
  //       dateSecondDose: "05/03/2005",
  //       dateThirdDose: "05/05/2005",
  //       boosterDose: "05/07/2005",
  //       validity: "10 months",
  //     },
  //     {
  //       key: 4,
  //       nameOfVaccine: "Tetanus tdap",
  //       route: "IM",
  //       dateAdmin: "05/01/2005",
  //       quantityOfDose: "0.5ml",
  //       numDose: "1",
  //       dateSecondDose: "05/03/2005",
  //       dateThirdDose: "05/05/2005",
  //       boosterDose: "05/07/2005",
  //       validity: "10 months",
  //     },
  //     {
  //       key: 5,
  //       nameOfVaccine: "Tetanus tdap",
  //       route: "IM",
  //       dateAdmin: "05/01/2005",
  //       quantityOfDose: "0.5ml",
  //       numDose: "1",
  //       dateSecondDose: "05/03/2005",
  //       dateThirdDose: "05/05/2005",
  //       boosterDose: "05/07/2005",
  //       validity: "10 months",
  //     },
  //   ];
  //   setVaccineList(response);
  //   // setvaccineList([]);
  // };

  // useState(() => {
  //   getVaccine();
  // });

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={{ flex: 1 }}>
      <View style={styles.container}>
        <NameCard imageUrl={state.image} name={state.name} />
        <View style={styles.panel}>
          <Text style={styles.title}>Vaccine History</Text>
          {vaccineList.length ? (
            <View style={{ width: "100%", alignItems: "center" }}>
              {vaccineList.map((vaccine, key) => {
                return <VaccineCard key={key} {...vaccine} />;
              })}
            </View>
          ) : (
            <Text style={styles.altText}>No Previous Vaccination data</Text>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default VaccineHistoryPage;

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
