// Fetch Function Elements Below
// Define variable for website and API Key - To be defined at later stage
let queryParameters = "" + APIKey;
let APIKey ="";

// Create fetch call with query parameters - standard method presented in bootcamp. References: © 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
fetch(queryParameters)
.then(function (response) {
  return response.json();
})
.then(function (data) {

    console.log(data)

});