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
        case 'UPDATE_STATE':
            return action.payload
        default: return state
    }
}

export default reducer;