// In Store file, I have used persistStore & createLogger as a Middleware.
// persistStore: Using persistStore we can save our data in offline mode & for that you have to mention that reducer name in whitelist.
// createLogger: will give you information about your previous state, action dispatch & next state(updated value).

import AsyncStorage from '@react-native-community/async-storage';
import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';
import rootReducer from '../reducers/index';
// Middleware: Redux Persist Config
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['employeeDetailReducer'],
  blacklist: [],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(createLogger()));
let persistor = persistStore(store);
export {store, persistor};
