import { db , auth } from '../../firebase'


const dbValue = db.collection('patients').doc('hEwopOnPibUJPK2XRHMa')

dbValue.onSnapshot((doc) => {
    if(doc.exists){
        console.log(doc.data())
    }
    else{
        console.log('no doc')
    }
})

const initialState = {
    name: '',
    gender: '',
    location : '',
    email : '',
    dateOfBirth: '',
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
const reducer = (state = initialState, action) => {
    switch(action.type){
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