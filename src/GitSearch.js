import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './gitSearch.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
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
//# TEST   TEST TEST   *//
const searchForm = document.getElementById('searchForm');

searchForm.addEventListener('submit', (e) => {
	e.preventDefault();

	let userInput = document.getElementById('userInput');

	let username = userInput.value;

	searchUsers(username);

})

function searchUsers(username) {
	const reqst = new XMLHttpRequest();

	const url = `https://api.github.com/users/${username}/repos`;

	reqst.open('GET', url, true);

	reqst.onload = function() {
		const data = JSON.parse(this.response);

		console.log(data);

		for (let i in data){
			let ul = document.getElementById('searchUsers');

			let li = document.createElement('li');

			li.classList.add('list-group-item')
        
  
            li.innerHTML = (`
                <p><strong>Profile:</strong> <a href="${data[i].owner.html_url}" target="blank">${data[i].owner.login.charAt(0).toUpperCase() + data[i].owner.login.slice(1)}</a></p>
                <p> <img class="avatar" src="${data[i].owner.avatar_url}" </p>
                <p><strong>Bio:</strong> ${data[i].owner.login.bio}</p>
                <p><strong>URL:</strong> <a href="${data[i].owner.html_url}" target="blank">${data[i].owner.html_url}</a></p>
                <p><strong>Stars:</strong> ${data[i].stargazers_count}</p>
                <p><strong>Followers:</strong> ${data[i].owner.followers_url} </p>

            `);
           
            ul.appendChild(li);

		}
	}

	reqst.send();
}

/*

 searchUsers('facebook'); 


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
