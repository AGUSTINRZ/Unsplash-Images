import useRandomImages from "../hooks/useRandomImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Header() {
	const dataImage = useRandomImages();

	return (
		<>
			<header className="flex justify-center items-center bg-zinc-900 w-full h-[100vh] relative">
				{dataImage && (
					<img
						src={dataImage.urls.regular}
						alt=""
						className="absolute w-full h-[100vh]  object-cover brightness-75 z-0"
					/>
				)}
				<div className="relative text-white">
					<h1 className="text-5xl font-medium mb-4">Unsplash Images</h1>
					<form className="flex relative">
						<input
							type="text"
							placeholder="Dogs, cats..."
							className="p-2 rounded-md w-full outline-none text-zinc-900 shadow-xl pl-8"
						/>
						<FontAwesomeIcon icon={faSearch} className="absolute top-1/2 -translate-y-1/2 left-2 text-lg text-zinc-400"/>
					</form>
				</div>
				<div className="absolute top-4 left-4 md:top-auto md:bottom-4 md:left-4">
					<p className="text-white text-lg">Photo by <span className="font-semibold">{dataImage && dataImage.user.username}</span></p>
				</div>
			</header>
		</>
	);
}

export default Header;