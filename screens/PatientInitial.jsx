import React, { useEffect, useState } from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import AddNumber from '../components/AddNumber';
import AddOTP from '../components/AddOTP'
import firebase from '../firebase' ;
const PatientInitial = ({navigation}) => {

    const { auth } = firebaseSetup();

    const [isOtpSent, setIsOtpSent] = useState(false);
    const [confirm, setConfirm] = useState(null);
    const [code, setCode] = useState('');

    useEffect(() => {
        const unSubscribe = auth.onAuthStateChanged((authUser) => {
            console.log(authUser);
            if(authUser){
                navigation.navigate('PatientHome');
            }
        })
    });
            
    
    const onAddNumber = async(number) => {
        console.log(number);
        const confirmation = await auth().signInWithPhoneNumber(number);
        setConfirm(confirmation);
        setIsOtpSent(true);
    }

    const onSubmit = async(otp) => {
        try{
            const res = await confirm.confirm(otp);
            console.log(res);
        }
        catch(err){
            alert(JSON.stringify(err));
        }
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
                    {
                        isOtpSent?
                        <AddOTP navigation={onSubmit}/>
                        :
                        <AddNumber onAddNumber={onAddNumber} />
                    }
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
    


})
