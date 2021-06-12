import React from "react";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

import NameCard from "../components/NameCard";

const AddSurgeryPage = () => {
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

      <View style={styles.form}>
        <View>
          <Image source={{ uri: "" }} />
          <Text style={styles.title}>Vaccine</Text>
        </View>

        <TextInput
          style={styles.textInput}
          placeholder="Name of Vaccine"
          // value={formData.name}
          onChange={handleChange}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Route"
          // value={formData.name}
          onChange={handleChange}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Date of Administration"
          // value={formData.name}
          onChange={handleChange}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Quantity of Dose"
          // value={formData.name}
          onChange={handleChange}
        />
        <TextInput
          style={styles.textInput}
          placeholder="No. of Dose"
          // value={formData.name}
          onChange={handleChange}
        />

        <TextInput
          style={styles.textInput}
          name="date"
          placeholder="Date of Second Dose"
          // value={
          //     formData.date
          // }
          onChange={handleChange}
        />

        <TextInput
          style={styles.textInput}
          name="procedure"
          placeholder="Date of Third Dose"
          // value={formData.procedure}
          onChange={handleChange}
        />

        <TextInput
          style={styles.textInput}
          name="result"
          placeholder="Booster dose with date"
          //   value={formData.result}
          onChange={handleChange}
        />

        <TextInput
          style={styles.textInput}
          name="treatment"
          placeholder="Validity"
          //   value={formData.treatment}
          onChange={handleChange}
        />

        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonTitle}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddSurgeryPage;

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
    justifyContent: "center",
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
    bottom: 100,
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
