import React, { Component } from "react";

class GitSearch extends Component {
	state = {};
	render() {
		
		return (
			<div>

				<h1>Search GitHub</h1>

				<input name="text" type="text" placeholder="Enter your search terms." />
				<button>Search</button>

			</div>
		);
	}
}

export default GitSearch;