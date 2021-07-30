import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const SurgeryCard = (props) => {
  //   docName = "suhan";
  const { date, surgeryName, procedure, treatment, detailsURI, docName } =
    props;
  console.log(props);

  return (
    <View style={styles.container}>
      <View style={styles.table}>
        <View style={styles.column}>
          <Text style={styles.category}>Date</Text>
          <Text style={styles.category}>Procedure Name</Text>
          <Text style={styles.category}>Surgery Type</Text>
          <Text style={styles.category}>Surgery Area</Text>
        </View>

        <View style={styles.column}>
          <Text>{date}</Text>
          <Text>{surgeryName}</Text>
          <Text>{procedure}</Text>
          <Text>{treatment}</Text>
        </View>
      </View>

      {/* <View style={styles.subtitle}>
        <Text style={styles.subtitleText}>
          Signed off by Dr. {docName ? docName : "NoName"}
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonTitle}>Details</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default SurgeryCard;

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
