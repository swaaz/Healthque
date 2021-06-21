import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const HospitalizationCard = ({
  reason,
  treatment,
  joinedDate,
  joinedTime,
  dischargeDate,
  dischargeTime,
  nameOfHospital,
}) => {
  //   docName = "suhan";
  return (
    <View style={styles.container}>
      <View style={styles.table}>
        <View style={styles.column}>
          <Text style={styles.category}>Date</Text>
          <Text style={styles.category}>Time</Text>
          <Text style={styles.category}>Reason</Text>
          <Text style={styles.category}>Treatment</Text>
          <Text style={styles.category}>Date of Discharge</Text>
          <Text style={styles.category}>Time of discharge</Text>
          <Text style={styles.category}>Hospital Name</Text>
        </View>

        <View style={styles.column}>
          <Text>{joinedDate}</Text>
          <Text>{joinedTime}</Text>
          <Text>{reason}</Text>
          <Text>{treatment}</Text>
          <Text>{dischargeDate}</Text>
          <Text>{dischargeTime}</Text>
          <Text>{nameOfHospital}</Text>
        </View>
      </View>
    </View>
  );
};

export default HospitalizationCard;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    // borderBottomEndRadius: 10,
    // borderBottomLeftRadius: 10,
    // borderTopRightRadius: 10,
    borderRadius: 40,
    backgroundColor: "#FFF",
    flex: 1,
    margin: 10,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: "center",
    justifyContent: "center",
    // width: "75%",
  },
  table: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  column: {
    flexDirection: "column",
    padding: 10,
  },
  category: {
    fontWeight: "bold",
  },
  subtitle: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    fontSize: 8,
  },
  subtitleText: {
    fontSize: 11,
    color: "#7F858C",
  },
  button: {
    marginLeft: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#C4C4C4",
    // width: 25,
    padding: 3,
    // paddingVertical: 10,
    borderRadius: 10,
    color: "white",
  },
  buttonTitle: {
    // fontSize: 5,
    fontWeight: "bold",
    color: "#000",
  },
});
