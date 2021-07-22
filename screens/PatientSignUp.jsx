import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View , TextInput, StatusBar, KeyboardAvoidingView } from 'react-native'
import { auth, db } from '../firebase'
const PatientSignUp = ({navigation}) => {
    const [profile, setProfile] = useState({
        name: '',
        dateOfBirth : '',
        gender : '',
        weight: '',
        height: '',
        location: '',
        email: '',
        password: ''
    });

    const onSubmit = async() => {
        console.log(profile)
        await auth.createUserWithEmailAndPassword(profile.email, profile.password)
        .then((authUser) => {
            console.log(authUser.uid)
            db.collection('patients').doc(authUser.uid)
            .set({
                name: profile.name,
                dateOfBirth : profile.dateOfBirth,
                gender: profile.gender,
                weight: profile.weight,
                height: profile.height,
                location: profile.location
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
                        <View style={styles.circle} />
                        <TouchableOpacity>
                            <Text style={styles.addImage}>Add Profile Image</Text>
                        </TouchableOpacity>
                    </View>

                    <KeyboardAvoidingView behavior={'height'}>
                        <TextInput onChangeText={(val) => setProfile(prev=> ({...prev, name: val}))} value={profile.name} style={styles.input} placeholderTextColor={'white'} placeholder={'Full Name'} />
                        <TextInput onChangeText={(val) => setProfile(prev=> ({...prev, email: val}))} value={profile.email} style={styles.input} placeholderTextColor={'white'} placeholder={'Email'} />
                        <TextInput secureTextEntry={true} onChangeText={(val) => setProfile(prev=> ({...prev, password: val}))} value={profile.password} style={styles.input} placeholderTextColor={'white'} placeholder={'Password'} />
                        <TextInput onChangeText={(val) => setProfile(prev=> ({...prev, dateOfBirth: val}))} value={profile.dateOfBirth} style={styles.input} placeholderTextColor={'white'} placeholder={'Date of Birth'} />
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
