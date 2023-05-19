import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import PropTypes from "prop-types";

function SearchForm({ setSection, setValue }) {
  const [inputValue, setInputValue] = useState("");

	function handleSubmit(e) {
		e.preventDefault();
		if (inputValue !== "") {
			setValue(inputValue);
			setSection(1);
			setInputValue("");
		}
	}

	return (
		<form className="flex relative font-medium" onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Dogs, cats..."
				className="p-3 rounded-full w-full outline-none text-zinc-900 shadow-xl pl-12"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
			/>
			<FontAwesomeIcon
				icon={faSearch}
				className="absolute top-1/2 -translate-y-1/2 left-4 text-lg text-zinc-400"
			/>
		</form>
	);
}

SearchForm.propTypes = {
	setSection: PropTypes.func,
	setValue: PropTypes.func
};

export default SearchForm;
