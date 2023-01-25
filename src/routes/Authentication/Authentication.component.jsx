// import { async } from '@firebase/util';
// import { getRedirectResult } from 'firebase/auth' ;
// import { useEffect } from 'react'
import SingInForm from '../../components/sing-in-form/sing-in-form.component';
import SingUpForm from '../../components/sing-up-form/sing-up-form.component';
// import { /*auth ,*/ signInWithGooglePopup , signInWithGoogleRedirect , createUserDocumentFromAuth } from '../../utils/firebase/firebase-component'
import './Authentication.style.scss'

const Authentication = () => {

  // useEffect(() => {
  //   async function fetching (){
  //     const respons = await getRedirectResult(auth);
  //     if(respons) {
  //       const create = await createUserDocumentFromAuth(respons.user)
  //       console.log(create);
  //     }
  //   }
  //   fetching()
  // } , [])

  // const logGoogle = async () => {
  //   const {user} = await signInWithGooglePopup()
  //   const create = await createUserDocumentFromAuth(user)
  //   console.log(create);
  // }
 
  return (
    <div className='authentication-container'>
      <SingInForm />
      <SingUpForm />
    </div>
  );
};

export default Authentication;
