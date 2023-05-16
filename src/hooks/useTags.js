import { useState, useEffect } from 'react';
import { MAIN_ENDPOINT, API_KEY } from '../services/endpoints';

const useTags = (tags) => {
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(true);
  const [imageId, setImageId] = useState(null);

  useEffect(() => {
    const getRelatedImages = async () => {
      const response = await fetch(
        `${MAIN_ENDPOINT}?client_id=${API_KEY}&query=${tags
          .map((tag) => tag.title)
          .join()}&page=${Math.floor(Math.random() * 500) + 1}&per_page=15`
      );
      const newData = await response.json();
      setData((prevData) => (prevData ? [...prevData, ...newData] : newData));
    };

    getRelatedImages();
  }, [tags]);

  return { data, isOpen, setIsOpen, imageId, setImageId };
};

export default useTags;
