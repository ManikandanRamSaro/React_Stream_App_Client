const INITIAL_STATE={
    isSignedIn : null
}
export default (state=INITIAL_STATE,action) => {  // if the state value is undefined that time, INITIAL_STATE is passed to State object
    switch (action.type) {
        case 'SIGN_IN':
            return { ...state,isSignedIn:true }
        case 'SIGN_OUT':   
            return { ...state,isSignedIn:false }  
        default:
            return state;
    }
}