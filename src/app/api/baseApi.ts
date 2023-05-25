import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { config } from './config';

// Definimos la API con su configuración base, sin ningún endpoint.
// Los endpoints serán definidos luego en archivos separados.

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: config.apiUrl,
    prepareHeaders: async () => {
      // if (!token) return;

      // Este método actualiza el token si es necesario y redirige al login si expiró la sesión.
      // headers.set('authorization', `Bearer ${.token}`);
    },
  }),
  endpoints: () => ({}),
});
