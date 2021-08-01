import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'

const AddNumber = (props) => {
    const [cred, setCred] = useState({
        mail : '',
        password: ''
    });
    return (
        <KeyboardAvoidingView style={styles.Container} behavior={'height'}>
            <TextInput value={cred.mail} onChangeText={val =>setCred(prev => ({...prev, mail: val}))} style={styles.input} placeholder={'Email'} />
            <TextInput secureTextEntry={true} value={cred.password} onChangeText={val =>setCred(prev => ({...prev, password: val}))} style={styles.input} placeholder={'Password'} />
            <TouchableOpacity
            style={styles.button}
            onPress={() => props.onSubmit(cred)}
            >
                <Text style={styles.submit}>Submit</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

export default AddNumber;

const styles = StyleSheet.create({
    Container : {
        width: '100%',
        alignItems: 'center'
    },
    input : {
        width: '60%',
        backgroundColor : 'white',
        height: 50,
        borderRadius : 10,
        paddingHorizontal : 20,
        marginVertical : 10
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
