import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View , TextInput, StatusBar, KeyboardAvoidingView } from 'react-native'
import { auth , db} from '../firebase'
const DoctorSignUp = ({navigation}) => {
    const [profile, setProfile ] = useState({
        name: '',
        email : '',
        password: '',
        dateOfBirth : '',
        gender: '',
        designation : '',
        qualification  : '',
        licenseNumber : '',
        hospital : '',
    });

    const onSubmit = async() => {
        await auth.createUserWithEmailAndPassword(profile.email, profile.password)
        .then((authUser) => {
            authUser.user.updateProfile({
                displayName: 'doctor'
            })
            .then((res) => console.log('updated'))
            .catch((err) => console.log(err))

            db.collection('doctors').doc(authUser.uid)
            .set({
                name: profile.name,
                dateOfBirth : profile.dateOfBirth,
                gender: profile.gender,
                designation :profile.designation,
                qualification  : profile.qualification,
                licenseNumber : profile.qualification,
                hospital : profile.hospital,
            })
            .then(() => navigation.navigate('DoctorInitial') )
            .catch(err => alert(err.message))
        })
        .catch((error) => alert(error.message));
    }
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

                    <KeyboardAvoidingView behavior={'padding'}>
                        <TextInput value={profile.name} onChangeText={(val) => setProfile(prev => ({...prev, name : val}))} style={styles.input} placeholderTextColor={'white'} placeholder={'Full Name'} />
                        <TextInput value={profile.email} onChangeText={(val) => setProfile(prev => ({...prev, email : val}))} style={styles.input} placeholderTextColor={'white'} placeholder={'Email'} />
                        <TextInput value={profile.password} onChangeText={(val) => setProfile(prev => ({...prev, password : val}))} style={styles.input} placeholderTextColor={'white'} placeholder={'Password'} />
                        <TextInput value={profile.dateOfBirth} onChangeText={(val) => setProfile(prev => ({...prev, dateOfBirth : val}))} style={styles.input} placeholderTextColor={'white'} placeholder={'Date of Birth'} />
                        <TextInput value={profile.gender} onChangeText={(val) => setProfile(prev => ({...prev, gender : val}))} style={styles.input} placeholderTextColor={'white'} placeholder={'Gender'} />
                        <TextInput value={profile.designation} onChangeText={(val) => setProfile(prev => ({...prev, designation : val}))} style={styles.input} placeholderTextColor={'white'} placeholder={'Designation'} />
                        <TextInput value={profile.qualification} onChangeText={(val) => setProfile(prev => ({...prev, qualification : val}))} style={styles.input} placeholderTextColor={'white'} placeholder={'Qualification'} />
                        <TextInput value={profile.licenseNumber} onChangeText={(val) => setProfile(prev => ({...prev, licenseNumber : val}))} style={styles.input} placeholderTextColor={'white'} placeholder={'License Number'} />
                        <TextInput value={profile.hospital} onChangeText={(val) => setProfile(prev => ({...prev, hospital : val}))} style={styles.input} placeholderTextColor={'white'} placeholder={'Hospital/Clinic'} />
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

export default DoctorSignUp

const styles = StyleSheet.create({
    container : {
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
        marginVertical : 5
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
