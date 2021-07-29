export const updateStatePatient = (state) => {
    return {
        type: 'UPDATE_STATE_PATIENT',
        payload: state
    }
}
export const updateStateDoctor = (state) => {
    return {
        type: 'UPDATE_STATE_DOCTOR',
        payload: state
    }
}