import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import CartIcon from '../../components/cart-icon/cart-icon';

import { signOutUser } from '../../utils/firebase/firebase-component';
import { useSelector } from 'react-redux'
import { selectContex } from '../../store/user/user-selector';
import { selectCartOpen } from '../../store/cart/cart-selector.js'

import {NavigationBar , LogoContainer , NavLinksContainer , NavLink} from  './navigation.styles.jsx';


const Navigation = () => {

  const contex = useSelector(selectContex)

  const iscart= useSelector(selectCartOpen) ;

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