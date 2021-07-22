import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import RedFlag from '../components/RedFlag';
import {auth} from '../firebase'
const PatientHomePage = ({navigation}) => {
    const signOut = () => {
        auth.signOut()
        .then(()=> navigation.navigate('LandingOption') )
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
            <Image
                    source={{uri : 'https://avatars.githubusercontent.com/u/42874695?v=4'}}
                    style={styles.profile}
                />
                <View  style={styles.group}>
                    <Text style={styles.name}>Swasthik Shetty</Text>
                    <Text style={styles.gender}>male</Text>
                </View>

                <Text style={styles.location}>Mangaluru</Text>

                <View style={styles.row}>
                    <View style={styles.col}>
                        <Text style={styles.digit}>20</Text>
                        <Text style={styles.digitTitle}>Age</Text>
                    </View>
                    <View style={styles.col}>
                        <Text style={styles.digit}>65</Text>
                        <Text style={styles.digitTitle}>Weight</Text>
                    </View>
                    <View style={styles.col}>
                        <Text style={styles.digit}>5'7</Text>
                        <Text style={styles.digitTitle}>Height</Text>
                    </View>
                </View>

                <View style={styles.card}>
                    <TouchableOpacity onPress={signOut} style={styles.button}>
                        <Image
                            source={require('../assets/icons/plus.png')}
                            style={styles.plus}
                        />
                    </TouchableOpacity>
                    <Text style={styles.title}>History</Text>

                    <View style={styles.scrollRow}>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        >
                            <TouchableOpacity>
                                <View style={styles.buttonHistory}>
                                    <Image
                                        source={require('../assets/icons/surgery.png')}
                                        style={styles.icons}
                                    />
                                    <Text style={styles.buttonTitle}>Surgery</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.buttonHistory}>
                                    <Image
                                        source={require('../assets/icons/surgery.png')}
                                        style={styles.icons}
                                    />
                                    <Text style={styles.buttonTitle}>Surgery</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <View style={styles.buttonHistory}>
                                    <Image
                                        source={require('../assets/icons/surgery.png')}
                                        style={styles.icons}
                                    />
                                    <Text style={styles.buttonTitle}>Surgery</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.buttonHistory}>
                                    <Image
                                        source={require('../assets/icons/surgery.png')}
                                        style={styles.icons}
                                    />
                                    <Text style={styles.buttonTitle}>Surgery</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <View style={styles.buttonHistory}>
                                    <Image
                                        source={require('../assets/icons/surgery.png')}
                                        style={styles.icons}
                                    />
                                    <Text style={styles.buttonTitle}>Surgery</Text>
                                </View>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>

                    <Text style={styles.title}>Physical Details</Text>
                    <View style={styles.rowTwo}>
                        <TouchableOpacity style={styles.ButtonPhysical}>
                            <Text style={styles.buttonTitle}>Deformities</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.ButtonPhysical}>
                            <Text style={styles.buttonTitle}>Allergies</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.ButtonPhysical}>
                            <Text style={styles.buttonTitle}>Gait</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.title}>Red Flags</Text>
                    <View style={styles.labels}>
                        <RedFlag label={'swaaz'} />
                        <RedFlag label={'swaaz'} />
                        <RedFlag label={'swaaz'} />
                        <RedFlag label={'swaaz'} />
                        <RedFlag label={'swaaz'} />
                        <RedFlag label={'swaaz'} />
                        <RedFlag label={'swaaz'} />
                        <RedFlag label={'swaaz'} />
                        <RedFlag label={'swaaz'} />
                    </View>

                    

                </View>
            </View>
        </SafeAreaView>
    )
}

export default PatientHomePage

const styles = StyleSheet.create({
    container : {
        width: '100%',
        height : '100%',
        backgroundColor : 'white',
        alignItems : 'center',
        justifyContent : 'space-between',
    },
    profile : {
        width: 100,
        height: 100,
        borderRadius : 100/2,
        marginTop : '10%'
    },
    name : {
        fontSize : 30,
        fontWeight : 'bold',
        letterSpacing : 2
    },

    gender : {
        color: 'grey'
    },
    location : {
        fontSize : 23,
        fontWeight : '100',
        letterSpacing : 2
    },
    group : {
        alignItems : 'center'
    },
    row : {
        width: '90%',
        alignItems : 'center',
        flexDirection : 'row',
        justifyContent : 'space-around',
        marginBottom : 30
    },
    col : {
        alignItems : 'center'
    },
    digit : {
        fontSize : 30,
        fontWeight : 'bold'
    },
    digitTitle : {
        color: 'grey'
    },
    card : {
        width: '100%',
        backgroundColor : '#5BA2F4',
        alignItems : 'center',
        paddingBottom : 30,
        borderTopRightRadius : 80,
        borderTopLeftRadius : 80,
        elevation : 5
        // height: '60%',
    },
    button : {
        width: 70,
        height: 70,
        borderRadius : 70/2,
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : '#034C81',
        marginTop : -30,
        elevation : 3
    },
    plus : {
        width: 30,
        height : 30
    },
    title : {
        fontSize : 30,
        fontWeight : 'bold',
        color: 'white',
        letterSpacing : 2,
        marginVertical : 20
    },
    scrollRow : {
        width: '100%',
    },
    buttonHistory : {
        alignItems : 'center',
        width: 150,
        backgroundColor : '#034C81',
        paddingVertical : 15,
        borderRadius : 15,
        marginHorizontal : 10,
        elevation : 5
    },
    icons : {
        width: 30,
        height: 30
    },
    buttonTitle : {
        color: 'white',
        fontSize : 18,
        letterSpacing : 1
    },
    rowTwo : {
        flexDirection : 'row',
        justifyContent : 'space-evenly',
        alignItems : 'center',
        width: '100%'
    },
    ButtonPhysical : {
        width: '30%',
        backgroundColor : '#034C81',
        alignItems : 'center',
        justifyContent : 'center',
        paddingVertical : 20,
        borderRadius : 15,
        elevation : 5
    },
    labels : {
        width: '100%',
        height: 60,
        flexDirection : 'row',
        alignContent : 'center',
        flexWrap : 'wrap',
        justifyContent : 'space-evenly',
        // paddingBottom : 50,
        // marginTop : 50
    }
})
