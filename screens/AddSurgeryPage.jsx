import React from "react";
import { useState, useEffect } from "react";
import { SegmentedControls } from 'react-native-radio-buttons'
import * as firebase from 'firebase'
import { db } from '../firebase'

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
import { useSelector } from "react-redux";



const AddSurgeryPage = () => {
  const form = {
    name: "",
    date: "",
    procedure: "",
    result: "",
    treatment: "",
  };
  const [formData, setFormData] = useState(form);
  const [option, setOption] = useState('');
  const state = useSelector(state => state.patient);
  const options = [
    "Successful",
    "Unsuccessful"
  ];

  const onSubmit = () => {
    console.log(state.email)
    let data = formData;
    data.result = option;
    db.collection('patients').doc(state.email)
    .update(
    {
        'medicalRecords.surgery' : firebase.firestore.FieldValue.arrayUnion(data)
    }
    )
    .then(() => console.log('data updated') )
    .catch(err => alert(err.message))
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
      <NameCard
        imageUrl={state.image}
        name={state.name}
      />

      <View style={styles.form}>
        <View>
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

        {/* <View style={styles.buttonGroup}>
          <TouchableOpacity onPress={() => setOption(!option)}>
            <RadioButton selected={option} text="Successful" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setOption(!option)}>
            <RadioButton selected={option} text="Unsuccessful" />
          </TouchableOpacity>
        </View> */}

          <View style={styles.radio}>
            <SegmentedControls
              backTint={'#5BA2F4'}
              tint= {"white"}
              selectedTint= {'#5BA2F4'}
              selectedBackgroundColor={'white'}
              options={ options }
              allowFontScaling={ false } 
              onSelection={ (text) => setOption(text)}
              selectedOption={ option }
              optionContainerStyle={{flex: 1}}
              containerBorderTint={'white'}
            />
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
    </SafeAreaView>
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
    width: '75%',

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
  radio: {
    width: '75%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  }
});
