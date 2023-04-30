import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { albumsApi } from "./apis/albumApi";
import { photosApi } from "./apis/photoApi";

const store = configureStore({
    reducer:{
        users: usersReducer,
        [albumsApi.reducerPath]: albumsApi.reducer,
        [photosApi.reducerPath]: photosApi.reducer,
    },

    middleware: (getDefaultMiddleware)=> {
        return getDefaultMiddleware()
        .concat(albumsApi.middleware)
        .concat(photosApi.middleware);
    }
});

setupListeners(store.dispatch);

export {
    store,
}

export * from './thunks/fetchUsers';
export * from './thunks/addUser';
export * from './thunks/deleteUser';

export {
    useFetchAlbumsQuery, 
    useAddAlbumMutation,
    useDeleteAlbumMutation
} from './apis/albumApi';

export {
    useFetchPhotosQuery, 
    useAddPhotoMutation, 
    useDeletePhotoMutation
} from './apis/photoApi';