import React, { useEffect, useState } from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import AddNumber from '../components/AddNumber'
import { auth, db } from '../firebase'
import { useDispatch } from 'react-redux';
import { updateStateDoctor } from '../state/actionCreators';

const DoctorInitial = ({navigation}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if(authUser && authUser.displayName === 'doctor'){
                const dbValue = db.collection('doctors').doc(authUser.email)
                dbValue.onSnapshot((doc) => {
                    dispatch(updateStateDoctor(doc.data()))
                })
                navigation.navigate('DoctorHomePage');
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
                    source={require('../assets/vectors//doctor.png')}
                    style={styles.doctor}
                />
                <View style={styles.form}>
                    <Text style={styles.title}>Login as Doctor</Text>
                        <AddNumber onSubmit={onSubmit} />
                    <TouchableOpacity onPress={() => navigation.navigate('DoctorSignUp')}><Text style={styles.signUpLink}>Don't have an account? Register</Text></TouchableOpacity>

                </View>
            </View>
        </SafeAreaView>
    )
}

export default DoctorInitial;

const styles = StyleSheet.create({
    container : {
        width: '100%',
        height: '100%',
        backgroundColor : '#5BA2F4',
        alignItems : 'center',
        justifyContent : 'space-around'
    },
    doctor : {
        marginTop : 40
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
