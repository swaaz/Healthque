import React, { useState } from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import AddNumber from '../components/AddNumber'
import AddOTP from '../components/AddOTP';

const DoctorInitial = () => {
    const [isOtpSent, setIsOtpSent] = useState(false);
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Image
                    source={require('../assets/vectors//doctor.png')}
                    style={styles.doctor}
                />
                <View style={styles.form}>
                    <Text style={styles.title}>Login as Doctor</Text>
                    {
                        isOtpSent?
                        <AddOTP/>
                        :
                        <AddNumber setIsOtpSent={setIsOtpSent} />
                    }
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
    


})
