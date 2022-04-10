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
// changed to https://developer.github.com/v3/search/ vs https://www.github.com/${nameEntered}
			document.getElementById("searchUsers").innerHTML =`
			<p><strong>Profile:</strong> <a href="https://developer.github.com/v3/search/${nameEntered}" target="blank">${data.login.charAt(0).toUpperCase() + data.login.slice(1)}</a></p>
			<p><strong>Name:</strong> ${data.name}</p>
			<p><strong>Bio:</strong> ${data.bio}</p>
			<p><strong>Followers:</strong> ${data.followers}</p>
			<a href="https://www.github.com/${nameEntered}" target="blank"> <img class="avatar" src="${data.avatar_url}" class="avatar"/></a>

		`
		})

	})
}