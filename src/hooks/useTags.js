import { useState, useEffect } from "react";
import { API_KEY } from "../services/endpoints";

const useTags = (tags) => {
	const [data, setData] = useState([]);
	const [isOpen, setIsOpen] = useState(true);
	const [imageId, setImageId] = useState(null);

	useEffect(() => {
		const getRelatedImages = async () => {
			const response = await fetch(
				`https://api.unsplash.com/search/photos?page=1&query=${tags}&per_page=15&client_id=${API_KEY}`
			);
			const newData = await response.json();
			const results = newData.results;
			setData((prevData) => (prevData ? [...prevData, ...results] : results));
		};

		getRelatedImages();
	}, [tags]);

	return { data, isOpen, setIsOpen, imageId, setImageId };
};

export default useTags;
