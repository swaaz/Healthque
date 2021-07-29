let InitialState = {
        name: '',
        email : '',
        password: '',
        age : '',
        gender: '',
        degree :'',
        specialization  : '',
        licenseNumber : '',
        hospital : '',
}

const reducer = (state = InitialState, action) => {
    switch(action.type){
        case 'UPDATE_STATE_DOCTOR':
            return action.payload
        default: return state
    }
}

export default reducer;