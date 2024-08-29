import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../lib/api-endpoints";

export const apiAuth = createApi({
    reducerPath: "apiAuth",
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}`,
    }),
    endpoints: (builder) => ({
        //signin
        signIn: builder.mutation({
            query: (details) => ({
                url: "/admin/login",
                method: "POST",
                body: details,
            }),
        }),

        //register
        signUp: builder.mutation({
            query: (details) => ({
                url: "/admin/register",
                method: "POST",
                body: details,
            }),
        }),

        //register
        resetPassword: builder.mutation({
            query: (details) => ({
                url: "/admin/resetpassword",
                method: "POST",
                body: details,
            }),
        }),
    }),
});

export const { 
    useSignInMutation,
    useSignUpMutation, 
    useResetPasswordMutation,
} = apiAuth 