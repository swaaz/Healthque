import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const LandingOption = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          source={require("../assets/vectors/girlSitting.png")}
          style={styles.vector}
        />
        <View style={styles.options}>
          <TouchableOpacity
            onPress={() => navigation.navigate("DoctorInitial")}
          >
            <View style={styles.button}>
              <Image
                source={require("../assets/icons/doctor.png")}
                style={styles.doctor}
              />
              <Text style={styles.buttonTitle}>Doctor</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.divider}>
            <View style={styles.line} />
            <Text style={styles.or}>OR</Text>
            <View style={styles.line} />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("PatientInitial")}
          >
            <View style={styles.button}>
              <Image
                source={require("../assets/icons/patient.png")}
                style={styles.doctor}
              />
              <Text style={styles.buttonTitle}>Patient</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LandingOption;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#5BA2F4",
    alignItems: "center",
    justifyContent: "space-between",
  },
  vector: {
    width: "100%",
    height: "50%",
    marginTop: "10%",
  },
  options: {
    alignItems: "center",
    width: "100%",
    backgroundColor: "white",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    justifyContent: "space-evenly",
    paddingVertical: 20,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#034C81",
    width: 250,
    paddingVertical: 10,
    borderRadius: 10,
    marginVertical: 30,
  },
  doctor: {
    width: 20,
    height: 20,
    marginHorizontal: 10,
  },
  buttonTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginHorizontal: 10,
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
  },
  line: {
    width: "35%",
    height: 3,
    backgroundColor: "#5BA2F4",
  },
});
