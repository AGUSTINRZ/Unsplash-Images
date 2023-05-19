import { useState, useEffect, useRef } from 'react';
import { API_KEY } from '../services/endpoints';

const useSearch = (value) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
	const previousValue = useRef(value)

  const handleClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
		async function searchData() {
			const response = await fetch(
				`https://api.unsplash.com/search/photos?page=${page}&query=${value}&per_page=15&client_id=${API_KEY}`
			);
			const newData = await response.json();
			const results = newData.results;
			if (value !== previousValue.current) {
				setData(results);
				previousValue.current = value;
			} else {
				setData((prevData) => (prevData ? [...prevData, ...results] : results));
			}
		}
		searchData();
	}, [value, page]);

  return { data, handleClick };
};

export default useSearch;