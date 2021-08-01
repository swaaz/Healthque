import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import LandingPage from '../screens/LandingPage';
import LandingOption from '../screens/LandingOption';
import DoctorInitial from '../screens/DoctorInitial';
import PatientInitial from '../screens/PatientInitial';
import DoctorSignUp from '../screens/DoctorSignUp';
import PatientSignUp from '../screens/PatientSignUp';
import AddHealthIssuesPage from '../screens/AddHealthIssuesPage'
import AddHospitalizationPage from '../screens/AddHospitalizationPage'
import AddVaccinePage from '../screens/AddVaccinePage'
import AddSurgeryPage from '../screens/AddSurgeryPage'
import AddAllergyPage from '../screens/AddAllergyPage'
import AddMedicationPage from '../screens/AddMedicationPage'
import AddGeneralInfoPage from '../screens/AddGeneralInfoPage'
import AddRedFlagsPage from '../screens/AddRedFlagsPage'
import AddGaitPage from '../screens/AddGaitPage'
import AddDeformitiesPage from '../screens/AddDeformitiesPage'
import SurgeryHistoryPage from '../screens/SurgeryHistoryPage'
import VaccineHistoryPage from '../screens/VaccineHistoryPage'
import HospitalizationHistoryPage from '../screens/HospitalizationHistoryPage'
import MedicineHistoryPage from '../screens/MedicineHistoryPage'
import DoctorHomePage from '../screens/DoctorHomePage';
import AddDetails from '../screens/AddDetails';
import PatientHomePage from '../screens/PatientHomePage';
import EmailVerification from '../screens/EmailVerification';
import PatientHomePageDoctor from '../screens/PatientHomePageDoctor';



const screens = {
	
	LandingPage : {
        screen : LandingPage,
        navigationOptions : {
            headerShown : false
        }
    },
	PatientHomePageDoctor : {
		screen : PatientHomePageDoctor,
		navigationOptions : {
            headerShown : false
        }
	},
    PatientHomePage : {
        screen : PatientHomePage,
        navigationOptions : {
            headerShown : false
        }
    },
	EmailVerification : {
        screen : EmailVerification,
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
    LandingOption : {
        screen : LandingOption,
        navigationOptions : {
            headerShown : false
        }
    },
    
    PatientSignUp: {
		screen: PatientSignUp,
		navigationOptions: {
			headerShown: false
		}
	},
	DoctorSignUp: {
		screen: DoctorSignUp,
		navigationOptions: {
			headerShown: false
		}
	},
	DoctorInitial: {
		screen: DoctorInitial,
		navigationOptions: {
			headerShown: false
		}
	},
	
	LandingOption: {
		screen: LandingOption,
		navigationOptions: {
			headerShown: false
		}
	},
	PatientInitial: {
		screen: PatientInitial,
		navigationOptions: {
			headerShown: false
		}
	},
	AddHealthIssuesPage: {
		screen: AddHealthIssuesPage,
		navigationOptions: {
			headerShown: false
		}
	},
	AddHospitalizationPage: {
		screen: AddHospitalizationPage,
		navigationOptions: {
			headerShown: false
		}
	},
	AddVaccinePage: {
		screen: AddVaccinePage,
		navigationOptions: {
			headerShown: false
		}
	},
	AddSurgeryPage: {
		screen: AddSurgeryPage,
		navigationOptions: {
			headerShown: false
		}
	},
	AddAllergyPage: {
		screen: AddAllergyPage,
		navigationOptions: {
			headerShown: false
		}
	},
	AddMedicationPage: {
		screen: AddMedicationPage,
		navigationOptions: {
			headerShown: false
		}
	},
	AddGeneralInfoPage: {
		screen: AddGeneralInfoPage,
		navigationOptions: {
			headerShown: false
		}
	},
	AddRedFlagsPage: {
		screen: AddRedFlagsPage,
		navigationOptions: {
			headerShown: false
		}
	},
	AddGaitPage: {
		screen: AddGaitPage,
		navigationOptions: {
			headerShown: false
		}
	},
	AddDeformitiesPage: {
		screen: AddDeformitiesPage,
		navigationOptions: {
			headerShown: false
		}
	},
	SurgeryHistoryPage: {
		screen: SurgeryHistoryPage,
		navigationOptions: {
			headerShown: false
		}
	},
	VaccineHistoryPage: {
		screen: VaccineHistoryPage,
		navigationOptions: {
			headerShown: false
		}
	},
	HospitalizationHistoryPage: {
		screen: HospitalizationHistoryPage,
		navigationOptions: {
			headerShown: false
		}
	},
	MedicineHistoryPage: {
		screen: MedicineHistoryPage,
		navigationOptions: {
			headerShown: false
		}
	},
    

}

const AuthStack = createStackNavigator(screens);

export default createAppContainer(AuthStack);