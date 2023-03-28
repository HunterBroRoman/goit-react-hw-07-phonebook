import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contacts', // указывает путь к редьюсеру, который будет использоваться для хранения данных, связанных с этим API.
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62ec100d818ab252b6f765e1.mockapi.io/api/v1',
  }), //указывает базовый запрос, который будет использоваться для отправки запросов к API. В данном случае используется fetchBaseQuery для отправки запросов с помощью стандартного метода Fetch API. Также задан baseUrl, который будет использоваться для всех запросов.
  tagTypes: ['Contact'],//задает типы тегов, которые будут использоваться для инвалидации кэша. В данном случае используется один тип тега - "Contact".
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contact'],
    }),
    addContact: builder.mutation({
      query: newContact => ({
        url: '/contacts',
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['Contact'],
    }),
    deleteContatc: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContatcMutation,
} = contactsApi;
