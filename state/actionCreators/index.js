export const updateProfile = (profile) => {
    return {
        type: 'UPDATE_PROFILE',
        payload : profile
    }
}

export const updateState = (state) => {
    return {
        type: 'UPDATE_STATE',
        payload: state
    }
}