import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'

const AddOTP = (props) => {
    const [otp, setOtp] = useState();
    return (
        <>
            <TextInput value={otp} onChangeText={val => setOtp(val)}   style={styles.input} placeholder={'Enter OTP'} />
            <TouchableOpacity onPress={() => props.navigation(otp)} style={styles.button}>
                <Text style={styles.submit}>Submit</Text>
            </TouchableOpacity>
        </>
    )
}

export default AddOTP;

const styles = StyleSheet.create({
    input : {
        width: '60%',
        backgroundColor : 'white',
        height: 50,
        borderRadius : 10,
        paddingHorizontal : 20,
        marginVertical : 20
    },
    button : {
        width: 200,
        backgroundColor : '#034C81',
        alignItems : 'center',
        justifyContent : 'center',
        height: 40,
        borderRadius : 10,
        
    },
    submit  :{
        color: 'white',
        fontWeight : 'bold'
    }
})
