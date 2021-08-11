import React from "react";
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSelector } from "react-redux";


const DoctorHomePage = ({navigation}) => {
    const data = useSelector(state => state.doctor)
    // console.log(data)
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Image
                    source={{uri : data.image }}
                    style={styles.profile}
                />
                <View  style={styles.group}>
                    <Text style={styles.name}>{data.name}</Text>
                    <Text style={styles.gender}>{data.gender}</Text>
                </View>

        <Text style={styles.location}>{data.location}</Text>

        <View style={styles.group}>
          <Text style={styles.license}>{data.licenseNumber}</Text>
          <Text style={styles.licenseTitle}>License Number</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.age}>{data.age}</Text>
            <Text style={styles.ageTitle}>Age</Text>
          </View>
          <View style={styles.col}>
            <Text style={styles.age}>3.5</Text>
            <Text style={styles.ageTitle}>Exp</Text>
          </View>
        </View>

        <Text style={styles.degree}>{data.degree}</Text>

        <View style={styles.footer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("EmailVerification")}
            style={styles.button}
          >
            <Image
              source={require("../assets/icons/plus.png")}
              style={styles.plus}
            />
          </TouchableOpacity>
          <Text style={styles.specialisation}>{data.specialization}</Text>
          <Text style={styles.hospital}>{data.hospital}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DoctorHomePage;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    paddingTop: StatusBar.currentHeight,
    alignItems: "center",
    justifyContent: "space-between",
  },
  profile: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    marginTop: "20%",
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
    letterSpacing: 2,
  },

  gender: {
    color: "grey",
  },
  location: {
    fontSize: 23,
    fontWeight: "100",
    letterSpacing: 2,
  },
  license: {
    fontSize: 25,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  licenseTitle: {
    color: "grey",
  },
  row: {
    width: "75%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  col: {
    alignItems: "center",
    justifyContent: "space-around",
  },
  age: {
    fontSize: 25,
  },
  ageTitle: {
    color: "grey",
  },
  degree: {
    fontSize: 18,
    color: "#034C81",
  },
  footer: {
    backgroundColor: "#5BA2F4",
    width: "100%",
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
    alignItems: "center",
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    backgroundColor: "#034C81",
    justifyContent: "center",
    alignItems: "center",
    marginTop: -30,
    elevation: 5,
  },
  plus: {
    width: 30,
    height: 30,
  },
  specialisation: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    letterSpacing: 2,
    paddingVertical: 25,
  },
  hospital: {
    fontSize: 20,
    letterSpacing: 1,
    color: "white",
    paddingBottom: 40,
  },
  group: {
    alignItems: "center",
  },
});
