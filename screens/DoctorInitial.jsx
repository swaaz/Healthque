import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const DoctorInitial = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Image
                    source={require('../assets/vectors//doctor.png')}
                    style={styles.doctor}
                />
                <View style={styles.form}>
                    <Text style={styles.title}>Login as Doctor</Text>
                    <TextInput  style={styles.input} placeholder={'Enter Contact Number'} />
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.submit}>Login</Text>
                    </TouchableOpacity>
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
