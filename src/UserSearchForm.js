import React, { Component } from "react";
//import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import './gitSearch.css';

//import Pagination from "./Pagination";

export default function SearchForm() {

const form = document.getElementById("searchForm");

form.addEventListener('submit', function(e){
	e.preventDefault()
	const search = document.getElementById("userInput").value
	const nameEntered = search.split(' ').join('')
//const queryString = 'q=' + encodeURIComponent('GitHub Octocat in:readme user:defunkt');
//https://github.com/search?q=octocat&type=users

	fetch(`https://api.github.com/search/users?q=${nameEntered}`)
	.then((result) => result.json())
	.then((data) => {
		for (let i in data){

	let div = document.getElementById('searchUsers');
			let p = document.createElement('p');
const dataArray =[];
			console.log(data)

			document.getElementById('searchUsers').innerHTML =`
			<p>Total Count ${data.total_count}</p>
			<p><strong>Name 0:</strong> ${data.items[0].login}</p>
			<p><strong>Bio:</strong> ${data.dataArray}</p>
			<p><strong>Name 5:</strong> ${data.items[5].login}</p>
			<p><strong>Profile:</strong> <a href="https://www.github.com/${data.items[0].login}" target="blank">${data.items[0].login.charAt(0).toUpperCase() + data.items[0].login.slice(1)}</a></p>

		`
		        
		            
	}

		})

	})
}
//			 <p><strong>Repo:</strong> <a href="${data[i].html_url}" target=blank_">${data[i].name}</a></p>
	//		<p><strong>Profile:</strong> <a href="https://www.github.com/search/users/${nameEntered}" target="blank">${data[i].login.charAt(0).toUpperCase() + data[i].login.slice(1)}</a></p>

//*			<p><strong>Bio:</strong> ${data.bio}</p>
	//		<p><strong>Followers:</strong> ${data.followers}</p>
	//		<a href="https://www.github.com/${nameEntered}" target="blank"> <img class="avatar" src="${data.avatar_url}" class="avatar"/></a>
