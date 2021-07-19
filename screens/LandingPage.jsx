import React, { useEffect } from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'

const LandingPage = ({navigation}) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            navigation.navigate('LandingOption')
          }, 3000);
    }, [])
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Image
                    source={require('../assets/vectors/girlSitting.png')}
                    style={styles.vector}
                />
                <Text style={styles.title}>Healthque</Text>
            </View>
        </SafeAreaView>
    )
}

export default LandingPage;

const styles = StyleSheet.create({
    container : {
        width: '100%',
        height: '100%',
        backgroundColor : '#5BA2F4',
        justifyContent  :'center',
        alignItems : 'center'
    },
    vector : {
        width: 350,
        height: 350
    },
    title : {
        position: 'absolute',
        fontSize : 30,
        color: 'white',
        textTransform : 'uppercase',
        letterSpacing : 4,
        bottom: 100,
        fontWeight : '700'
    }
})
