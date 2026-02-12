Movie search app  
================

In this project, we will create a Movie Search Application that allows users to search for movies and view details about them, such as the title, release date, and plot summary. This project will help us understand how to work with REST APIs, handle JSON data, and dynamically update the DOM in response to user input. By the end of this project, we will be able to fetch data from an external API, display that data in a user-friendly interface, and handle various interactions on a web page.
The project will use the OMDb API (Open Movie Database API) to fetch movie data. This API provides data about movies, including information on title, year, genre, director, cast, and plot, which you will display in your application.


Project Requirements:
=====================
1. User Interface
Search Bar:
Design a simple, user-friendly search bar where users can type in the name of a movie.
Include a "Search" button or make the search happen automatically when users press the Enter key.
Movie List Display:
Display a list of movies that match the search query. Each movie item should display basic information, such as the title, release year, and an image (poster) if available.
Provide a placeholder image for movies without a poster.
Movie Details:
When a user clicks on a movie from the search results, display additional details about the movie, such as the plot, genre, director, and cast.
You can display the details in a new section on the page or in a modal popup.
Responsive Design:
Ensure that the app is responsive and looks good on both desktop and mobile devices.
2. API Integration with OMDb API
API Key:
Sign up for an API key at OMDb API to access movie data.
Use this key to make API requests and retrieve movie information.
Fetch API:
Use the Fetch API in JavaScript to send requests to the OMDb API.
Handle responses and parse JSON data to extract the movie details.
Error Handling:
Handle cases where the API returns an error, such as invalid search terms or no results found.
Display user-friendly error messages in these cases.
