import React from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View , TextInput, StatusBar, KeyboardAvoidingView } from 'react-native'

const PatientSignUp = () => {
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
                        <TextInput style={styles.input} placeholderTextColor={'white'} placeholder={'Enter Full Name'} />
                        <TextInput style={styles.input} placeholderTextColor={'white'} placeholder={'Date of Birth'} />
                        <TextInput style={styles.input} placeholderTextColor={'white'} placeholder={'Gender'} />
                        <TextInput style={styles.input} placeholderTextColor={'white'} placeholder={'Weight'} />
                        <TextInput style={styles.input} placeholderTextColor={'white'} placeholder={'Height'} />
                        <TextInput style={styles.input} placeholderTextColor={'white'} placeholder={'Location'} />
                        
                    </KeyboardAvoidingView>
                    
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.message}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default PatientSignUp;

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
    }
})
