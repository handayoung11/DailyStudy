import React, { Component } from "react";
import ReadContents from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import TOC from "./components/TOC";
import Subject from "./components/Subject";
import Control from "./components/Control";

class App extends Component {
	constructor(props) {
		super(props);
		this.max_content_id = 3;
		this.state = {
			// mode: "welcome",
			mode: "create",
			subject: { title: "WEB", sub: "World wid Web! " },
			welcome: { title: "Welcome", desc: "Hello, React!!" },

			contents: [
				{ id: 0, title: "HTML", desc: "HTML is HyperText ..." },
				{ id: 1, title: "CSS", desc: "CSS is for design" },
				{
					id: 2,
					title: "JavaScript",
					desc: "JavaScript is for interactive",
				},
			],
			selected_content_id: 2,
		};
	}
	render() {
		console.log("App render");
		var _title,
			_desc,
			_article = null;
		if (this.state.mode === "welcome") {
			_title = this.state.welcome.title;
			_desc = this.state.welcome.desc;
			_article = <ReadContents title={_title} desc={_desc} />;
		} else if (this.state.mode === "read") {
			_title = this.state.contents[this.state.selected_content_id].title;
			_desc = this.state.contents[this.state.selected_content_id].desc;
			_article = <ReadContents title={_title} desc={_desc} />;
		} else if ((this.state.mode = "create")) {
			_article = (
				<CreateContent
					onSubmit={function (_title, _desc) {
						console.log(_title, _desc);
						var _contents = this.state.contents.concat({
							id: this.max_content_id,
							title: _title,
							desc: _desc,
						});
						this.setState({
							contents: _contents,
						});
						this.max_content_id += 1;
					}.bind(this)}
				></CreateContent>
			);
		}
		console.log("render", this);
		return (
			<div className="App">
				<Subject
					title={this.state.subject.title}
					sub={this.state.subject.sub}
					onChangePage={function () {
						this.setState({
							mode: "welcome",
						});
					}.bind(this)}
				/>
				<Control
					onChangeMode={function (_mode) {
						this.setState({
							mode: _mode,
						});
					}.bind(this)}
				/>
				<TOC
					data={this.state.contents}
					onChangePage={function (id) {
						this.setState({
							mode: "read",
							selected_content_id: id,
						});
					}.bind(this)}
				/>

				{_article}
			</div>
		);
	}
}

export default App;
