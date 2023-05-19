import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { useState } from "react";

function NavBar({ section, setSection, setValue }) {
	const [inputValue, setInputValue] = useState("");

	function handleSubmit(e) {
		e.preventDefault();
		if (inputValue) {
			setValue(inputValue);
			setSection(1);
			setInputValue("");
		}
	}

	function handleClick() {
		setSection(0);
	}

	return (
		<nav className="flex items-center gap-4 fixed top-0 left-0 px-4 py-2 bg-white w-full z-10">
			<a href="https://unsplash.com/es" target="_blank" rel="noreferrer">
				<svg
					width="28"
					height="28"
					className="UP8CN"
					viewBox="0 0 32 32"
					version="1.1"
					aria-labelledby="página-de-inicio-de-unsplash"
					aria-hidden="false"
				>
					<desc lang="en-US">Unsplash logo</desc>
					<title id="página-de-inicio-de-unsplash">
						Página de inicio de Unsplash
					</title>
					<path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
				</svg>
			</a>
			<form
				className="flex relative font-medium w-full md:max-w-[60%]"
				onSubmit={(e) => handleSubmit(e)}
			>
				<input
					type="text"
					placeholder="Dogs, cats..."
					className="rounded-full w-full outline-none bg-gray-300/80 text-zinc-700 pl-12 py-2 placeholder:text-zinc-700"
					onChange={(e) => setInputValue(e.target.value)}
					value={inputValue}
				/>
				<FontAwesomeIcon
					icon={faSearch}
					className="absolute top-1/2 -translate-y-1/2 left-4 text-lg text-zinc-700"
				/>
			</form>
			<button
				onClick={handleClick}
				className={`bg-black text-white p-1 w-10 aspect-square rounded-full ml-auto ${
					section === 0 ? "hidden" : "block"
				}`}
			>
				<FontAwesomeIcon icon={faHome} />
			</button>
		</nav>
	);
}

NavBar.propTypes = {
	section: PropTypes.number,
	setSection: PropTypes.func,
	setValue: PropTypes.func,
};

export default NavBar;
