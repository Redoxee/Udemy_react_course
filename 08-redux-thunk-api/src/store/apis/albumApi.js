import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { faker } from '@faker-js/faker';

function debugPauseFunc(duration) {
    return new Promise((resolve)=>{
        setTimeout(resolve, duration)
    });
}

const albumsApi = createApi({
    reducerPath:"albums",
    baseQuery:fetchBaseQuery({
        baseUrl: 'http://localhost:3005',
        fetchFn: async (...args) => {
            // DEBUG CODE
            await debugPauseFunc(1000);
            return fetch(...args);
        }
    }),

    endpoints(builder) {
        return {
            addAlbum: builder.mutation({
                invalidatesTags:(result,error, arg) => {
                    return [{type:'UsersAlbum', id:arg.id}]
                },
                query: (user)=>{
                    return{
                        url: '/albums',
                        method: 'POST',
                        body: {
                            userId: user.id,
                            title: faker.commerce.productName()
                        }
                    };
                }
            }),

            fetchAlbums: builder.query({
                providesTags:(result, error, arg) => {
                    const tags = result.map(album => {
                        return {type:'Album', id: album.id}
                    });

                    tags.push({type: 'UsersAlbum', id: arg.id});
                    return tags;
                },
                query: (user)=>{
                    return {
                        url:'/albums',
                        params:{
                            userId: user.id
                        },
                        method:'GET'
                    }
                }
            }),

            deleteAlbum: builder.mutation({
                invalidatesTags: (result, error, arg) => {
                    return [{type:'Album', id: arg.id}]
                },

                query: (album)=>{
                    return {
                        url:`/albums/${album.id}`,
                        method:'DELETE',
                    }
                },
            })
        };
    }
});

export const { 
    useFetchAlbumsQuery, 
    useAddAlbumMutation,
    useDeleteAlbumMutation
} = albumsApi;

export {albumsApi}