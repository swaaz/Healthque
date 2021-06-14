import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import LandingPage from '../screens/LandingPage';
import LandingOption from '../screens/LandingOption';
import DoctorInitial from '../screens/DoctorInitial';
import PatientInitial from '../screens/PatientInitial';
import DoctorSignUp from '../screens/DoctorSignUp';
import PatientSignUp from '../screens/PatientSignUp';
import DoctorHomePage from '../screens/DoctorHomePage';
import AddDetails from '../screens/AddDetails';
import PatientHomePage from '../screens/PatientHomePage';


const screens = {
    PatientHomePage : {
        screen : PatientHomePage,
        navigationOptions : {
            headerShown : false
        }
    },
    AddDetails : {
        screen : AddDetails,
        navigationOptions : {
            headerShown : false
        }
    },
    DoctorHomePage : {
        screen : DoctorHomePage,
        navigationOptions : {
            headerShown : false
        }
    },
    PatientSignUp : {
        screen : PatientSignUp,
        navigationOptions : {
            headerShown : false
        }
    },
    DoctorSignUp : {
        screen : DoctorSignUp,
        navigationOptions : {
            headerShown : false
        }
    },
    DoctorInitial : {
        screen: DoctorInitial,
        navigationOptions : {
            headerShown : false
        }
    },
    LandingPage : {
        screen : LandingPage,
        navigationOptions : {
            headerShown : false
        }
    },
    LandingOption : {
        screen : LandingOption,
        navigationOptions : {
            headerShown : false
        }
    },
    PatientInitial : {
        screen : PatientInitial,
        navigationOptions : {
            headerShown : false
        }
    },
    
    
}

const AuthStack = createStackNavigator(screens);

export default createAppContainer(AuthStack);