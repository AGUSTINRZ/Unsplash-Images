import PropTypes from "prop-types";
import ImageCard from "./ImageCard";
import ImageModal from "./ImageModal";
import useTags from "../hooks/useTags";

function RelatedImages({ tags }) {
	const { data, isOpen, setIsOpen, imageId, setImageId } = useTags(tags);

	return (
		<section className="p-2">
      <h2 className="text-xl text-start font-semibold">Related images</h2>
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
					{isOpen && imageId ? (
						<ImageModal setIsOpen={setIsOpen} imageId={imageId} />
					) : null}
				</section>
			)}
		</section>
	);
}

RelatedImages.propTypes = {
	tags: PropTypes.array,
};

export default RelatedImages;
