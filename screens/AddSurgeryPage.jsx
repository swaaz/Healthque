import React from "react";
import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  SafeAreaView,
} from "react-native";

import NameCard from "../components/NameCard";

const RadioButton = (props) => {
  return (
    <SafeAreaView>
      <View
      style={{
        flexDirection: "row",
        alignContent: "center",
        alignItems: "center",
        marginTop: 30,
        marginRight: 10,
      }}
    >
      <View
        style={[
          {
            height: 24,
            width: 24,
            borderRadius: 12,
            borderWidth: 2,
            borderColor: "#000",
            alignItems: "center",
            justifyContent: "center",
            marginRight: 5,
          },
          props.style,
        ]}
      >
        {props.selected && (
          <View
            style={{
              height: 12,
              width: 12,
              borderRadius: 6,
              backgroundColor: "#000",
            }}
          />
        )}
      </View>
      <Text style={{ fontSize: 20 }}>{props.text}</Text>
    </View>
    </SafeAreaView>
  );
};

const AddSurgeryPage = () => {
  const form = {
    name: "",
    date: "",
    procedure: "",
    result: "",
    treatment: "",
  };
  const [formData, setFormData] = useState(form);

  const onSubmit = () => {

  }

  const [option, setOption] = useState(false);

  return (
    <View style={styles.container}>
      <NameCard
        imageUrl="https://avatars.githubusercontent.com/u/42874695?v=4"
        name="Swasthik Shetty"
      />

      <View style={styles.form}>
        <View>
          {/* {" "} */}
          {/* <Image source={{ uri: "" }} /> */}
          <Text style={styles.title}>Surgery</Text>
        </View>

        <TextInput
          style={styles.textInput}
          placeholder="Surgery Name"
          onChangeText={(text) =>
            setFormData({
              ...formData,
              surgeryName: text,
            })
          }
        />

        <TextInput
          style={styles.textInput}
          placeholder="Procedure"
          onChangeText={(text) =>
            setFormData({
              ...formData,
              procedure: text,
            })
          }
        />

        <TextInput
          style={styles.textInput}
          placeholder="Date of Surgery"
          onChangeText={(text) =>
            setFormData({
              ...formData,
              date: text,
            })
          }
        />

        <View style={styles.buttonGroup}>
          <TouchableOpacity onPress={() => setOption(!option)}>
            <RadioButton selected={option} text="Successful" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setOption(!option)}>
            <RadioButton selected={option} text="Unsuccessful" />
          </TouchableOpacity>
        </View>

        <TextInput
          style={styles.textInput}
          name="treatment"
          placeholder="Complication"
          //   value={formData.treatment}
          onChangeText={(text) =>
            setFormData({
              ...formData,
              treatment: text,
            })
          }
        />

        <TouchableOpacity style={styles.button} onPress={onSubmit}>
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

  buttonGroup: {
    flexDirection: "row",
  },
});
