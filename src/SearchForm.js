import React, { Component } from "react";
import RepoSearch from "./RepoSearch";
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
//import Pagination from "./Pagination";

export default function SearchForm() {

const form = document.getElementById("searchForm");

form.addEventListener('submit', function(e){
	e.preventDefault()
	const search = document.getElementById("userInput").value
	const nameEntered = search.split(' ').join('')


	fetch("https://api.github.com/users/"+nameEntered)
	.then((result) => result.json())
	.then((data) => {


	let div = document.getElementById('searchUsers');

			console.log(data)

			document.getElementById("searchUsers").innerHTML =`
			<p><strong>Profile:</strong> <a href="https://www.github.com/${nameEntered}" target="blank">${data.login.charAt(0).toUpperCase() + data.login.slice(1)}</a></p>
			<p class="avatarpic"><a href="https://www.github.com/${nameEntered}" target="blank"> <img class="avatar" src="${data.avatar_url}" class="avatar"/></a></p>
			<p><strong>Name:</strong> ${data.name}</p>
			<p><strong>Bio:</strong> ${data.bio}</p>
			<p><strong>Followers:</strong> ${data.followers}</p>
			<p><strong>Public Repos:</strong> ${data.public_repos}</p>
			<hr>
		`
		})

	})
}