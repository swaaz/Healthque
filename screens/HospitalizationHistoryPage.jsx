import React from "react";
import { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import NameCard from "../components/NameCard";
import HospitalizationCard from "../components/HospitalizationCard";

const HospitalizationHistoryPage = (props) => {
  const [hospitalList, setHospitalList] = useState([]);

  /**
   * Gets the history list of surgery data
   */
  const getHospitalization = async () => {
    const response = [
      {
        key: 1,
        reason: "Cardiac Arrest",
        treatment: "Surgery",
        joinedDate: "05/01/2005",
        joinedTime: "10:00",
        dischargeDate: "15/01/2005",
        dischargeTime: "18:00",
        nameOfHospital: "AJ",
      },
      {
        key: 2,
        reason: "Cardiac Arrest",
        treatment: "Surgery",
        joinedDate: "05/01/2005",
        joinedTime: "10:00",
        dischargeDate: "15/01/2005",
        dischargeTime: "18:00",
        nameOfHospital: "AJ",
      },
      {
        key: 3,
        reason: "Cardiac Arrest",
        treatment: "Surgery",
        joinedDate: "05/01/2005",
        joinedTime: "10:00",
        dischargeDate: "15/01/2005",
        dischargeTime: "18:00",
        nameOfHospital: "AJ",
      },
      {
        key: 4,
        reason: "Cardiac Arrest",
        treatment: "Surgery",
        joinedDate: "05/01/2005",
        joinedTime: "10:00",
        dischargeDate: "15/01/2005",
        dischargeTime: "18:00",
        nameOfHospital: "AJ",
      },
      {
        key: 5,
        reason: "Cardiac Arrest",
        treatment: "Surgery",
        joinedDate: "05/01/2005",
        joinedTime: "10:00",
        dischargeDate: "15/01/2005",
        dischargeTime: "18:00",
        nameOfHospital: "AJ",
      },
    ];

    setHospitalList(response);
  };

  useState(() => {
    getHospitalization();
  });

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <NameCard
          imageUrl="https://avatars.githubusercontent.com/u/42874695?v=4"
          name="Swasthik Shetty"
        />
        <View style={styles.panel}>
          <Text style={styles.title}>Hospitalization History</Text>
          {hospitalList.length ? (
            <View>
              {hospitalList.map((visit) => {
                return <HospitalizationCard key={visit.key} {...visit} />;
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
});
