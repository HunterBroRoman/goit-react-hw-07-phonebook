import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contacts', // указывает путь к редьюсеру, который будет использоваться для хранения данных, связанных с этим API.
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62ec100d818ab252b6f765e1.mockapi.io/api/v1',
  }), //указывает базовый запрос, который будет использоваться для отправки запросов к API. В данном случае используется fetchBaseQuery для отправки запросов с помощью стандартного метода Fetch API. Также задан baseUrl, который будет использоваться для всех запросов.
  tagTypes: ['Contact'],//задает типы тегов, которые будут использоваться для инвалидации кэша. В данном случае используется один тип тега - "Contact".
  //endpoints определяет конечные точки для работы с API. В данном случае определены три конечные точки:
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contact'],
    }),// точка для получения списка контактов. Она использует метод query и возвращает список контактов с помощью URL-адреса /contacts. Также задан тип тега, чтобы можно было инвалидировать кэш при обновлении данных.
    addContact: builder.mutation({
      query: newContact => ({
        url: '/contacts',
        method: 'POST',
        body: newContact,
      }), //точка для добавления нового контакта. Она использует метод mutation и принимает в качестве аргумента объект newContact, содержащий данные нового контакта. Она отправляет POST-запрос на URL-адрес /contacts с телом запроса, содержащим данные нового контакта. Также задан тип тега, чтобы можно было инвалидировать кэш при добавлении нового контакта.
      invalidatesTags: ['Contact'],
    }),
    deleteContatc: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),//точка для удаления контакта. Она использует метод mutation и принимает в качестве аргумента идентификатор контакта. Она отправляет DELETE-запрос на URL-адрес /contacts/${id}. Также задан тип тега, чтобы можно было инвалидировать кэш при удалении контакта.
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContatcMutation,
} = contactsApi;
//