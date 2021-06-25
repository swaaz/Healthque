import React, { useState } from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import AddNumber from '../components/AddNumber';
import AddOTP from '../components/AddOTP'

const PatientInitial = ({navigation}) => {
    const [isOtpSent, setIsOtpSent] = useState(false);
    const onSubmit =() => {
        navigation.navigate('PatientHomePage');
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
                        <AddNumber setIsOtpSent={setIsOtpSent} />
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
