import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem.jsx";
import './imageGallery.scss'

function ImageGallery({ images, onImageClick }) {
  return (
    <ul className="gallery">
      {images.map(img => (
        <ImageGalleryItem key={img.id} img={img} onClick={onImageClick} />
      ))}
    </ul>
  );
}

export default ImageGallery; 