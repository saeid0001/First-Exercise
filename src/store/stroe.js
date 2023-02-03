import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistReducer , persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

import { rootReducer } from './root-reducer';

const middleware = [process.env.NODE_ENV === 'development' && logger].filter(
    Boolean
  );
  
const composeEnhancers =
(process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
compose;

const persistConfig = {
    key : "root" ,
    storage ,
    blacklist : ["user"]
}

const persistsReducer = persistReducer(persistConfig , rootReducer) ;

const composeEnhancer = composeEnhancers(applyMiddleware(...middleware)) ;

export const store = createStore(persistsReducer , undefined , composeEnhancer)

export const persistor = persistStore(store) ;