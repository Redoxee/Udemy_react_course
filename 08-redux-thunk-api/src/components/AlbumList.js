import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skeleton from './Skeleton';
import Button from './Button';
import AlbumsListItem from "./AlbumsListItem";

function AlbumList({user}) {
    const {data, error, isFetching} = useFetchAlbumsQuery(user);
    const [addAlbum, reslut] = useAddAlbumMutation();

    const handleAddAlbumClick = ()=>{
        addAlbum(user);
    };

    let content;
    if(isFetching) {
        content = <Skeleton times={3} className='h-10 w-full'/>
    }
    else if(error) {
        content = <div>Error loading albums</div>;
    }
    else
    {
        content = data.map((item)=>{
            return <AlbumsListItem album={item} key={item.id}/>
        });
    }
    
    return <div>
        <div>
            <div className="m-2 flex flex-row items-center justify-between">
                <h3 className="text-lg font-bold">
                    Albums for {user.name}
                </h3>
                <Button onClick={handleAddAlbumClick} loading={reslut.isLoading}>+ Add Album</Button>
            </div>
        </div>
        <div>{content}</div>
    </div>
}

export default AlbumList;