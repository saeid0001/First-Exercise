import { useState } from 'react' ;
import { createUsersWithEmailAndPassword , createUserDocumentFromAuth } from '../../utils/firebase/firebase-component';
import SingInput from '../form-input/form-input.component' ;
import Button from '../button/button.component' ;
import './sign-up.style.scss' ;
// import { UserContext } from '../../context/user.context'
import { setContex } from '../../store/user/user-action';
import { useDispatch } from 'react-redux';

const defultFormSingUp = {
    displyName : "" ,
    email : "" ,
    password : "" ,
    configPassword : "" ,
}

const SingUpForm = () => {
    
    const dispatch = useDispatch()
    const [signFile , setSignFile] = useState(defultFormSingUp) ;
    const { displyName , email , password , configPassword } = signFile ;
    // const { setContex } = useContext(UserContext) ;

    const handelChange = (e) =>{
        const { name , value } = e.target;
        setSignFile({...signFile , [name] : value})
    }

    const handelSubmited = async (e) =>{
        e.preventDefault();
        
        if(password !== configPassword) {
            alert("password is not equile") ;
            return ;
        }

        try {
            
            const {user} = await createUsersWithEmailAndPassword(email , password) ;
            await createUserDocumentFromAuth(user , {displyName})
            dispatch(setContex(user)) ;
            setSignFile(defultFormSingUp) ;

        } catch (error) {

            if(error.code === "auth/weak-password"){
                alert("passprw is short")
            } else {
                console.log("in error from FireBase" , error);
            }

        }
    }


  return (
    <div className='sign-up-container'>
        <h1>Sing Up Whit Email & Password</h1>
        <span>Don't account</span>
        <form onSubmit={handelSubmited}>

            <SingInput lable="Name" type='text' value={displyName} name="displyName" onChange={handelChange} required />

            <SingInput lable="Email" type='email' value={email} name="email" onChange={handelChange} required />

            <SingInput lable="Password" type='password' value={password} name="password" onChange={handelChange} required />

            <SingInput lable="Config Password" type='password' value={configPassword} name="configPassword" onChange={handelChange} required />

            <Button type='submit'>Submit</Button>

        </form>
    </div>
  )
}

export default SingUpForm