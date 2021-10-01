import React from "react";
import styles from "./Counter.module.css";

export class Counter extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
		};

		this.onClickMinus = this.onClickMinus.bind(this);
	}

	onClickPlus = () => {
		this.setState({
			count: ++this.state.count,
		});
	};

	onClickMinus() {
		this.setState({
			count: --this.state.count,
		});
	}

	onClickReset = () => {
		this.setState({
			count: 0,
		});
	};
	render() {
		const { count } = this.state;
		return (
			<div>
				<h1>task1</h1>
				<div className={styles.app}>
					<p className={styles.count}>{count}</p>
					<div className={styles.app__btn}>
						<button className={styles.plus} onClick={this.onClickPlus}>
							+
						</button>
						<button className={styles.reset} onClick={this.onClickReset}>
							&#8634;
						</button>
						<button className={styles.minus} onClick={this.onClickMinus}>
							-
						</button>
					</div>
				</div>
			</div>
		);
	}
}
