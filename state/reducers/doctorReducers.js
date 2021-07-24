const InitialState = {
        name: '',
        email : '',
        password: '',
        dateOfBirth : '',
        gender: '',
        designation : '',
        qualification  : '',
        licenseNumber : '',
        hospital : '',
}

const reducer = (state=InitialState, action) => {
    switch(action.type){
        case 'UPDATE_PROFILE':
            return state
        default: return state
    }
}

export default reducer;