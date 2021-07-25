
let initialState = {
    name: '',
    gender: '',
    location : '',
    email : '',
    age: '',
    medicalRecords : {
        surgery : [],
        medication : [],
        healthIssue : [],
        hospitalized : [],
        vaccination : [],
        gait: [],
        allergy : [],
        deformities : [],
        redFlags : [],
        general : {
            height: '',
            weight: '',
        }
    }
}
// auth.onAuthStateChanged((authUser) => {
//     if(authUser && authUser.displayName === 'patient'){
//         console.log(authUser.email)
//         const dbValue = db.collection('patients').doc(authUser.email)

//         dbValue.onSnapshot((doc) => {
//             // console.log(doc.data())
//             if(doc.exits){
//                 const data = doc.data();
//                 // console.log(data)
                
//                 initialState = {
//                     name: data.name,
//                     gender: data.gender,
//                     location : data.location,
//                     dateOfBirth: data.dateOfBirth,
//                     medicalRecords : {
//                         surgery : data.medicalRecords.surgery,
//                         medication : data.medicalRecords.medication,
//                         healthIssue : data.medicalRecords.healthIssue,
//                         hospitalized : data.medicalRecords.hospitalized,
//                         vaccination : data.medicalRecords.vaccination,
//                         gait: data.medicalRecords.gait,
//                         allergy : data.medicalRecords.allergy,
//                         deformities : data.medicalRecords.deformities,
//                         redFlags : data.medicalRecords.redFlags,
//                         general : {
//                             height: data.general.height,
//                             weight: data.general.height,
//                         }
//                     }
//                 }
//             }

//         })
//     }
//     else{
//         console.log('not patient')
//     }
// })


const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'UPDATE_STATE':
            return action.payload
        case 'ADD_SURGERY':
            return state
        case 'ADD_VACCINATION':
            return state
        case 'ADD_MEDICATION':
            return state
        case 'ADD_HEALTH_ISSUE':
            return state
        case 'ADD_HOSPITALIZED':
            return state
        case 'ADD_HEALTH_ISSUE':
            return state
        case 'ADD_GAIT':
            return state
        case 'ADD_ALLERGY':
            return state
        case 'ADD_DEFORMITIES':
            return state
        case 'ADD_RED_FLAGS':
            return state
        case 'ADD_GENERAL_HEIGHT':
            return state
        case 'ADD_GENERAL_WEIGHT':
            return state
        default: return state
    }

}

export default reducer;