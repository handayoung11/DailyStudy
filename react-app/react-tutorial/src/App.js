import React, { Component } from "react";
import ReadContents from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import TOC from "./components/TOC";
import Subject from "./components/Subject";
import Control from "./components/Control";
import UpdateContent from "./components/UpdateContent";

class App extends Component {
	constructor(props) {
		super(props);
		this.max_content_id = 3;
		this.state = {
			mode: "welcome",
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
			selected_content_id: -1,
		};
	}

	readContent() {
		return this.state.contents[this.state.selected_content_id];
	}

	getContent() {
		console.log("App render");
		var _title,
			_desc,
			_article = null;
		if (this.state.mode === "welcome") {
			_title = this.state.welcome.title;
			_desc = this.state.welcome.desc;
			_article = <ReadContents title={_title} desc={_desc} />;
		} else if (this.state.mode === "read") {
			var _content = this.readContent();
			_article = (
				<ReadContents title={_content.title} desc={_content.desc} />
			);
		} else if (this.state.mode === "create") {
			_article = (
				<CreateContent
					onSubmit={function (_title, _desc) {
						console.log(_title, _desc);
						var _contents = this.state.contents.concat({
							id: this.max_content_id,
							title: _title,
							desc: _desc,
						});
						// this.state.contents.push({
						// 	id: this.max_content_id,
						// 	title: _title,
						// 	desc: _desc,
						// });
						this.setState({
							contents: _contents,
							mode: "read",
							selected_content_id: this.max_content_id,
						});
						this.max_content_id += 1;
					}.bind(this)}
				></CreateContent>
			);
		} else if (this.state.mode === "update") {
			_content = this.readContent();
			_article = (
				<UpdateContent
					data={_content}
					onSubmit={function (_id, _title, _desc) {
						console.log(_title, _desc);
						var _contents = Array.from(this.state.contents);
						_contents[_id] = {
							title: _title,
							desc: _desc,
						};
						this.setState({
							contents: _contents,
							mode: "read",
						});
					}.bind(this)}
				></UpdateContent>
			);
		}
		return _article;
	}
	render() {
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
				<TOC
					data={this.state.contents}
					onChangePage={function (id) {
						this.setState({
							mode: "read",
							selected_content_id: id,
						});
					}.bind(this)}
				/>
				<Control
					onChangeMode={function (_mode) {
						if (_mode === "delete") {
							var _contents = Array.from(this.state.contents);
							if (window.confirm("정말 삭제하시겠습니까?")) {
								_contents.splice(
									this.state.selected_content_id,
									1
								);
								var i = 0;
								while (i < _contents.length) {
									_contents[i].id = i;
									console.log(_contents);
									i += 1;
								}
								this.max_content_id = i;
								this.setState({
									mode: "welcome",
									contents: _contents,
								});
								alert("deleted");
							}
						} else {
							this.setState({
								mode: _mode,
							});
						}
					}.bind(this)}
				/>

				{this.getContent()}
			</div>
		);
	}
}

export default App;
