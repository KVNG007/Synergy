import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from "@reduxjs/toolkit/query"


import { apiStats } from '../features/stats/apiStats'

export const store = configureStore({
    reducer: {
        [apiStats.reducerPath]: apiStats.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat([
            apiStats.middleware,
        ]
    ),
});


export type AppStore = typeof store;

export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];


setupListeners(store.dispatch);