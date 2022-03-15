import React, { Component } from "react";

class GitSearch extends Component {
	state = {
		searchValue: '',
		users: []

	};
	handleOnChange = event => {
		this.setState({ searchValue: event.target.value });
	};
	handleSearch = () => {
		this.searchApi(this.state.searchValue)
	};

	searchApi = userInput => {
		var userSearch = "https://api.github.com/search/users";
		fetch(userSearch)
			.then(response => {
				return response.json();
			})
		.then(jsonData => {
			this.setState({ users: jsonData.users });
			console.log(jsonData);
		});
	};

	render() {
		
		return (
			<div>

				<h1>GitHub User Search</h1>

				<input name="text" type="text" placeholder="User Search."  value={this.state.searhValue} />
				<button onClick={this.handleSearch}>Find a User</button>

				{this.state.users ? (
					<div>
						{this.state.users.map((user, index) => (
							<div key={index}>
							<h1>{user.login}</h1>
							<p>test</p>
						</div>
						))}

						</div>
						) : (
							<p>Search for a user</p>
					)}

			</div>
		);
	}
}

export default GitSearch;