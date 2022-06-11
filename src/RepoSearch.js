import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './gitSearch.css';


//* This section finds the user repos. It lists selected details about the repo.

const searchForm = document.getElementById('searchForm');

searchForm.addEventListener('submit', (e) => {
	e.preventDefault();

	let userInput = document.getElementById('userInput');
	let username = userInput.value;
	RepoSearch(username);

})

function RepoSearch(username) {
	const reqst = new XMLHttpRequest();

	const url = `https://api.github.com/users/${username}/repos`;

	reqst.open('GET', url, true);

	document.getElementById("searchUsers").innerHTML=""

	reqst.onload = function() {
		const data = JSON.parse(this.response);


		for (let i in data){
			let div = document.getElementById('searchUsers');

			let p = document.createElement('p');

	//	const keys = Object.keys(data[i].language);
		console.log(data[i]);
			p.classList.add('list-group-item')
  
            p.innerHTML = (`
                <p><h3> <a href="${data[i].owner.html_url}" target="blank">${data[i].owner.login.charAt(0).toUpperCase() + data[i].owner.login.slice(1)}'s</a> Repos</h3></p>
                <p><strong>Repo:</strong> <a href="${data[i].html_url}" target=blank_">${data[i].name}</a></p>
                <p><strong>Description:</strong> ${data[i].description}</p>
                <p><strong>Stars:</strong> ${data[i].stargazers_count}</p>
                <p><strong>Primary Language:</strong> ${data[i].language}</p>
                <p><strong>Open Issues count</strong> ${data[i].open_issues_count}</p>
                <p><strong>See Open Issues:</strong> <a href="${data[i].html_url}/issues" target=blank_">View Open Issues Here</a></p>
            `);
           
            div.appendChild(p);

		}
	}

	reqst.send();
}



export default RepoSearch;
