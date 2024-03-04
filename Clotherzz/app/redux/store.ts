import AsyncStorage from '@react-native-async-storage/async-storage';
import { HomeReducer } from './home';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
    HomeReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
  devTools: true,
});

type AppDispatchType = typeof store.dispatch;
type RootStateType = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatchType>();
export const persistor = persistStore(store);
export default store;
