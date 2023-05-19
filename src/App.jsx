import Header from "./components/Header";
import RandomImages from "./components/RandomImages";
import NavBar from "./components/NavBar";
import SearchedImages from "./components/SearchedImages";
import { useState } from "react";

function App() {
	const [section, setSection] = useState(0);
	const [value, setValue] = useState("");

	return (
		<>
			<NavBar section={section} setSection={setSection} setValue={setValue} />
			{section === 0 ? (
				<>
					<Header setSection={setSection} setValue={setValue} />
					<RandomImages />
				</>
			) : section !== 0 ? (
				<>
					<NavBar
						section={section}
						setSection={setSection}
						setValue={setValue}
					/>
					<SearchedImages value={value} />
				</>
			) : null}
		</>
	);
}

export default App;