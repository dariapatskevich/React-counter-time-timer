import React from "react";
import { useState } from "react";
import { EmojiItem } from "./EmojiItem";
import { Form } from "../Form";

import styles from "./Emoji.module.css";

export function EmojiList(props) {
	const { emojiesList } = props;
	const [emojies, setEmojies] = useState(emojiesList);

	const searchEmoji = (inputValue) => {
		if (inputValue) {
			setEmojies([
				...emojiesList.filter((emoji) =>
					emoji.title
						.toLocaleLowerCase()
						.includes(inputValue.toLocaleLowerCase())
				),
			]);
		} else {
			setEmojies(emojiesList);
		}
	};

	return (
		<div className={styles.emojiListWrapp}>
			<Form searchEmoji={searchEmoji} />
			<ul className={styles.emojiList}>
				{emojies.map((item, index) => {
					const { symbol, title } = item;

					return <EmojiItem key={index} symbol={symbol} title={title} />;
				})}
			</ul>
		</div>
	);
}
