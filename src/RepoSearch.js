//import React, { Component } from "react";
//import { Octokit } from "@octokit/rest";
import 'bootstrap/dist/css/bootstrap.css';
import './gitSearch.css';
//import { createTokenAuth } from "https://cdn.skypack.dev/@octokit/auth-token";

//* This module finds the user repos. It lists selected details about the repo.
//const authentication = await auth();
//const React = require('react');

const searchForm = document.getElementById('searchForm');

searchForm.addEventListener('submit', (e) => {
	e.preventDefault();

	let userInput = document.getElementById('userInput');
	let username = userInput.value;
	RepoSearch(username);

})


async function RepoSearch(username) {
	const reqst = new XMLHttpRequest();


const url = await `https://api.github.com/users/${username}/repos`;

	reqst.open('GET', url, true);

	document.getElementById("searchUsers").innerHTML=""
	reqst.onload = function() {
		const data = JSON.parse(this.response);
		let totalOpen = 0;

		for (let i in data){
			let div = document.getElementById('searchUsers');

			let p = document.createElement('p');



			p.classList.add('list-group-item');


       if (data[i].open_issues_count >= 1) {

            p.innerHTML = (`
             <p><h3> <a href="${data[i].owner.html_url}" target="blank">${data[i].owner.login.charAt(0).toUpperCase() + data[i].owner.login.slice(1)}'s</a> Repos</h3></p>
				<p class="avatarpic"><img class="avatar" src="${data[i].owner.avatar_url}" class="avatar"/></p>			
                <p><strong>Repo:</strong> <a href="${data[i].html_url}" target=blank_">${data[i].name.charAt(0).toUpperCase() + data[i].name.slice(1)}</a></p>
                <p><strong>Description:</strong> ${data[i].description}</p>
                <p><strong>Open Issues count:</strong> ${data[i].open_issues_count}</p>
                <p><strong>Open Issues page:</strong> <a href="${data[i].html_url}/issues" target=blank_">View Open Issues on GitHub</a></p>
                <p><strong>Primary Language:</strong> ${data[i].language}</p>
                <p><strong>Topics:</strong> ${data[i].topics.join(", ")}</p>
            `);
           
            div.appendChild(p);
            totalOpen = totalOpen + 1;
		} 

	} 	
	console.log(data);
	//console.log(totalOpen);

		let div = document.getElementById('totalOpenCount');

			document.getElementById("totalOpenCount").innerHTML =`
			<p><strong>There are ${totalOpen} repos with open issues.</strong></p>

		`

  }

	reqst.send();

}



export default RepoSearch;