import './imageGalleryItem.scss'

function ImageGalleryItem({ img, onClick }) {
  return (
    <li className="gallery-item" onClick={() => onClick(img)}>
      <img src={img.webformatURL} alt="" />
    </li>
  );
}

export default ImageGalleryItem; 