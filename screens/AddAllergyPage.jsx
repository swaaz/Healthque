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

const AddAllergyPage = () => {
  const form = {
    name: "",
    date: "",
    complication: "",
  
  };
  const [formData, setFormData] = useState(form);

  const onSubmit = () => {
    console.log(formData)
    db.collection('patients').doc('sham@sham.in')
    .update(
    {
      "medicalRecords.allergy" : firebase.firestore.FieldValue.arrayUnion(formData)
    }
    )
    .then(() => console.log('data updated') )
    .catch(err => alert(err.message))
        
  }

  return (
    <View style={styles.container}>
      <NameCard
        imageUrl="https://avatars.githubusercontent.com/u/42874695?v=4"
        name="Swasthik Shetty"
      />

      <Image source={require("../assets/vectors/girlStanding.png")} />

      <View style={styles.form}>
        <View>
          {/* <Image source={{ uri: "" }} /> */}
          <Text style={styles.title}>Allergy</Text>
        </View>

        <TextInput
          style={styles.textInput}
          name="date"
          placeholder="Name"
          value={formData.name}
          onChangeText={(val) => setFormData(prev => ({...prev, name : val}))}
        />

        <TextInput
          style={styles.textInput}
          name="procedure"
          placeholder="Date"
          value={formData.date}
          onChangeText={(val) => setFormData(prev => ({...prev, date : val}))}
        />

        <TextInput
          style={styles.textInput}
          name="result"
          placeholder="Complications"
            value={formData.complication}
          onChangeText={(val) => setFormData(prev => ({...prev, complication : val}))}
        />

        <TouchableOpacity style={styles.button} onPress={onSubmit}>
          <Text style={styles.buttonTitle}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddAllergyPage;

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
    height: 400,
    backgroundColor: "#5BA2F4",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    // justifyContent: "center",
    alignItems: "center",
  },

  textInput: {
    height: 56,

    marginTop: 15,
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

  Img: {
    width: "50%",
    height: "50%",
  },
});
