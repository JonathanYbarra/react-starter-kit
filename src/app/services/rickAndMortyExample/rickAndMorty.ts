import { TAG_TYPES, type CharacterResponse, Character } from './rickAndMorty.type';
import { createGetItemQuery, 
     createProvidesTags } from '../../utils/creatorUrlTag';
import { QUERY_URL } from '../URL';
import { baseApi } from '../../api';

const characterApi = baseApi
    .enhanceEndpoints({ addTagTypes: [TAG_TYPES.rickAndMorty] })
    .injectEndpoints({
        endpoints: (builder) => ({
            getCharacter: builder.query<CharacterResponse, void>({
                query: () => ({ url: QUERY_URL.rickandmorty_character, method: 'GET' }),
                providesTags: (result) => createProvidesTags<CharacterResponse>(result, TAG_TYPES.rickAndMorty) as []
            }),

            getCharacterByID: builder.query<Character, { id: number }>({
                query: (params) => createGetItemQuery(QUERY_URL.rickandmorty_character, params),
                providesTags: [TAG_TYPES.rickAndMorty],
            }),
        }),
    });

export const {
    useGetCharacterQuery,
    useGetCharacterByIDQuery
} = characterApi;
