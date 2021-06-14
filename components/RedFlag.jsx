import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const RedFlag = (props) => {
    return (
        <View style={styles.label}>
            <Text style={styles.labelText}>{props.label}</Text>
        </View>
    )
}

export default RedFlag;

const styles = StyleSheet.create({
    label : {
        paddingHorizontal : 15,
        paddingVertical : 8,
        borderRadius : 20,
        borderWidth : 2,
        borderColor : '#034C81',
        marginHorizontal : 5,
        marginVertical : 3,
        backgroundColor : 'white',
        elevation : 3
    },
    labelText : {
        fontWeight : 'bold',
        color: '#5BA2F4'
    }
})
