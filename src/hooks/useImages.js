import { useState, useEffect } from 'react';
import { MAIN_ENDPOINT, API_KEY } from '../services/endpoints';

const useImages = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const handleClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    const getImages = async () => {
      const response = await fetch(
        `${MAIN_ENDPOINT}?client_id=${API_KEY}&page=${page}&per_page=15`
      );
      const newData = await response.json();
      setData((prevData) => (prevData ? [...prevData, ...newData] : newData));
    };

    getImages();
  }, [page]);

  return { data, handleClick };
};

export default useImages;