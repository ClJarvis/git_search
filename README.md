# GitSearch

This project is a Repo search using the gitHub API. The current version shows a user's avatar and some of their repos that have open issues. 

## Usage

The intent is for the user to search for repos with open issues. Each repo will appear in its own card with a description and an open issue count. The user can then click the url to go directly to the repo's open issues.

## What is happening?

    1. Entering a  name triggers an API call to see if that user exists. * A If user does not exist viewer will get a message that the user is  not found.
    * B If user does exist another call will will check for repos with open issues.
    2. If user has no open issue only user info card will appear. 
    3. Repo Cards only appear for repos with open issues.


## Tech

React, JavaScript, CSS, HTML, GitHub's API

## Theme

Colors are based on gitHub's dark mode with a gradient background the starts dark green and transitions to medium green and back. The more results, ie more repos with open issues, the longer the page is.
An earlier version has a brighter green but I decided it was just too bright on screen. Now the color transition is more subtle.
