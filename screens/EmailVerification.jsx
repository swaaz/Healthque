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
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import NameCard from "../components/NameCard";
// import * as firebase from "firebase";
import { db } from "../firebase";
import { updateStatePatient } from "../state/actionCreators";

const EmailVerification = ({navigation}) => {
  const dispatch = useDispatch();

  
  const [formData, setFormData] = useState('');
  const state = useSelector(state => state.doctor);

  const onSubmit = () => {
    const data = db.collection("patients").doc(formData);
    data
      .get()
      .then((doc) => {
        if(doc.exists){

          navigation.navigate("PatientHomePageDoctor");
          dispatch(updateStatePatient(doc.data()));
        }
        else{
          alert('no doc found');
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <View style={styles.container}>
      <NameCard
        imageUrl = {state.image}
        name = {state.name}
      />

      <Image
        style={styles.Img}
        source={require("../assets/vectors/guySitting.png")}
      />

      <View style={styles.form}>
        <View>
          <Text style={styles.title}>Email Verification</Text>
        </View>

        <TextInput
          style={styles.textInput}
          name="email"
          placeholder="Enter Email ID"
          value={formData}
          onChangeText={(val) => setFormData(val)}
        />

        <TouchableOpacity style={styles.button} onPress={onSubmit}>
          <Text style={styles.buttonTitle}>Verify Email</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EmailVerification;

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
    height: "35%",
    // minHeight: 200,
    backgroundColor: "#5BA2F4",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  textInput: {
    height: 56,

    marginTop: 15,
    width: "80%",

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
    width: "45%",
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
    width: "100%",
    height: "40%",
  },
});
