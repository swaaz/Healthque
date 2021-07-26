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

const AddGaitPage = () => {
  const form = {
    name: "",
    date: "",
    procedure: "",
    result: "",
    treatment: "",
  };
  const [formData, setFormData] = useState(form);

  const handleChange = (e) => {
    // const name = e.target.name;
    // const value = e.target.value;
    // console.log(e.target);
    // console.log(name)
    // setFormData({ ...formData, [name]: value });
  };

  return (
    <View style={styles.container}>
      <NameCard
        imageUrl="https://avatars.githubusercontent.com/u/42874695?v=4"
        name="Swasthik Shetty"
      />

      <Image
        style={styles.Img}
        source={require("../assets/vectors/girlStanding.png")}
      />

      <View style={styles.form}>
        <View>
          {/* <Image source={{ uri: "" }} /> */}
          <Text style={styles.title}>Gait</Text>
        </View>

        <TextInput
          style={styles.textInput}
          name="date"
          placeholder="Test"
          // value={
          //     formData.date
          // }
          onChange={handleChange}
        />

        <TextInput
          style={styles.textInput}
          name="procedure"
          placeholder="Normal/ Abnormal"
          // value={formData.procedure}
          onChange={handleChange}
        />

        <TextInput
          style={styles.textInput}
          name="result"
          placeholder="Type of abnormal gait"
          //   value={formData.result}
          onChange={handleChange}
        />

        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonTitle}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddGaitPage;

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
    width: "100%",
    height: "40%",
  },
});
