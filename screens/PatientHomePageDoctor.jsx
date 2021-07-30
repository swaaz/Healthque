import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import RedFlag from "../components/RedFlag";
import { auth, db } from "../firebase";
import * as firebase from "firebase";
import { useDispatch } from "react-redux";
import { updateStatePatient } from "../state/actionCreators";
import { useSelector } from "react-redux";

const PatientHomePageDoctor = ({ navigation }) => {
  const state = useSelector((state) => state.patient);

  const signOut = () => {
    auth.signOut().then(() => navigation.navigate("LandingOption"));
  };

  // const onUpdate = () => {

  //         console.log('ptrssed')

  //         db.collection('patients').doc('hEwopOnPibUJPK2XRHMa')
  //         .update(
  //         {
  //             redFlags : firebase.firestore.FieldValue.arrayUnion(
  //                 {
  //                     title : 'fg',
  //                     where: 'sgh'
  //                 }
  //             )
  //         }
  //         )
  //         .then(() => console.log('data ipdated') )
  //         .catch(err => alert(err.message))

  // }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image source={{ uri: state.image }} style={styles.profile} />
        <View style={styles.group}>
          <Text style={styles.name}>{state.name}</Text>
          <Text style={styles.gender}>{state.gender}</Text>
        </View>

        <Text style={styles.location}>{state.location}</Text>

        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.digit}>{state.age}</Text>
            <Text style={styles.digitTitle}>Age</Text>
          </View>
          <View style={styles.col}>
            <Text style={styles.digit}>
              {state.medicalRecords.general.weight}
            </Text>
            <Text style={styles.digitTitle}>Weight</Text>
          </View>
          <View style={styles.col}>
            <Text style={styles.digit}>
              {state.medicalRecords.general.height}
            </Text>
            <Text style={styles.digitTitle}>Height</Text>
          </View>
        </View>

        <View style={styles.card}>
          <TouchableOpacity
            onPress={() => navigation.navigate("AddDetails")}
            style={styles.button}
          >
            <Image
              source={require("../assets/icons/plus.png")}
              style={styles.plus}
            />
          </TouchableOpacity>

          <Text style={styles.title}>History</Text>

          <View style={styles.scrollRow}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <TouchableOpacity
                onPress={() => navigation.navigate("SurgeryHistoryPage")}
              >
                <View style={styles.buttonHistory}>
                  <Image
                    source={require("../assets/icons/surgery.png")}
                    style={styles.icons}
                  />
                  <Text style={styles.buttonTitle}>Surgery</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("VaccineHistoryPage")}
              >
                <View style={styles.buttonHistory}>
                  <Image
                    source={require("../assets/icons/vaccination.png")}
                    style={styles.icons}
                  />
                  <Text style={styles.buttonTitle}>Vaccination</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate("MedicineHistoryPage")}
              >
                <View style={styles.buttonHistory}>
                  <Image
                    source={require("../assets/icons/medic.png")}
                    style={styles.icons}
                  />
                  <Text style={styles.buttonTitle}>Medication</Text>
                </View>
              </TouchableOpacity>
              {/* <TouchableOpacity
                                onPress={() => navigation.navigate('HospitalizationHistoryPage')}
                            >
                                <View style={styles.buttonHistory}>
                                    <Image
                                        source={require('../assets/icons/healthrecord.png')}
                                        style={styles.icons}
                                    />
                                    <Text style={styles.buttonTitle}>Health Issue</Text>
                                </View>
                            </TouchableOpacity> */}

              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("HospitalizationHistoryPage")
                }
              >
                <View style={styles.buttonHistory}>
                  <Image
                    source={require("../assets/icons/hospital.png")}
                    style={styles.icons}
                  />
                  <Text style={styles.buttonTitle}>Hospitalized</Text>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>

          <Text style={styles.title}>Physical Details</Text>
          <View style={styles.rowTwo}>
            <TouchableOpacity style={styles.ButtonPhysical}>
              <Text style={styles.buttonTitle}>Deformities</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.ButtonPhysical}>
              <Text style={styles.buttonTitle}>Allergies</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.ButtonPhysical}>
              <Text style={styles.buttonTitle}>Gait</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.title}>Red Flags</Text>
          <View style={styles.labels}>
            {/* {
                            state.medicalRecords.redFlags.map((data,key) => <RedFlag key={key} label={data} />)
                        } */}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PatientHomePageDoctor;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profile: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    marginTop: "10%",
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
  group: {
    alignItems: "center",
  },
  row: {
    width: "90%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 40,
  },
  col: {
    alignItems: "center",
  },
  digit: {
    fontSize: 30,
    fontWeight: "bold",
  },
  digitTitle: {
    color: "grey",
  },
  card: {
    width: "100%",
    backgroundColor: "#5BA2F4",
    alignItems: "center",
    paddingBottom: 30,
    borderTopRightRadius: 80,
    borderTopLeftRadius: 80,
    elevation: 5,
    // height: '60%',
  },
  button: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#034C81",
    marginTop: -30,
    elevation: 3,
  },
  plus: {
    width: 30,
    height: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    letterSpacing: 2,
    marginVertical: 20,
    paddingTop: 10,
  },
  scrollRow: {
    width: "100%",
  },
  buttonHistory: {
    alignItems: "center",
    width: 150,
    backgroundColor: "#034C81",
    paddingVertical: 15,
    borderRadius: 15,
    marginHorizontal: 10,
    elevation: 5,
  },
  icons: {
    width: 30,
    height: 30,
  },
  buttonTitle: {
    color: "white",
    fontSize: 18,
    letterSpacing: 1,
  },
  rowTwo: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
  },
  ButtonPhysical: {
    width: "30%",
    backgroundColor: "#034C81",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    borderRadius: 15,
    elevation: 5,
  },
  labels: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    alignContent: "center",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    // paddingBottom : 50,
    // marginTop : 50
  },
});
