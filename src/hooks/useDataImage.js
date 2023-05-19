import { useState, useEffect } from "react";
import { API_KEY, MAIN_ENDPOINT } from "../services/endpoints";

const useDataImage = (imageId) => {
	const [data, setData] = useState(null);
	const [userData, setUserData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	const handleImageLoad = () => {
		setIsLoading(false);
	};

	useEffect(() => {
		const getImageData = async () => {
			const response = await fetch(
				`${MAIN_ENDPOINT}/${imageId}?client_id=${API_KEY}`
			);
			const data = await response.json();
			setData(data);
			
			if (data && data.user && data.user.username) {
				const response = await fetch(
					`https://api.unsplash.com/users/${data.user.username}?client_id=${API_KEY}`
				);
				const userData = await response.json();
				setUserData(userData);
			}
		};

		getImageData();
	}, [imageId]);

	return { data, userData, isLoading, handleImageLoad };
};

export default useDataImage;
