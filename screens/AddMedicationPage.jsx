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
} from "react-native";

import NameCard from "../components/NameCard";
import * as firebase from 'firebase'
import { db } from '../firebase'
import { useSelector } from "react-redux";

const AddMedicationPage = () => {
  const state = useSelector(state => state.patient);

  const form = {
    name: "",
    date: "",
    reason: "",
    dosageForm: "",
    strength: "",
    instruction: ""

  };
  const [formData, setFormData] = useState(form);

 

  const onSubmit = () => {
    console.log(formData)
    db.collection('patients').doc(state.email)
    .update(
    {
      "medicalRecords.medication" : firebase.firestore.FieldValue.arrayUnion(formData)
    }
    )
    .then(() => console.log('data updated') )
    .catch(err => alert(err.message))
        
  }

  return (
    <View style={styles.container}>
      <NameCard
          imageUrl={state.image}
          name={state.name}
      />

      <View style={styles.form}>
        <View>
          {/* <Image source={{ uri: "" }} /> */}
          <Text style={styles.title}>Medication</Text>
        </View>

        <TextInput
          style={styles.textInput}
          name="name"
          placeholder="Name of Medication"
          value={ formData.name}
          onChangeText={(text) => setFormData(prev => ({...prev, name: text}))}
        />

        <TextInput
          style={styles.textInput}
          name="reason"
          placeholder="Reason"
          value={formData.reason}
          onChangeText={(text) => setFormData(prev => ({...prev, reason: text}))}
        />

        <TextInput
          style={styles.textInput}
          name="dosageForm"
          placeholder="Dosage Form"
            value={formData.dosageForm}
          onChangeText={(text) => setFormData(prev => ({...prev, dosageForm: text}))}
        />
        <TextInput
          style={styles.textInput}
          name="date"
          placeholder="Date of prescription"
            value={formData.date}
          onChangeText={(text) => setFormData(prev => ({...prev, date: text}))}
        />
        <TextInput
          style={styles.textInput}
          name="strength"
          placeholder="Strength"
            value={formData.strength}
          onChangeText={(text) => setFormData(prev => ({...prev, strength: text}))}
        />
        <TextInput
          style={styles.textInput}
          name="instruction"
          placeholder="Dosage Instruction"
            value={formData.instruction}
          onChangeText={(text) => setFormData(prev => ({...prev, instruction: text}))}
        />

        <TouchableOpacity style={styles.button} onPress={onSubmit}>
          <Text style={styles.buttonTitle}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddMedicationPage;

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

    marginTop: 40,
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
    marginTop: 50,
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
    fontWeight: "bold",
    color: "white",
    marginHorizontal: 10,
  },
});
