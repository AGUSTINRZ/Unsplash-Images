import PropTypes from "prop-types";
import useDataImage from "../hooks/useDataImage";
import ImageModalHeader from "./ImageModalHeader";
import UserAccount from "./UserAccount";
import ImageTags from "./ImageTags";
import RelatedImages from "./RelatedImages";

function ImageModal({ setIsOpen, imageId }) {
	const { data, userData, isLoading, handleImageLoad } = useDataImage(imageId);

	return (
		<>
			{data && userData && (
				<section className="fixed top-0 left-0 p-4 md:p-8 w-full h-full bg-black/30">
					<section className="bg-white h-full rounded relative overflow-y-scroll">
						<ImageModalHeader data={data} setIsOpen={setIsOpen} isLoading={isLoading} handleImageLoad={handleImageLoad} profileImg={userData.profile_image.large}/>
						<UserAccount user={userData}/>
						<ImageTags tags={data.tags}/>
						<RelatedImages tags={data.tags}/>
					</section>
				</section>
			)}
		</>
	);
}

ImageModal.propTypes = {
	setIsOpen: PropTypes.any,
	imageId: PropTypes.string,
};

export default ImageModal;
