import useRandomImages from "../hooks/useRandomImage";
import SearchForm from "./SearchForm";
import PropTypes from "prop-types";

function Header({ section, setSection, value, setValue }) {
	const dataImage = useRandomImages();

	return (
		<>
			<header className="flex justify-center items-center bg-zinc-900 w-full h-[94vh] md:h-[100vh] relative pt-14">
				{dataImage && (
					<img
						src={dataImage.urls.regular}
						alt=""
						className="absolute top-0 w-full h-full object-cover brightness-75 z-0"
					/>
				)}
				<div className="relative text-white min-w-[66.66%] px-4 drop-shadow-[2px_2px_2px_rgba(0,0,0,1)]">
					<h1 className="text-5xl font-semibold mb-4">Unsplash Images API</h1>
					<h3 className="text-xl font-medium">
						Use the source of internet images.
					</h3>
					<h3 className="text-xl font-medium mb-4">
						With resources from creators around the world.
					</h3>
					<SearchForm
						section={section}
						setSection={setSection}
						setValue={setValue}
						value={value}
					/>
				</div>
				<div className="absolute bottom-4 left-4 drop-shadow-[2px_2px_1px_rgba(0,0,0,1)]">
					<p className="text-white text-lg">
						Photo by{" "}
						<span className="font-semibold">
							{dataImage && dataImage.user.username}
						</span>
					</p>
				</div>
			</header>
		</>
	);
}

Header.propTypes = {
	section: PropTypes.number,
	setSection: PropTypes.func,
	value: PropTypes.string,
	setValue: PropTypes.func
};

export default Header;
