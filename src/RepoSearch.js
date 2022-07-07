import React, { Component } from "react";
import { Octokit } from "@octokit/rest";
import 'bootstrap/dist/css/bootstrap.css';
import './gitSearch.css';
//import { Octokit } from "https://cdn.skypack.dev/@octokit/rest";

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


/// Attempt to display could not find user message
	if (data[i].id === ''){
			let div = document.getElementById('notFound');

			let p = document.createElement('p');

			p.classList.add('list-group-item')

			            p.innerHTML = (`
                Could not find ${username}.
             
            `);
           
            div.appendChild(p); 
        }


       if (data[i].open_issues_count >= 1) {

            p.innerHTML = (`
                <p><strong>Repo:</strong> <a href="${data[i].html_url}" target=blank_">${data[i].name.charAt(0).toUpperCase() + data[i].name.slice(1)}</a></p>
                <p><strong>Language:</strong> ${data[i].languages_url.language}</p>
             
            `);
           
            div.appendChild(p);
		} 



	} 	
///Alternative Attempt to display could not find user message

if (username === null){
	function notFound() {
      var notFound = document.getElementById("notFound");
      notFound.innerHTML = "User not found";

    
}
      notFound()
  }
		console.log(data);

}

	reqst.send();

}



export default RepoSearch;



/*              <p><h3> <a href="${data[i].owner.html_url}" target="blank">${data[i].owner.login.charAt(0).toUpperCase() + data[i].owner.login.slice(1)}'s</a> Repos</h3></p>
				<p class="avatarpic"><img class="avatar" src="${data[i].owner.avatar_url}" class="avatar"/></p>			
                <p><strong>Repo:</strong> <a href="${data[i].html_url}" target=blank_">${data[i].name.charAt(0).toUpperCase() + data[i].name.slice(1)}</a></p>
                <p><strong>Description:</strong> ${data[i].language}</p>
               <p><strong>Open Issues count:</strong> ${data[i].open_issues_count}</p>
                <p><strong>Open Issues page:</strong> <a href="${data[i].html_url}/issues" target=blank_">View Open Issues on GitHub</a></p>
*/