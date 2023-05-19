import { useState, useEffect } from "react";
import { API_KEY, MAIN_ENDPOINT } from "../services/endpoints";

function useRandomImages() {
  const [data, setData] = useState();

	useEffect(() => {
		async function getRandomImages() {
			const response = await fetch(
				`${MAIN_ENDPOINT}/random?client_id=${API_KEY}&query=landscapes&orientation=landscape`
			);
			const data = await response.json();
			setData(data);
			console.log(data);
		}

		getRandomImages();
	}, []);

  return data
}

export default useRandomImages