export default (state={}, action)=>{
    switch (action.type) {
        case 'LOGIN':
            return {
                uid:action.uid
            }
        case 'LOGOUT':
            return {} 
        case 'CREATE_USER_SUCCESS':
            const userId = action.user.uid
            return{
                ...state 
            }
        case 'CREATE_USER_FAIL':
            return{
                ...state
            }
        default:
            return state;
    }
}