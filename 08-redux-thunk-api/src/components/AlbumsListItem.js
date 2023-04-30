import { GoTrashcan } from 'react-icons/go';

import ExpandablePanel from './ExpandablePanel';
import Button from './Button';
import PhotosList from './PhotosList';

import { useDeleteAlbumMutation } from '../store';
import { Fragment } from 'react';

function AlbumsListItem({album}){
    const [deleteAlbum, result] = useDeleteAlbumMutation();

    const handleDelete = ()=>{
        deleteAlbum(album);
    };

    const header = <Fragment>
        <Button onClick={handleDelete} loading={result.isLoading} danger className='mr-2'>
            <GoTrashcan/>
        </Button>
        {album.title}
    </Fragment>;
    return <ExpandablePanel header={header}>
        <PhotosList album={album} />
    </ExpandablePanel>
}

export default AlbumsListItem;