import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const MedicineCard = ({
  name,
  date,
  reason,
  dosageForm,
  strength,
  instruction,
}) => {
  //   docName = "suhan";
  return (
    <View style={styles.container}>
      <View style={styles.table}>
        <View style={styles.column}>
          <Text style={styles.category}>Medicine Name</Text>
          <Text style={styles.category}>Strength</Text>
          <Text style={styles.category}>Dosage form</Text>
          <Text style={styles.category}>Reason</Text>
          <Text style={styles.category}>Dosing instructions</Text>
        </View>

        <View style={styles.column}>
          <Text style={styles.value}>{name}</Text>
          <Text style={styles.value}>{strength}</Text>
          <Text style={styles.value}>{dosageForm}</Text>
          <Text style={styles.value}>{reason}</Text>
          <Text style={[styles.value, styles.textWrap]}>{instruction}</Text>
        </View>
      </View>
    </View>
  );
};

export default MedicineCard;

const styles = StyleSheet.create({
  container: {
    // padding: 50,
    borderRadius: 40,
    flex: 1,
    margin: 10,
    paddingLeft: 20,
    paddingRight: 20,
    // alignItems: "center",
    // justifyContent: "center",
    // width: "75%",
  },
  table: {
    paddingLeft: 20,
    paddingRight: 20,
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
    padding: 10,
  },
  value: {
    padding: 10,
  },
});
