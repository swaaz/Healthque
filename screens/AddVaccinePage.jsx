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
import * as firebase from 'firebase'
import { db } from '../firebase'
import { useSelector } from "react-redux";

/**
 * This component renders the vaccinate page
 */
const AddVaccinePage = () => {
  const form = {
    nameOfVaccine: "",
    route: "",
    dateAdmin: "",
    quantityOfDose: "",
    numDose: "",
    dateSecondDose: "",
    dateThirdDose: "",
    boosterDose: "",
    validity: "",
  };
  const [formData, setFormData] = useState(form);
  const state = useSelector(state => state.patient);




  const onSubmit = () => {
    // console.log(formData)
    db.collection('patients').doc(state.email)
    .update(
    {
      "medicalRecords.vaccination" : firebase.firestore.FieldValue.arrayUnion(formData)
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
            <Text style={styles.title}>Vaccine</Text>
          </View>

          <TextInput
            style={styles.textInput}
            placeholder="Name of Vaccine"
            onChangeText={(text) =>
              setFormData({
                ...formData,
                nameOfVaccine: text,
              })
            }
          />
          <TextInput
            style={styles.textInput}
            placeholder="Route"
            onChangeText={(text) =>
              setFormData({
                ...formData,
                route: text,
              })
            }
          />
          <TextInput
            style={styles.textInput}
            placeholder="Date of Administration"
            onChangeText={(text) =>
              setFormData({
                ...formData,
                dateAdmin: text,
              })
            }
          />
          <TextInput
            style={styles.textInput}
            placeholder="Quantity of Dose"
            onChangeText={(text) =>
              setFormData({
                ...formData,
                quantityOfDose: text,
              })
            }
          />
          <TextInput
            style={styles.textInput}
            placeholder="No. of Dose"
            onChangeText={(text) =>
              setFormData({
                ...formData,
                numDose: text,
              })
            }
          />

          <TextInput
            style={styles.textInput}
            placeholder="Date of Second Dose"
            onChangeText={(text) =>
              setFormData({
                ...formData,
                dateSecondDose: text,
              })
            }
          />

          <TextInput
            style={styles.textInput}
            placeholder="Date of Third Dose"
            onChangeText={(text) =>
              setFormData({
                ...formData,
                dateThirdDose: text,
              })
            }
          />

          <TextInput
            style={styles.textInput}
            placeholder="Booster dose with date"
            onChangeText={(text) =>
              setFormData({
                ...formData,
                boosterDose: text,
              })
            }
          />

          <TextInput
            style={styles.textInput}
            placeholder="Validity"
            onChangeText={(text) =>
              setFormData({
                ...formData,
                validity: text,
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

export default AddVaccinePage;

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
