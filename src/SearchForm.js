import React, { Component } from "react";
//import GitSearch from "./GitSearch";

export default function SearchForm() {

var form = document.getElementById("searchForm");

form.addEventListener('submit', function(e){
	e.preventDefault()
	var search = document.getElementById("userInput").value
	var nameEntered = search.split(' ').join('')


	fetch("https://api.github.com/users/"+nameEntered)
	.then((result) => result.json())
	.then((data) => {



		console.log(data)

		document.getElementById("searchUsers").innerHTML =`
		<p><strong>Profile:</strong> <a href="https://www.github.com/${nameEntered}" target="blank">${data.login.charAt(0).toUpperCase() + data.login.slice(1)}</a></p>
		<a href="https://www.github.com/${nameEntered}" target="blank"> <img src="${data.avatar_url}"/></a>
		<p><strong> Name:</strong> ${data.name}</p>
		<p><strong>Bio:</strong> ${data.bio}</p>
		<p><strong>Followers:</strong> ${data.followers}</p>


	`
	
	})

})
}