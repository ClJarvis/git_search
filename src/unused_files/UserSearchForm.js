import React, { Component, useState } from "react";
//import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import './gitSearch.css';

//import Pagination from "./Pagination";


const GitResults = (props) => {
	return (
		<div style={{ padding: '20'}}>
			<a href={props.url}>
				{props.title}
			</a>
		</div>
	);
};
export default function SearchForm() {

    const [hits, setHits] = useState([]);
    const [pageCount, setPageCount] = useState(1);
    const [isLoaded, setisLoaded] = useState(false);
    const [currentPage, setcurrentPage] = useState(0);
    const [query, setQuery] = useState('nameEntered');

const form = document.getElementById("searchForm");

form.addEventListener('submit', function(e){
	e.preventDefault()
	const search = document.getElementById("userInput").value
	const nameEntered = search.split(' ').join('')
	const url = `https://api.github.com/search/users?q=${nameEntered}`


const handleFetch = () => {

	fetch(url)
	.then((result) => result.json())
	.then((data) => {
		for (let i in data.items){

	let div = document.getElementById('searchUsers');
			let p = document.createElement('p');

			console.log(data);

			document.getElementById('searchUsers').innerHTML =(`
			<p></p>
			<p id="count"><strong>${nameEntered} Results Count:</strong> ${data.total_count}</p>
			<a href="https://www.github.com/${nameEntered}" target="blank"> <img class="avatar" src="${data.items[0].avatar_url}" class="avatar"/></a>

			<p><strong>Name 0:</strong> ${data.items[0].login}</p>
			<p><strong>Name 5:</strong> ${data.items[5].login}</p>
			<p><strong>Profile:</strong> <a href="https://www.github.com/${data.items[0].login}" target="blank">${data.items[0].login.charAt(0).toUpperCase() + data.items[0].login.slice(1)}</a></p>

		`)
		        
	            div.appendChild(p);
		            
	}

		})
}


	})
}
//			 <p><strong>Repo:</strong> <a href="${data[i].html_url}" target=blank_">${data[i].name}</a></p>
	//		<p><strong>Profile:</strong> <a href="https://www.github.com/search/users/${nameEntered}" target="blank">${data[i].login.charAt(0).toUpperCase() + data[i].login.slice(1)}</a></p>

//*			<p><strong>Bio:</strong> ${data.bio}</p>
	//		<p><strong>Followers:</strong> ${data.followers}</p>
	//		<a href="https://www.github.com/${nameEntered}" target="blank"> <img class="avatar" src="${data.avatar_url}" class="avatar"/></a>
