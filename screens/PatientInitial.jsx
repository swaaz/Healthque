import React, { useEffect, useState } from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AddNumber from '../components/AddNumber';
import AddOTP from '../components/AddOTP';
import {auth} from '../firebase'


const PatientInitial = ({navigation}) => {


    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            console.log(authUser.uid);
            if(authUser){
                navigation.navigate('PatientHomePage');
            }
        })

        return unsubscribe;
    },[]);

    const onSubmit = (cred) => {
        auth.signInWithEmailAndPassword(cred.mail, cred.password)
        .catch(err => alert(err.message));
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Image
                    source={require('../assets/vectors/patient.png')}
                    style={styles.doctor}
                />
                <View style={styles.form}>
                    <Text style={styles.title}>Login as Patient</Text>
                        <AddNumber onSubmit={onSubmit} />
                    <TouchableOpacity onPress={() => navigation.navigate('PatientSignUp')}><Text style={styles.signUpLink}>Don't have an account? Register</Text></TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default PatientInitial;

const styles = StyleSheet.create({
    container : {
        width: '100%',
        height: '100%',
        backgroundColor : '#5BA2F4',
        alignItems : 'center',
        justifyContent : 'space-around'
    },
    doctor : {
        marginTop : 60
    },
    form : {
        width: '100%',
        alignItems : 'center',
        justifyContent : 'space-evenly'
    },
    title : {
        fontSize : 25,
        color: 'white',
        fontWeight : 'bold',
        letterSpacing : 2,
        marginVertical : 20
    },
    signUpLink : {
        marginTop: 20,
        color: 'white',
    }


})
