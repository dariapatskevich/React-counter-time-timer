import React from "react";

import "./App.css";

import { Counter } from "./components/Counter";
import { Time } from "./components/Time/Time";
import { Timer } from "./components/Timer";

import { EmojiList } from "./components/EmojiList/EmojiList";

import emojiList from "./components/EmojiList/emoji.json";

function App() {
	return (
		<div className="App">
			<Counter />
			<Time />
			<Timer />
			<EmojiList emojiesList={emojiList} />
		</div>
	);
}

export default App;
