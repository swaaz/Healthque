import React from "react";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
} from "react-native";

import NameCard from "../components/NameCard";
import { db } from '../firebase';
import * as firebase from 'firebase'
import { useSelector } from "react-redux";


const AddHospitalizationPage = () => {
  const state = useSelector(state => state.patient);

  const form = {
    reason: "",
    treatment: "",
    joinedDate: "",
    joinedTime: "",
    dischargeDate: "",
    dischargeTime: "",
    nameOfHospital: "",
  };
  const [formData, setFormData] = useState(form);



  const onSubmit = () => {
    // console.log(formData)
    db.collection('patients').doc(state.email)
    .update(
    {
      "medicalRecords.hospitalized" : firebase.firestore.FieldValue.arrayUnion(formData)
    }
    )
    .then(() => ToastAndroid.show('Data added Successfully!!!',ToastAndroid.SHORT))
    .catch(err => alert(err.message))
        
  }

  return (
    <ScrollView>
      <View style={styles.container}>
      <NameCard
          imageUrl={state.image}
          name={state.name}
      />

        <View style={styles.form}>
          <View>
            {/* <Image source={{ uri: "" }} /> */}
            <Text style={styles.title}>Hospitalization</Text>
          </View>

          <TextInput
            style={styles.textInput}
            placeholder="Reason"
            onChangeText={(text) =>
              setFormData({
                ...formData,
                reason: text,
              })
            }
          />
          <TextInput
            style={styles.textInput}
            placeholder="Treatment"
            onChangeText={(text) =>
              setFormData({
                ...formData,
                treatment: text,
              })
            }
          />
          <TextInput
            style={styles.textInput}
            placeholder="Joined Date"
            onChangeText={(text) =>
              setFormData({
                ...formData,
                joinedDate: text,
              })
            }
          />

          <TextInput
            style={styles.textInput}
            placeholder="Joined Time"
            onChangeText={(text) =>
              setFormData({
                ...formData,
                joinedTime: text,
              })
            }
          />

          <TextInput
            style={styles.textInput}
            placeholder="Discharge Date"
            onChangeText={(text) =>
              setFormData({
                ...formData,
                dischargeDate: text,
              })
            }
          />

          <TextInput
            style={styles.textInput}
            placeholder="Discharge Time"
            onChangeText={(text) =>
              setFormData({
                ...formData,
                dischargeTime: text,
              })
            }
          />

          <TextInput
            style={styles.textInput}
            placeholder="Name of Hosipital"
            onChangeText={(text) =>
              setFormData({
                ...formData,
                nameOfHospital: text,
              })
            }
          />

          <TouchableOpacity style={styles.button} onPress={onSubmit}>
            <Text style={styles.buttonTitle}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default AddHospitalizationPage;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
  },

  form: {
    width: "100%",
    height: "100%",
    backgroundColor: "#5BA2F4",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    // justifyContent: "center",
    alignItems: "center",
  },

  textInput: {
    height: 56,

    marginTop: 25,
    width: 280,

    // fontFamily: 'Poppins',
    // borderWidth: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    paddingLeft: 25,
  },

  title: {
    // position: 'absolute',
    fontSize: 30,
    color: "white",
    // bottom: 100,
    fontWeight: "700",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#034C81",
    width: 125,
    padding: 10,
    // paddingVertical: 10,
    borderRadius: 10,
    marginVertical: 30,
    color: "white",
  },
  buttonTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "white",
    marginHorizontal: 10,
  },
});
