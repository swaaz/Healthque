import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DoctorInitial from './screens/DoctorInitial';
import LandingOption from './screens/LandingOption';
import LandingPage from './screens/LandingPage';
import PatientInitial from './screens/PatientInitial';

export default function App() {
  return (
    <PatientInitial />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
