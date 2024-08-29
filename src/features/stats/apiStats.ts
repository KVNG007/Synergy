import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL} from "../../lib/api-endpoints"

// Define the API
export const apiStats = createApi({
    reducerPath: "apiStats",
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}`,
    }),
    tagTypes: ['stats'],
    endpoints: (builder) => ({
        getStats: builder.query({
            query: () => `?access_key=b9edcdbed3a5cb63a7da1fe1204583ca`,
            providesTags: ['stats'],
        }),
    }),
});

export const { useGetStatsQuery } = apiStats;
