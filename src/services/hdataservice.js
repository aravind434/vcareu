// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const hospitalApi = createApi({
  reducerPath: 'hospitalApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
  endpoints: (builder) => ({
    gethospitalByName: builder.query({
      query: () => `/hospitals`,
    }),
    getcarouselimgByName: builder.query({
        query: () => `/carousel`,
      }),
      addhospitalById: builder.mutation({
        query: (newhospital) => {
            return {
                url: `/hospitals`,
                method: 'POST',
                body: newhospital
            }
        }
      }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGethospitalByNameQuery,useLazyGethospitalByNameQuery,useGetcarouselimgByNameQuery,useAddhospitalByIdMutation} = hospitalApi