import ImageCard from "./ImageCard";
import ImageModal from "./ImageModal";
import useSearch from "../hooks/useSearch";
import PropTypes from "prop-types";
import { useState } from "react";

function SearchedImages({ value }) {
	const [isOpen, setIsOpen] = useState(true);
	const [imageId, setImageId] = useState(null);
	const { data, handleClick } = useSearch(value);

	return (
		<main className="p-4 text-center pt-16">
			<h3 className="text-start text-2xl md:text-4xl font-semibold mb-2">
				{`Results for ${value}`}
			</h3>
			{data && (
				<section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-start gap-4 relative">
					{Array.from({ length: Math.ceil(data.length / 5) }, (_, i) => (
						<div key={i} className="flex flex-col gap-4 h-min relative">
							{data.slice(i * 5, (i + 1) * 5).map((image) => (
								<ImageCard
									data={image}
									key={image.id}
									setImageId={setImageId}
									setIsOpen={setIsOpen}
								/>
							))}
						</div>
					))}
				</section>
			)}
			<button
				onClick={handleClick}
				className="px-2 py-1 shadow-lg border-2 border-zinc-300 rounded mt-4"
			>
				Load More
			</button>
			{isOpen && imageId ? (
				<ImageModal setIsOpen={setIsOpen} imageId={imageId} />
			) : null}
		</main>
	);
}

SearchedImages.propTypes = {
	value: PropTypes.string,
};

export default SearchedImages;
