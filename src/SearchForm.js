//import React, { Component } from "react";
//import RepoSearch from "./RepoSearch";
//import ReactDOM from 'react-dom';


export default function SearchForm() {
const React = require('react');

const form = document.getElementById("searchForm");

form.addEventListener('submit', function(e){
	e.preventDefault()
	const search = document.getElementById("userInput").value
	const nameEntered = search.split(' ').join('')


	fetch("https://api.github.com/users/"+nameEntered)
	.then((result) => result.json())
	.then((data) => {

		if(data.id === undefined){

      let notFound = document.getElementById("notFound");
      notFound.innerHTML = "Sorry, user "+ nameEntered.charAt(0).toUpperCase() + nameEntered.slice(1) + " not found!";
      
	} else {
	   let notFound = document.getElementById("notFound");
		notFound.innerHTML =" ";
	}


		}) 



	})
}