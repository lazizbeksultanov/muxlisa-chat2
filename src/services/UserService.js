import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { HYDRATE } from 'next-redux-wrapper'

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com"
    }),
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath]
        }
    },
    endpoints: (build) => ({
        getUsers: build.query({
            query: () => "/users",
        })
    })
})

export const { useGetUsersQuery } = userApi;