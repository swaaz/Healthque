import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TableComponent = (props) => {
  let medicine = props;
  medicine = Object.values(medicine);

  return (
    <View style={styles.item}>
      {medicine.map((med, key) => {
        return (
          <View key={key} style={styles.container}>
            <View style={styles.table}>
              <View style={styles.column}>
                <Text style={styles.category}>Date</Text>
                <Text style={styles.category}>Medicine Name</Text>
                <Text style={styles.category}>Strength</Text>
              </View>

              <View style={styles.column}>
                <Text>{med.date}</Text>
                <Text>{med.name}</Text>
                <Text>{med.strength}</Text>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default TableComponent;

const styles = StyleSheet.create({
  item: {
    height: "100%",
    width: "100%",
    flex: 1,
    justifyContent: "flex-start",
  },
  container: {
    marginTop: 20,
    padding: 20,
    borderRadius: 40,
    backgroundColor: "#FFF",
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
    // backgroundColor: "#C4C4C4",
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
