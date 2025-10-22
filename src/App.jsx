import { useState, useEffect, useCallback, useMemo } from "react";
import Searchbar from "./Components/Searchbar/Searchbar.jsx";
import ImageGallery from "./Components/ImageGallery/ImageGallery.jsx";
import Button from "./Components/Button/Button.jsx";
import Loader from "./Components/Loader/Loader.jsx";
import Modal from "./Components/Modal/Modal.jsx";
import "./App.scss";

const API_KEY = "46765231-a4d952922c9ddedc38261ac89";
const PER_PAGE = 12;

function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState("");
  const [totalHits, setTotalHits] = useState(0);

  useEffect(() => {
    if (!query) return;
    setLoading(true);
    setError(null);
    fetch(
      `https://pixabay.com/api/?q=${encodeURIComponent(query)}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`
    )
      .then(res => res.json())
      .then(data => {
        if (data.hits) {
          setImages(prev => (page === 1 ? data.hits : [...prev, ...data.hits]));
          setTotalHits(data.totalHits);
        } else {
          setError("Нічого не знайдено");
        }
      })
      .catch(() => setError("Помилка завантаження"))
      .finally(() => setLoading(false));
  }, [query, page]);

  const handleSearch = useCallback(newQuery => {
    if (newQuery === query) return;
    setQuery(newQuery);
    setPage(1);
    setImages([]);
    setTotalHits(0);
  }, [query]);

  const handleLoadMore = useCallback(() => {
    setPage(prev => prev + 1);
  }, []);

  const handleImageClick = useCallback(img => {
    setLargeImageURL(img.largeImageURL);
    setShowModal(true);
  }, []);

  const closeModal = useCallback(() => {
    setShowModal(false);
    setLargeImageURL("");
  }, []);

  const memoImages = useMemo(() => images, [images]);
  const canLoadMore = images.length < totalHits;

  return (
    <>
      <Searchbar onSubmit={handleSearch} />
      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
      <ImageGallery images={memoImages} onImageClick={handleImageClick} />
      {loading && <Loader />}
      {canLoadMore && !loading && images.length > 0 && (
        <Button onClick={handleLoadMore} />
      )}
      {showModal && (
        <Modal largeImageURL={largeImageURL} onClose={closeModal} />
      )}
    </>
  );
}

export default App;
