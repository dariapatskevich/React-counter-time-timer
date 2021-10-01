import { useState } from "react";

import styles from "./Form.module.css";

export function Form({ searchEmoji }) {
	const [inputValue, setInputValue] = useState("");

	const onInputChange = (event) => {
		setInputValue(event.target.value);
		searchEmoji(event.target.value);
	};

	return (
		<div>
			<input
				type="text"
				value={inputValue}
				placeholder="Search"
				onChange={onInputChange}
			/>
		</div>
	);
}
