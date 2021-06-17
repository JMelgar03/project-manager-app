import {firebase, googleAuthProvider} from '../firebase/firebase-config';
import Swal from 'sweetalert2';
import { types } from "../types/types";
import { finishUiLoading, startUiLoading } from './uiLoading';
import { projectLogOut } from './project';
import { fileUploadImage } from '../helpers/fileUploadImage';


export const startGoogleLogin = ()=>{
  return(dispatch)=>{
    firebase.auth().signInWithPopup(googleAuthProvider)
    .then(({user}) => {
      dispatch(login(user.uid, user.displayName, user.email,user.photoURL))
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
     
      dispatch( login(user.uid, user.displayName, user.emailVerified, user.email,user.photoURL) );
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
          dispatch(sendVerificationEmail());
          dispatch( login(user.uid, user.displayName, user.emailVerified, user.email,user.photoURL) );
          dispatch(finishUiLoading());
      })
      .catch(e=>{
        dispatch(finishUiLoading());
        Swal.fire('Error', e.message, 'error');
       
      })

    }

}

export const startUploadImage = (file)=>{
  return async(dispatch)=>{
    dispatch(startUiLoading());
    const urlPhoto = await fileUploadImage(file);

    const user = await firebase.auth().currentUser;
    user.updateProfile({
     photoURL: urlPhoto
    }).then(function(){ 
      dispatch(finishUiLoading());
      dispatch(login(user.uid,user.displayName, user.emailVerified, user.email, user.photoURL))
    }).catch(e=>{
      dispatch(finishUiLoading());
      Swal.fire('Error', e.message, 'error');
    })
  }
    
}



export const startUpdateName = (name)=>{
  return async(dispatch)=>{
    dispatch(startUiLoading());
    const user = await firebase.auth().currentUser;
    user.updateProfile({
      displayName: name
    }).then(function(){ 
      dispatch(finishUiLoading());
      dispatch(login(user.uid,user.displayName, user.emailVerified, user.email,user.photoURL))
    }).catch(e=>{
      dispatch(finishUiLoading());
      Swal.fire('Error', e.message, 'error');
    })
  }
}

export const startUpdateEmail = (email)=>{
  return async(dispatch)=>{
    dispatch(startUiLoading());
    const user = await firebase.auth().currentUser;
    user.updateEmail(email)
    .then(function(){ 
      dispatch(sendVerificationEmail());
      dispatch(login(user.uid,user.displayName, user.emailVerified, user.email,user.photoURL));
      dispatch(finishUiLoading());
    }).catch(e=>{
      dispatch(finishUiLoading());
      Swal.fire('Error', e.message, 'error');
    })
  }
}

export const startUpdatePassword = (password)=>{
  return (dispatch)=>{
    const user = firebase.auth().currentUser;
    dispatch(startUiLoading());
    user.updatePassword(password)
    .then(function(){
      dispatch(finishUiLoading())
      Swal.fire('Complete','Password Updated','success')
    }
    )
    .catch(e=>{
      dispatch(finishUiLoading())
      Swal.fire('Error', e.message, 'error');
    })
  }
  
}


export const sendVerificationEmail = ()=>{
  return async(dispatch)=>{
    dispatch(startUiLoading());
    await firebase.auth().currentUser.sendEmailVerification();

  dispatch(finishUiLoading());
  }
}


export const login = (uid, displayName, emailVerified, email,photoURL)=>({
  type: types.login,
  payload: {
      uid,
      displayName,
      emailVerified,
      email,
      photoURL
  }
});

export const startlogOut = ()=>{
  return async(dispatch)=>{
    await firebase.auth().signOut()
    .then(
      dispatch(logOut()),
      dispatch(projectLogOut())      
    )
    .catch(e=>{
      console.log(e)
    })

  }
}

export const logOut = ()=>({
  type: types.logout
})