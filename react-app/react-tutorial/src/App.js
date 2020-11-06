import React, { Component } from "react";
import Contents from "./components/Content";
import TOC from "./components/TOC";
import Subject from "./components/Subject";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Subject title="WEB" sub="world wide web!" />
				<Subject title="React" sub="For UI!" />
				<TOC />
				<Contents
					title="HTML"
					desc="HTML is HyperText Markup Language."
				/>
			</div>
		);
	}
}

export default App;
