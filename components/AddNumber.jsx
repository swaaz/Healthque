import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'

const AddNumber = (props) => {
    return (
        <>
            <TextInput  style={styles.input} placeholder={'Enter Contact Number'} />
            <TouchableOpacity
            style={styles.button}
            onPress={() => props.setIsOtpSent(true)}
            >
                <Text style={styles.submit}>Submit</Text>
            </TouchableOpacity>
        </>
    )
}

export default AddNumber;

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