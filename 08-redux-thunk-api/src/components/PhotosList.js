import { useFetchPhotosQuery, useAddPhotoMutation } from "../store";
import PhotosListItem from "./PhotosListItem";
import Button from "./Button";
import Skeleton from "./Skeleton";

function PhotosList({album}){
    const {data, error, isFetching} = useFetchPhotosQuery(album);
    const [addPhoto, addPhotoResult] = useAddPhotoMutation();

    const handleAddPhoto = ()=> {
        addPhoto(album);
    };

    let content;
    if(isFetching) {
        content = <Skeleton times={5} className='h-8 w-8'/>
    }
    else if (error) {
        content = "Error while fetching photos";
    }
    else {
        content = data.map((item)=>{
            return <PhotosListItem photo={item} key={item.id}/>
        });
    }


    return (
    <div>
        <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Photos in {album.title}</h3>
            <Button onClick={handleAddPhoto} loading={addPhotoResult.isLoading} primary>+ Add Photo</Button>
        </div>

        <div className="flex flex-row flex-wrap justify-content mx-8">
            {content}
        </div>
    </div>
    );
}

export default PhotosList;