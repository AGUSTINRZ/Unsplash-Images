import PropTypes from "prop-types";

function ImageCard({ data, setImageId, setIsOpen }) {

  function handleClick() {
    setImageId(data.id)
    setIsOpen(true)
  }

	return (
		<article className="relative group/item select-none hover:cursor-pointer" onClick={handleClick} title={data.alt_description}>
			<img src={data.urls.small} alt="" className="w-full" />
			<div className="flex gap-2 items-end absolute p-2 top-0 w-full h-full bg-black/30 opacity-0 group-hover/item:opacity-100 transition-opacity">
				<div className="flex items-center gap-2">
					<img
						src={data.user.profile_image.small}
						alt={data.alt_description}
						className="rounded-full"
					/>
					<p className="text-white">
						Photo by <span className="font-semibold">{data.user.username}</span>
					</p>
				</div>
			</div>
		</article>
	);
}

ImageCard.propTypes = {
	data: PropTypes.object,
  setImageId: PropTypes.any,
  setIsOpen: PropTypes.any
};

export default ImageCard;
