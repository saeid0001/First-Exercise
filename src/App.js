import { Routes, Route } from "react-router-dom";
import { useEffect } from 'react' ;
import {onAuthStateChangedListner , createUserDocumentFromAuth} from './utils/firebase/firebase-component';
import { setContex } from './store/user/user-action';


import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/Authentication/Authentication.component";
import Shop from "./routes/Shop/shop.component";
import CheckOut from "./components/chckout/checkout.component";
import { useDispatch } from 'react-redux';




const App = () => {

  const dispatch = useDispatch()

  useEffect(()=>{
      const changes = onAuthStateChangedListner((user)=>{
          if(user) {
              createUserDocumentFromAuth(user)
          }
          dispatch(setContex(user))
      })
      return changes ;
  } ,[])

  

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<CheckOut />} />
      </Route>
    </Routes>
  );
};

export default App;
