import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Spinner from "./Spinner";

function ImageModalHeader({data, setIsOpen, isLoading, handleImageLoad, profileImg}) {
	return (
		<>
			<div className="flex items-start justify-between p-2">
				<div className="flex gap-2 items-center">
					<img src={profileImg} alt="" className="w-8 rounded-full"/>
					<div className="flex gap-2 items-start pr-4">
						<strong className="line-clamp-1">{data.user.name}</strong>
						<span className="line-clamp-1">({data.user.username})</span>
					</div>
				</div>
				<button
					onClick={() => !setIsOpen()}
					className="flex justify-center items-center aspect-square w-8 rounded-full z-10"
				>
					<FontAwesomeIcon
						icon={faXmark}
						className="text-xl fixed bg-black text-white p-1 aspect-square rounded-full"
					/>
				</button>
			</div>
			<section className="flex justify-center bg-gray-200">
				{isLoading ? (
					<>
						<img
							src={data.urls.full}
							alt={data.alt_description}
							title={data.alt_description}
							className="max-h-[100vh] object-cover hidden"
							onLoad={handleImageLoad}
						/>
						<section className="flex justify-center items-center min-h-[70vh] md:min-h-[100vh]">
							<Spinner />
						</section>
					</>
				) : (
					<img
						src={data.urls.full}
						alt={data.alt_description}
						title={data.alt_description}
						className="max-h-[100vh] object-cover"
						onLoad={handleImageLoad}
					/>
				)}
			</section>
			<section className="flex items-start flex-wrap md:flex-nowrap gap-6 md:gap-10 text-start p-2">
				<div className="w-full md:w-auto">
					<h3 className="font-medium text-lg">Description</h3>
					{data.alt_description ? <p>{data.alt_description}</p> : <p>No description</p>}
				</div>
				<div className="w-full md:w-auto">
					<h3 className="font-medium text-lg">Location</h3>
					{data.location.name ? <p>{data.location.name}</p> : <p>Unknown</p>}
				</div>
				<div>
					<h3 className="font-medium text-lg">Views</h3>
					<span>{data.views}</span>
				</div>
				<div>
					<h3 className="font-medium text-lg">Downloads</h3>
					<p>{data.downloads}</p>
				</div>
				<div>
					<h3 className="font-medium text-lg">Size</h3>
					<p>
						{data.height} x {data.width}
					</p>
				</div>
			</section>
		</>
	);
}

ImageModalHeader.propTypes = {
	data: PropTypes.object,
  setIsOpen: PropTypes.any,
  isLoading: PropTypes.bool,
  handleImageLoad: PropTypes.any,
	profileImg: PropTypes.any
};

export default ImageModalHeader;
