import { useState } from 'react' ;
import { signsInWithEmailAndPassword , signInWithGooglePopup , createUserDocumentFromAuth } from '../../utils/firebase/firebase-component';
import SingInput from '../form-input/form-input.component' ;
import Button from '../button/button.component' ;
import './sign-in.style.scss' ;
import { BUTTON_TYPE_STYLE } from '../button/button.component';

const defultFormSingUp = {
    email : "" ,
    password : "" ,
}

const SingInForm = () => {

    const [signFile , setSignFile] = useState(defultFormSingUp) ;
    const { email , password } = signFile ;


    const logGoogle = async () => {
        await signInWithGooglePopup()
    }

    const handelChange = (e) =>{
        const { name , value } = e.target;
        setSignFile({...signFile , [name] : value})
    }

    const handelSubmited = async (e) =>{
        e.preventDefault();

        try {
            await signsInWithEmailAndPassword(email , password)
            setSignFile(defultFormSingUp) ;

        } catch (e) {
            if(e.code === "auth/network-request-failed") {
                console.log("فیلترشکن خود را روشن کنید");
            }else {
                console.log(e);
            }
            
        }
    }


  return (
    <div className='sign-up-container'>
        <h1>Sing in Whit Email & Password</h1>
        <span>Aulredy have a account</span>

        <form onSubmit={handelSubmited}>

            <SingInput lable="Email" type='email' value={email} name="email" onChange={handelChange} required />

            <SingInput lable="Password" type='password' value={password} name="password" onChange={handelChange} required />

            <div style={{
                display:"flex" ,
                justifyContent :"space-between" ,
                
            }}>
                <Button type='submit' style={{marginRight : "10px"}}>Submit</Button>
                <Button buttonType={BUTTON_TYPE_STYLE.google} type="button" onClick={logGoogle}>Sign In With Google</Button>
            </div>
            
        </form>

            
    </div>
  )
}

export default SingInForm