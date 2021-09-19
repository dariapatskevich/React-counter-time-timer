import React from "react";

export class Time extends React.Component {
	constructor(props) {
		super(props);

        this.state = { time: new Date().toLocaleTimeString() };
    }
    componentDidMount() {
        this.interval = setInterval(() => this.setState({ time:new Date().toLocaleTimeString()}), 1000);
      }
      componentWillUnmount() {
        clearInterval(this.interval);
      }
    render(
       
    ) {
		const { time } = this.state;
		return (
            <div>
            <h1>task2</h1>
			<div style={{fontSize:50}}>{time}</div></div>
	);
}
}
