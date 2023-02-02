import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  setDoc,
  collection,
  writeBatch,
  query,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAFFMZ_HpC329boF-m50ugzBOD1E2vC9WE",
  authDomain: "crws-clothing-db.firebaseapp.com",
  projectId: "crws-clothing-db",
  storageBucket: "crws-clothing-db.appspot.com",
  messagingSenderId: "225652503747",
  appId: "1:225652503747:web:1be20775454d37b7315e76"
};

initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider() ;
provider.setCustomParameters({
    prompt : "select_account"
})

export const auth = getAuth() ;
export const signInWithGooglePopup = () => signInWithPopup(auth , provider) ;

// export const signInWithGoogleRedirect = () => signInWithRedirect(auth , provider) ;


export const db = getFirestore() ;

/** Start Add Product Shop In Database  **/

export const addCollectionAndDocuments = async (collectionKey , objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  
  objectsToAdd.forEach((object) => {
     const docRef = doc(collectionRef, object.title.toLowerCase());
     batch.set(docRef, object);
  });

  await batch.commit();
  console.log('done');
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categorise');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((snapshot) => snapshot.data())

};

/** End Add Product Shop In Database  **/

export const createUserDocumentFromAuth = async (userAuth , nameDisply={}) =>{
  
  const userDocRef = doc(db , 'users' , userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  
  if(!userSnapshot.exists()){

    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      
      await setDoc(userDocRef , {
        displayName ,
        email ,
        createdAt ,
        ...nameDisply

      })

    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef ;

}

export const createUsersWithEmailAndPassword = async (email , password) =>{
  if(!email || !password) return ;

  return await createUserWithEmailAndPassword(auth , email , password) ;
}

export const signsInWithEmailAndPassword = async (email , password) =>{
  if(!email || !password) return ;

  return await signInWithEmailAndPassword(auth , email , password) ;
}

export const signOutUser = async ()=>{
  return await signOut(auth) ;
}
 
export const onAuthStateChangedListner = (callback) => onAuthStateChanged(auth , callback)