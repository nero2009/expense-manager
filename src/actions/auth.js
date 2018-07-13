import {firebase, googleAuthProvider} from '../firebase/firebase'

export const login =(uid)=>({
    type:'LOGIN',
    uid
})
export const startLoginWithGoogle =()=>{
    return ()=>{
        return firebase.auth().signInWithPopup(googleAuthProvider)
    }
}

export const startLogin =(email,pass)=>{
    return (dispatch)=>{
        return firebase.auth().signInWithEmailAndPassword(email,pass)
                .catch((err)=>{
                    console.log('Signin error', err)
                })
    }
}

export const logout =(uid)=>({
    type:'LOGOUT'
    
})

export const startLogout =()=>{
    return ()=>{
        return firebase.auth().signOut()
    }
}

export const createUser =(email,pass)=>{
    return (dispatch)=>{
        return firebase.auth().createUserWithEmailAndPassword(email,pass)
                .then((res)=>{
                    return dispatch(createUserSuccess(res))
                })
                .catch((error,dispatch)=>{
                    
                    if(error.code === 'auth/email-already-in-use'){
                        var credential = firebase.auth.EmailAuthProvider.credential(email, pass)
                        firebase.auth().signInWithPopup(googleAuthProvider)
                            .catch(function(error){
                                console.log('Google sign in error')
                            }).then(function(){
                                firebase.auth().currentUser.linkAndRetrieveDataWithCredential(credential)
                                .then(function(user){
                                    console.log("Account linking success", user)
                                }, function(error){
                                    console.log("Account linking error", error)
                                })
                            })

                        }
                        
                    })
                }
    
}

export const createUserSuccess=(res)=>{
    return {
        type: 'CREATE_USER_SUCCESS',
        user: res
    }
}

export const createUserFail=(res)=>{
    return{
        type:'CREATE_USER_FAIL'
    }
}