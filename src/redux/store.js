import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";

// rootReducer'ı burada combineReducers ile tanımladık
const rootReducer = combineReducers({
    contacts: contactsReducer,
    filters: filtersReducer,
});

// Persist konfigürasyonu
const persistConfig = {
    key: "root",
    storage,
    whitelist: ["contacts"], // yalnızca "contacts" state'ini persist et
};

// Persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Store'un oluşturulması
export const store = configureStore({
    reducer: persistedReducer, // persistedReducer'ı kullandık
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
            },
        }),
});

// Persistor objesinin oluşturulması
export const persistor = persistStore(store);

export default store; // default export yapıyoruz
