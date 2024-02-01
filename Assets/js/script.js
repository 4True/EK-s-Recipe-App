// Fetch Function Elements Below
// Define variable for website and API Key - To be defined at later stage
var APIKey = "SPOONACULAR_API_KEY";
var queryURL = "https://api.spoonacular.com/recipes/complexSearch" + APIKey;

// Create fetch call with query parameters - standard method presented in bootcamp. References: © 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
fetch(queryURL)
.then(function (response) {
  return response.json();
})
.then(function (data) {

    console.log(queryURL)
    console.log(data)

});