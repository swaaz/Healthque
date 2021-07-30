import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const VaccineCard = ({
  dateAdmin,
  nameOfVaccine,
  route,
  quantityOfDose,
  numDose,
  dateSecondDose,
  dateThirdDose,
  boosterDose,
  validity,
}) => {
  //   docName = "suhan";
  return (
    <View style={styles.container}>
      <View style={styles.table}>
        <View style={styles.column}>
          <Text style={styles.category}>Vaccine Name</Text>
          <Text style={styles.category}>Route</Text>
          <Text style={styles.category}>Dosage</Text>
          <Text style={styles.category}>No Of Doses</Text>
          <Text style={styles.category}>Second Dose</Text>
          <Text style={styles.category}>Third Dose</Text>
          <Text style={styles.category}>Booster Dose</Text>
          <Text style={styles.category}>Validity</Text>
        </View>

        <View style={styles.column}>
          <Text>{nameOfVaccine}</Text>
          <Text>{route}</Text>
          <Text>{quantityOfDose}</Text>
          <Text>{numDose}</Text>
          <Text>{dateSecondDose}</Text>
          <Text>{dateThirdDose}</Text>
          <Text>{boosterDose}</Text>
          <Text>{validity}</Text>
        </View>
      </View>
    </View>
  );
};

export default VaccineCard;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    // borderBottomEndRadius: 10,
    // borderBottomLeftRadius: 10,
    // borderTopRightRadius: 10,
    borderRadius: 40,
    backgroundColor: "#FFF",
    // flex: 1,
    marginVertical: 10,
    marginHorizontal: "auto",
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
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
