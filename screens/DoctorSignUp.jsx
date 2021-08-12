import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  StatusBar,
  KeyboardAvoidingView,
  Image,
  ScrollView,
} from "react-native";
import { SegmentedControls } from "react-native-radio-buttons";

import { auth, db, storage } from "../firebase";
import * as ImagePicker from "expo-image-picker";

const DoctorSignUp = ({ navigation }) => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    degree: "",
    specialization: "",
    licenseNumber: "",
    hospital: "",
    image: "",
  });
  const [option, setOption] = useState("");
  const options = ["Hospital", "Clinic"];
  const [image, setImage] = useState(null);
  const [firebaseUrl, setFirebaseUrl] = useState("");

  const addImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });


    if (!result.cancelled) {
      setImage(result.uri);
    }
    uploadImage(result.uri);
  };
  const pickImage = async () => {
    if (Platform.OS !== "web") {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      } else {
        addImage();
      }
    }
  };

  const uploadImage = async (image) => {
    const res = await fetch(image);
    const blob = await res.blob();

    const ref = storage.ref().child(`doctors/${new Date().toISOString()}`);
    await ref.put(blob);
    setFirebaseUrl(await ref.getDownloadURL());
  };

  const onSubmit = async () => {
    await auth
      .createUserWithEmailAndPassword(profile.email, profile.password)
      .then((authUser) => {
        authUser.user
          .updateProfile({
            displayName: "doctor",
          })
          .then((res) => console.log("updated"))
          .catch((err) => console.log(err));

        db.collection("doctors")
          .doc(authUser.user.email)
          .set({
            name: profile.name,
            age: profile.age,
            gender: profile.gender,
            degree: profile.degree,
            specialization: profile.specialization,
            licenseNumber: profile.licenseNumber,
            hospital: profile.hospital,
            image: firebaseUrl,
          })
          .then(() => navigation.navigate("DoctorInitial"))
          .catch((err) => alert(err.message));
      })
      .catch((error) => alert(error.message));
  };
  
  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.form}>
          <View style={styles.profile}>
            <View style={styles.circle}>
              {image ? (
                <Image source={{ uri: image }} style={styles.profileImage} />
              ) : null}
            </View>
            <TouchableOpacity onPress={pickImage}>
              <Text style={styles.addImage}>Add Profile Image</Text>
            </TouchableOpacity>
          </View>

          <KeyboardAvoidingView behavior={"padding"}>
            <TextInput
              value={profile.name}
              onChangeText={(val) =>
                setProfile((prev) => ({ ...prev, name: val }))
              }
              style={styles.input}
              placeholderTextColor={"white"}
              placeholder={"Full Name"}
            />
            <TextInput
              value={profile.email}
              onChangeText={(val) =>
                setProfile((prev) => ({ ...prev, email: val }))
              }
              style={styles.input}
              placeholderTextColor={"white"}
              placeholder={"Email"}
            />
            <TextInput
              value={profile.password}
              onChangeText={(val) =>
                setProfile((prev) => ({ ...prev, password: val }))
              }
              style={styles.input}
              placeholderTextColor={"white"}
              placeholder={"Password"}
            />
            <TextInput
              value={profile.age}
              onChangeText={(val) =>
                setProfile((prev) => ({ ...prev, age: val }))
              }
              style={styles.input}
              placeholderTextColor={"white"}
              placeholder={"Age"}
            />
            <TextInput
              value={profile.gender}
              onChangeText={(val) =>
                setProfile((prev) => ({ ...prev, gender: val }))
              }
              style={styles.input}
              placeholderTextColor={"white"}
              placeholder={"Gender"}
            />
            <TextInput
              value={profile.degree}
              onChangeText={(val) =>
                setProfile((prev) => ({ ...prev, degree: val }))
              }
              style={styles.input}
              placeholderTextColor={"white"}
              placeholder={"degree"}
            />
            <TextInput
              value={profile.specialization}
              onChangeText={(val) =>
                setProfile((prev) => ({ ...prev, specialization: val }))
              }
              style={styles.input}
              placeholderTextColor={"white"}
              placeholder={"specialization"}
            />
            <TextInput
              value={profile.licenseNumber}
              onChangeText={(val) =>
                setProfile((prev) => ({ ...prev, licenseNumber: val }))
              }
              style={styles.input}
              placeholderTextColor={"white"}
              placeholder={"License Number"}
            />
            {/* <TextInput
              value={profile.hospital}
              onChangeText={(val) =>
                setProfile((prev) => ({ ...prev, hospital: val }))
              }
              style={styles.input}
              placeholderTextColor={"white"}
              placeholder={"Hospital/Clinic"}
            /> */}

            <View style={styles.radio}>
              <SegmentedControls
                backTint={"#5BA2F4"}
                tint={"white"}
                selectedTint={"#5BA2F4"}
                selectedBackgroundColor={"white"}
                options={options}
                allowFontScaling={false}
                onSelection={(text) => setOption(text)}
                selectedOption={option}
                optionContainerStyle={{ flex: 1 }}
                containerBorderTint={"black"}
              />
            </View>
          </KeyboardAvoidingView>

          <TouchableOpacity onPress={onSubmit} style={styles.button}>
            <Text style={styles.message}>Submit</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("PatientInitial")}>
          <Text style={styles.signInLink}>Don't have an account? Register</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default DoctorSignUp;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#5BA2F4",
    alignItems: "center",
  },
  form: {
    width: "100%",
    height: "93%",
    backgroundColor: "white",
    borderBottomRightRadius: 80,
    borderBottomLeftRadius: 80,
    elevation: 5,
    alignItems: "center",
    paddingTop: StatusBar.currentHeight,
    justifyContent: "center",
    paddingVertical: 20,
  },
  profile: {
    marginBottom: 20,
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    backgroundColor: "#5BA2F4",
  },
  profileImage: {
    width: "100%",
    height: "100%",
    borderRadius: 100 / 2,
  },
  input: {
    width: 300,
    paddingVertical: 10,
    backgroundColor: "#5BA2F4",
    color: "white",
    borderRadius: 20,
    paddingHorizontal: 20,
    marginVertical: 5,
  },
  button: {
    width: 100,
    height: 40,
    backgroundColor: "#034C81",
    // paddingVertical : 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  message: {
    color: "white",
    fontWeight: "bold",
  },
  signInLink: {
    paddingTop: 15,
    color: "white",
  },
  radio: {
    width: "70%",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    // marginHorizontal: 'auto'
  },
});
