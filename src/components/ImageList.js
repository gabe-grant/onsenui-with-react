import ImageCard from './ImageCard';

function ImageList({ images }) {
    const renderedImages = images.map((image) => {
        return <ImageCard key={image.id} image={image} />;
    });

    return <div>{renderedImages}</div>
    
}

export default ImageList;