import { combineReducers } from "redux"
import patientReducers from './patientReducers';
import doctorReducers from './doctorReducers';

const reducers = combineReducers({
    patient: patientReducers,
    doctor: doctorReducers
})

export default reducers;