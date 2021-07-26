import React from 'react'
import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const AddDetails = ({navigation}) => {
    return (
       <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.section}>
                    <Image
                        source={{ uri : 'https://avatars.githubusercontent.com/u/42874695?v=4'}}
                        style={styles.profile}
                    />
                    <Text style={styles.name}>Swasthik Shetty</Text>
                    <Text style={styles.title}>Add Details</Text>

                    <View style={styles.row}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('AddSurgeryPage')}
                        >
                            <View style={styles.button}>
                                <Image
                                    source={require('../assets/icons/surgery.png')}
                                    style={styles.icon}
                                />
                                <Text style={styles.buttonName}>Surgery</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.navigate('AddVaccinePage')}
                        >
                            <View style={styles.button}>
                                <Image
                                    source={require('../assets/icons/vaccination.png')}
                                    style={styles.icon}
                                />
                                <Text style={styles.buttonName}>Vaccination</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.row}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('AddMedicationPage')}
                        >
                            <View style={styles.button}>
                                <Image
                                    source={require('../assets/icons/medic.png')}
                                    style={styles.icon}
                                />
                                <Text style={styles.buttonName}>Medication</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.navigate('AddHealthIssuesPage')}
                        >
                            <View style={styles.button}>
                                <Image
                                    source={require('../assets/icons/healthrecord.png')}
                                    style={styles.icon}
                                />
                                <Text style={styles.buttonName}>Health Issue</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.row}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('AddHospitalizationPage')}
                        >
                            <View style={styles.button}>
                                <Image
                                    source={require('../assets/icons/hospital.png')}
                                    style={styles.icon}
                                />
                                <Text style={styles.buttonName}>Hospitalized</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.navigate('AddGeneralInfoPage')}
                        >
                            <View style={styles.button}>
                                <Image
                                    source={require('../assets/icons/general.png')}
                                    style={styles.icon}
                                />
                                <Text style={styles.buttonName}>General</Text>
                            </View>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.row}>
                        <TouchableOpacity
                             onPress={() => navigation.navigate('AddAllergyPage')}

                        >
                            <View style={styles.button}>
                                <Text style={styles.buttonName}>Allergies</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.navigate('AddGaitPage')}
                        >
                            <View style={styles.button}>
                                <Text style={styles.buttonName}>Gait</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.row}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('AddDeformitiesPage')}
                        >
                            <View style={styles.button}>
                                <Text style={styles.buttonName}>Deformities</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                             onPress={() => navigation.navigate('AddRedFlagsPage')}
                        >
                            <View style={styles.button}>
                                <Text style={styles.buttonName}>Red Flags</Text>
                            </View>
                        </TouchableOpacity>
                    </View>



                </View>
            </View>
       </SafeAreaView>
    )
}

export default AddDetails

const styles = StyleSheet.create({
    container : {
        width: '100%',
        height : '100%',
        backgroundColor : '#5BA2F4',
        alignItems  : 'center'
    },
    section : {
        width: '100%',
        backgroundColor : 'white',
        paddingTop : StatusBar.currentHeight,
        alignItems : 'center',
        height: '95%',
        borderBottomRightRadius : 50,
        borderBottomLeftRadius : 50,
        elevation : 3
    },
    profile : {
        width: 100,
        height: 100,
        borderRadius : 100/2,
        marginTop : 30
    },
    name : {
        fontSize : 20,
        paddingVertical : 10
    },
    title : {
        fontSize : 25,
        fontWeight : 'bold',
        paddingVertical : 20
    },
    row : {
        width : '100%',
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-evenly'
    },
    button : {
        width: 180,
        backgroundColor : '#5BA2F4',
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'center',
        borderRadius : 10,
        paddingVertical : 15,
        marginVertical : 20
        // marginHorizontal : 10
    },
    icon : {
        width: 20,
        height: 20,
    },
    buttonName : {
        color: 'white',
        fontSize : 20,
        letterSpacing : 1,
        marginHorizontal : 10

    }
})
