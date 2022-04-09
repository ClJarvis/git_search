import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './gitSearch.css';

//const queryString = 'q=' + encodeURIComponent('GitHub Octocat in:readme user:defunkt');
// https://github.com/search?q=octocat&type=users

// https://api.github.com/search/users?'q=' +encodeURIComponent(users); example
// look up &type= 



//* This version finds the user repos. It lists selected details about the repo.

const searchForm = document.getElementById('searchForm');

searchForm.addEventListener('submit', (e) => {
	e.preventDefault();

	let userInput = document.getElementById('userInput');
	let username = userInput.value;
	searchUsers(username);

	// try to auto cleardocument.getElementById("searchForm").innerHTML = "";

})

function searchUsers(username) {
	const reqst = new XMLHttpRequest();

	const url = `https://api.github.com/users/${username}/repos`;

	reqst.open('GET', url, true);

	reqst.onload = function() {
		const data = JSON.parse(this.response);

		console.log(data);

		for (let i in data){
			let div = document.getElementById('searchUsers');

			let p = document.createElement('p');

			p.classList.add('list-group-item')
  
            p.innerHTML = (`
                <p><h3> <a href="${data[i].owner.html_url}" target="blank">${data[i].owner.login.charAt(0).toUpperCase() + data[i].owner.login.slice(1)}'s</a> Repos</h3></p>
                <p><strong>Repo:</strong> <a href="${data[i].html_url}" target=blank_">${data[i].name}</a></p>
                <p><strong>Description:</strong> ${data[i].description}</p>
                <p><strong>Stars:</strong> ${data[i].stargazers_count}</p>
                <p><strong>Open Issues</strong> ${data[i].open_issues_count}</p>
            `);
           
            div.appendChild(p);

		}
	}

	reqst.send();
}


/*
removed from displayed items
is it possible to make square with text then sqaure with image or 
commit square darked per more commits.

                <p> <img class="avatar" src="${data[i].owner.avatar_url}" </p>
*/



/*
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
		var userSearch = ("https://api.github.com/search/users/" + this.state.searchValue);
		fetch(userSearch)
			.then(response => {
				return response.json();
			})
		.then(jsonData => {
			this.setState({ users: jsonData.users });
			console.log(jsonData);
		});
	};
*/


/*




	render() {
		
		return (
			<div>

				<h1>GitHub User Search</h1>
				<form id="searchForm">
				<input id="userinput" name="text" type="text" placeholder="User Search."  value={this.state.searhValue} />
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
					</form>
			</div>
		);
	}  

}
	*/



export default searchUsers;
