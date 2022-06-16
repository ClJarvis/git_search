import React, { Component } from "react";
//import { Octokit } from "@octokit/rest";
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

async function RepoSearch(username) {
	const reqst = new XMLHttpRequest();

const url = await `https://api.github.com/users/${username}/repos`;

	reqst.open('GET', url, true);

	document.getElementById("searchUsers").innerHTML=""

	reqst.onload = function() {
		const data = JSON.parse(this.response);


		for (let i in data){
			let div = document.getElementById('searchUsers');

			let p = document.createElement('p');

			p.classList.add('list-group-item')

		console.log(data);

       if (data[i].open_issues_count >= 1) {
  
            p.innerHTML = (`
                <p><h3> <a href="${data[i].owner.html_url}" target="blank">${data[i].owner.login.charAt(0).toUpperCase() + data[i].owner.login.slice(1)}'s</a> Repos</h3></p>
				<p class="avatarpic"><img class="avatar" src="${data[i].owner.avatar_url}" class="avatar"/></p>			
                <p><strong>Repo:</strong> <a href="${data[i].html_url}" target=blank_">${data[i].name}</a></p>
                <p><strong>Description:</strong> ${data[i].description}</p>
                <p><strong>Primary Language:</strong> ${data[i].language}/tags</p>
                <p><strong>Open Issues count</strong> ${data[i].open_issues_count}</p>
                <p><strong>See Open Issues:</strong> <a href="${data[i].html_url}/issues" target=blank_">View Open Issues Here</a></p>

            `);
           
            div.appendChild(p);
		} 
	} 	

}

	reqst.send();

}



export default RepoSearch;





/*			const octokit = new Octokit({
  auth: 'personal-access-token123'
})

 octokit.request('GET /repos/{owner}/{repo}/languages', {
  owner: 'OWNER',
  repo: 'REPO'
})

GET {vaultBaseUrl}/keys?api-version=7.3
 */

	//const languagesList = url+`/${data[i].languages}`;
		//////////////const keys = Object.keys(data[i].language);



	// EXPAND USE add topic search for hackofest?  
	//      <p><strong>topic count</strong> ${data[i].topics}</p>

