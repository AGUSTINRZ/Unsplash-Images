import PropTypes from "prop-types";

function ImageTags({ tags }) {
	return (
		<section className="p-2">
      <h2 className="text-xl text-start font-semibold">Related tags</h2>
			<section className="flex gap-2 flex-wrap mt-1">
				{tags.map((tag, index) => {
					return (
						<article
							key={index}
							className="px-2 py-1 bg-zinc-200/70 rounded text-gray-600 font-semibold"
						>
							{tag.title}
						</article>
					);
				})}
			</section>
		</section>
	);
}

ImageTags.propTypes = {
	tags: PropTypes.array,
};

export default ImageTags;
