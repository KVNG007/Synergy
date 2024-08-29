import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from "@reduxjs/toolkit/query"

import { apiAuth } from '../features/auth/apiAuth';
import { apiStats } from '../features/stats/apiStats'

export const store = configureStore({
    reducer: {
        [apiAuth.reducerPath]: apiAuth.reducer,
        [apiStats.reducerPath]: apiStats.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat([
            apiAuth.middleware,
            apiStats.middleware,
        ]
    ),
});

// Use `typeof` to infer the type of `store`
export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];


setupListeners(store.dispatch);