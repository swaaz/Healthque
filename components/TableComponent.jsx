import React from "react";
import { StyleSheet, Text, View } from "react-native";

const RowComponent = (medicineName, medType, dosage) => {
  return (
    <View style={styles.row}>
      <Text>{medicineName}</Text>
      <Text>{medType}</Text>
      <Text>{dosage}</Text>
    </View>
  );
};

const TableComponent = (props) => {
  const medicine = props;
  return (
    <View style={styles.table}>
      {/* <Text>{date}</Text> */}

      <View style={styles.row}>
        <View>
          <Text style={[styles.column, styles.heading]}>Medicine Name</Text>
          {medicine.map((med) => {
            // console.log(med);
            //   return <RowComponent {...med} />;
            return <Text style={styles.column}>{med.medicineName}</Text>;
          })}
        </View>
        <View>
          <Text style={[styles.column, styles.heading]}>Medicine Type</Text>
          {medicine.map((med) => {
            // console.log(med);
            //   return <RowComponent {...med} />;
            return <Text style={styles.column}>{med.medType}</Text>;
          })}
        </View>
        <View>
          <Text style={[styles.column, styles.heading]}>Quantity</Text>
          {medicine.map((med) => {
            // console.log(med);
            //   return <RowComponent {...med} />;
            return <Text style={styles.column}>{med.quantity}</Text>;
          })}
        </View>
      </View>
    </View>
  );
};

export default TableComponent;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  table: {
    padding: 10,
    margin: 10,
    backgroundColor: "#FFF",
    borderRadius: 40,
    margin: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  column: {
    flex: 1,
    padding: 10,
  },
  heading: {
    fontWeight: "700",
  },
});
