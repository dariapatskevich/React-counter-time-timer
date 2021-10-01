import React from "react";
import styles from "./Timer.module.css";

export class Timer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			time: 0,
			start: 0,
			isOn: false,
		};
		this.startTimer = this.startTimer.bind(this);
		this.stopTimer = this.stopTimer.bind(this);
		this.resetTimer = this.resetTimer.bind(this);
	}
	startTimer() {
		this.setState({
			time: this.state.time,
			start: Date.now() - this.state.time,
			isOn: true,
		});
		this.timer = setInterval(
			() =>
				this.setState({
					time: Date.now() - this.state.start,
				}),
			1
		);
	}
	stopTimer() {
		this.setState({ isOn: false });
		clearInterval(this.timer);
	}
	resetTimer() {
		this.setState({ time: 0 });
	}
	render() {
		const start = this.state.time == 0;
		const stop = this.state.isOn;
		const reset = this.state.time != 0 && !this.state.isOn;

		return (
			<div>
				<h1>task 3</h1>
				<div>
					<h3 className={styles.timer}>{this.state.time}</h3>
					<button className={styles.button} onClick={this.startTimer}>
						{start} Start
					</button>
					<button className={styles.button} onClick={this.stopTimer}>
						{stop}Stop
					</button>
					<button className={styles.button} onClick={this.resetTimer}>
						{reset}Reset
					</button>
				</div>
			</div>
		);
	}
}
