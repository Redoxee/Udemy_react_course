import './ImageList.css'
import ImageShow from './ImageShow';

function ImageList({images}) {
    const renderedImages = images.map((element) => {
        return <ImageShow image = {element} />
    });

    return <div className='image-list'>{renderedImages}</div>
}

export default ImageList;