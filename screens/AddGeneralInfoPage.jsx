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
import { db } from '../firebase'
import { useSelector } from "react-redux";

const AddGeneralInfoPage = () => {
  const state = useSelector(state => state.patient);

  const form = {
    height: "",
    weight: ""
  };
  const [formData, setFormData] = useState(form);

  const onSubmit = () => {
    // console.log(formData)
    db.collection('patients').doc(state.email)
    .update(
    {
      "medicalRecords.general.weight" : formData.weight,
      "medicalRecords.general.height" : formData.height
    }
    )
    .then(() => ToastAndroid.show('Data added Successfully!!!',ToastAndroid.SHORT))
    .catch(err => alert(err.message))
        
  }


  return (
    <View style={styles.container}>
      <NameCard
          imageUrl={state.image}
          name={state.name}
      />

      <Image
        style={styles.Img}
        source={require("../assets/vectors/girlStanding.png")}
      />

      <View style={styles.form}>
        <View>
          {/* <Image source={{ uri: "" }} /> */}
          <Text style={styles.title}>General Info</Text>
        </View>

        <TextInput
          style={styles.textInput}
          name="weight"
          placeholder="Weight"
          value={formData.weight}
          onChangeText={(text) => setFormData((prev) => ({...prev, weight: text}))}
        />

        <TextInput
          style={styles.textInput}
          name="Height"
          placeholder="Height"
          value={formData.height}
          onChangeText={(text) => setFormData((prev) => ({...prev, height: text}))}
        />

        <TouchableOpacity style={styles.button} onPress={onSubmit}>
          <Text style={styles.buttonTitle}>Update</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddGeneralInfoPage;

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
    height: "40%",
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
    // width: "45%",
    height: "45%",
  },
});
