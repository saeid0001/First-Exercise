import { BaseButton , GoogleSignIn , Inverted } from './Button.style'

export const BUTTON_TYPE_STYLE = {
    base : "base" ,
    google : "google-sign-in" ,
    inverted : "inverted" ,
}

const getButton = (buttonType = BUTTON_TYPE_STYLE.base) =>(
  {
    [BUTTON_TYPE_STYLE.base] : BaseButton , 
    [BUTTON_TYPE_STYLE.google] : GoogleSignIn , 
    [BUTTON_TYPE_STYLE.inverted] : Inverted , 
  }[buttonType]
)

const Button = ({children , buttonType , ...other}) => {
  const Custommers = getButton(buttonType) 
  return (
    <Custommers {...other}>{children}</Custommers>
  )
}

export default Button ;