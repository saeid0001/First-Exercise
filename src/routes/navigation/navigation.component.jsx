import { Fragment , useContext } from 'react';
import { Outlet } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import CartIcon from '../../components/cart-icon/cart-icon';
import { UserContext } from '../../context/user.context'; 
import { CartContext } from '../../context/cart.context'; 

import { signOutUser } from '../../utils/firebase/firebase-component';


import {NavigationBar , LogoContainer , NavLinksContainer , NavLink} from  './navigation.styles.jsx';

const Navigation = () => {

  const { contex } = useContext(UserContext) ;
  const { iscart } = useContext(CartContext) ;

  // const handelsingout = async () =>{
    // this is for signout fro why symbol
  //   await signOutUser() ;
  //   setContex(null) ;
  // }

  return (
    <Fragment>
      <NavigationBar>
        <LogoContainer to='/'>
          <CrwnLogo className='logo' />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to='/shop'>
            SHOP
          </NavLink>
          {contex ? (
            <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
            ) 
            : ( <NavLink to='/auth'>
                  SIGN IN
                </NavLink>
        )}
        <CartIcon />
        </NavLinksContainer>
        {iscart && <CartDropdown />}
      </NavigationBar>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;