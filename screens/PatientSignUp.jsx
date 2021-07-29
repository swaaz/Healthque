import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View , TextInput, StatusBar, KeyboardAvoidingView, Image } from 'react-native'
import { auth, db, storage } from '../firebase'
import * as ImagePicker from 'expo-image-picker'
const PatientSignUp = ({navigation}) => {
    const [profile, setProfile] = useState({
        name: '',
        age : '',
        gender : '',
        weight: '',
        height: '',
        location: '',
        email: '',
        password: '',
    });
    const [image, setImage] = useState(null);
    const [firebaseUrl, setFirebaseUrl] = useState('');

   

    const addImage = async() => {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 4],
                quality: 1,
                });
        
                // console.log(result);
        
                if (!result.cancelled) {
                setImage(result.uri);
                }
                uploadImage(result.uri)
                
    };
    const pickImage = async () => {
        if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
            }
            else{
                addImage();
            }
        }
    };

    const uploadImage = async (image) => {

        const res = await fetch(image);
        const blob = await res.blob();

        const ref =  storage.ref().child(`patients/${new Date().toISOString()}`);
        await ref.put(blob)
        setFirebaseUrl(await ref.getDownloadURL());
        
    };

    const onSubmit = async() => {
        // console.log(profile)
        await auth.createUserWithEmailAndPassword(profile.email, profile.password)
        .then((authUser) => {
            authUser.user.updateProfile({
                displayName: 'patient'
            })
            .then((res) => console.log('updated'))
            .catch((err) => console.log(err))
            db.collection('patients').doc(authUser.user.email)
            .set({
                name: profile.name,
                age : profile.age,
                gender: profile.gender,
                location: profile.location,
                image: firebaseUrl,
                medicalRecords : {
                    surgery : [],
                    medication : [],
                    healthIssue : [],
                    hospitalized : [],
                    vaccination : [],
                    gait: [],
                    allergy : [],
                    deformities : [],
                    redFlags : [],
                    general : {
                        weight: profile.weight,
                        height: profile.height,
                    }
                }
            })
            .then(() => navigation.navigate('PatientInitial') )
            .catch(err => alert(err.message))
        })
        .catch((error) => alert(error.message));
    }
    // console.log(profile)
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.form}>
                    <View style={styles.profile}>
                        <View style={styles.circle}>
                            {
                                image?
                                <Image source={{uri: image}} style={styles.profileImage} />
                                :
                                null
                            }
                        </View>
                        <TouchableOpacity
                            onPress={pickImage}
                        >
                            <Text style={styles.addImage}>Add Profile Image</Text>
                        </TouchableOpacity>
                    </View>

                    <KeyboardAvoidingView behavior={'height'}>
                        <TextInput onChangeText={(val) => setProfile(prev=> ({...prev, name: val}))} value={profile.name} style={styles.input} placeholderTextColor={'white'} placeholder={'Full Name'} />
                        <TextInput onChangeText={(val) => setProfile(prev=> ({...prev, email: val}))} value={profile.email} style={styles.input} placeholderTextColor={'white'} placeholder={'Email'} />
                        <TextInput secureTextEntry={true} onChangeText={(val) => setProfile(prev=> ({...prev, password: val}))} value={profile.password} style={styles.input} placeholderTextColor={'white'} placeholder={'Password'} />
                        <TextInput onChangeText={(val) => setProfile(prev=> ({...prev, age: val}))} value={profile.age} style={styles.input} placeholderTextColor={'white'} placeholder={'Age'} />
                        <TextInput onChangeText={(val) => setProfile(prev=> ({...prev, gender: val}))} value={profile.gender} style={styles.input} placeholderTextColor={'white'} placeholder={'Gender'} />
                        <TextInput onChangeText={(val) => setProfile(prev=> ({...prev, weight: val}))} value={profile.weight} style={styles.input} placeholderTextColor={'white'} placeholder={'Weight'} />
                        <TextInput onChangeText={(val) => setProfile(prev=> ({...prev, height: val}))} value={profile.height} style={styles.input} placeholderTextColor={'white'} placeholder={'Height'} />
                        <TextInput onChangeText={(val) => setProfile(prev=> ({...prev, location: val}))} value={profile.location}  style={styles.input} placeholderTextColor={'white'} placeholder={'Location'} />
                    </KeyboardAvoidingView>
                    <TouchableOpacity onPress={onSubmit} style={styles.button}>
                        <Text style={styles.message}>Submit</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('PatientInitial')}><Text style={styles.signInLink}>Don't have an account? Register</Text></TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default PatientSignUp;

const styles = StyleSheet.create({
    container : {
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundColor : '#5BA2F4',
        alignItems : 'center',
    },
    form : {
        width: '100%',
        height: '93%',
        backgroundColor : 'white',
        borderBottomRightRadius : 80,
        borderBottomLeftRadius : 80,
        elevation : 5,
        alignItems : 'center',
        paddingTop : StatusBar.currentHeight,
        alignItems : 'center',
        justifyContent : 'space-evenly',
        paddingVertical : 20
    },
    profile : {
        marginBottom : 20
    },
    circle : {
        width: 100,
        height: 100,
        borderRadius : 100/2,
        backgroundColor : '#5BA2F4'
    },
    profileImage : {
        width: '100%',
        height: '100%',
        borderRadius: 100/2
    },
    input : {
        width: 300,
        paddingVertical : 10,
        backgroundColor : '#5BA2F4',
        color: 'white',
        borderRadius : 20,
        paddingHorizontal : 20,
        marginVertical : 10
    },
    button : {
        width: 100,
        height: 40,
        backgroundColor : '#034C81',
        // paddingVertical : 10,
        alignItems : 'center',
        justifyContent : 'center',
        borderRadius : 10
    },
    message : {
        color: 'white',
        fontWeight : 'bold'
    },
    signInLink : {
        paddingTop: 15,
        color: 'white'
    }
})
