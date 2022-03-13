import React, { Component } from "react";

class GitSearch extends Component {
	state = {
		searchValue: '',

	};
	handleOnChange = event => {
		this.setState({ searchValue: event.target.value });
	};
	handleSearch = () => {

	}

	render() {
		
		return (
			<div>

				<h1>Search GitHub</h1>

				<input name="text" type="text" placeholder="Enter your search terms."  value={this.state.searhValue} />
				<button onClick={this.handleSearch}>Search</button>

			</div>
		);
	}
}

export default GitSearch;