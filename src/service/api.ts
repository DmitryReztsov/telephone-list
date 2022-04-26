import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import {BASE_URL} from './apiConfig';
import {IUser} from '../models/IUser';


export const api = createApi({
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  tagTypes: ['Users'],
  endpoints: (build) => ({
    getUsers: build.query<IUser [], number>({
      query: (_limit) => ({
        url: '/users',
        params: {
          _limit,
        },
      }),
      providesTags: (result) => ['Users'],
    }),
  }),
});
