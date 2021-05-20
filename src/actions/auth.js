import {firebase, googleAuthProvider} from '../firebase/firebase-config';
import Swal from 'sweetalert2';
import { types } from "../types/types";
import { finishUiLoading, startUiLoading } from './uiLoading';


export const startGoogleLogin = ()=>{
  return(dispatch)=>{
    firebase.auth().signInWithPopup(googleAuthProvider)
    .then(({user}) => {
      dispatch(login(user.uid, user.displayName))
    })
    .catch(e => {
      
      Swal.fire('Error', e.message, 'error');
     
  })
  }
}

export const loginEmailAndPassword = (email, password) =>{
  return(dispatch)=>{
      dispatch(startUiLoading());
     firebase.auth().signInWithEmailAndPassword(email, password)
     .then( ({ user }) =>{
      dispatch( login(user.uid, user.displayName) );
      dispatch(finishUiLoading());
     })
     .catch(e=>{
      dispatch(finishUiLoading());
       Swal.fire('Error', e.message, 'error');
     })

  }

}

export const createUserEmailAndPassword = (name, lastname, email, password )=>{
    return(dispatch)=>{
      dispatch(startUiLoading());
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(async({user})=>{
          await user.updateProfile({displayName: `${name} ${lastname}`});
          dispatch( login(user.uid, user.displayName) );
          dispatch(finishUiLoading());
      })
      .catch(e=>{
        dispatch(finishUiLoading());
        Swal.fire('Error', e.message, 'error');
       
      })

    }

}


export const login = (uid, displayName)=>({
  type: types.login,
  payload: {
      uid,
      displayName
  }
});

export const startlogOut = ()=>{
  return async(dispatch)=>{
    await firebase.auth().signOut()
    .then(
      dispatch(logOut())
    )
    .catch(e=>{
      console.log(e)
    })
  }
}

export const logOut = ()=>({
  type: types.logout
})