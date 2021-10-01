import styles from "./Emoji.module.css";

export function EmojiItem(props) {
	const { title, symbol } = props;
	return (
		<li className={styles.emojiItem}>
			{symbol} {title}
		</li>
	);
}
