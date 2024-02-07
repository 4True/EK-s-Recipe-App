// API keys
const apiKey = "06fa0a19059d4be1a0fed0389115d2a2";
const apiUrl = "https://api.spoonacular.com/recipes/complexSearch";
const imagePlaceholderUrl = "https://placehold.co/700x400"; // Placeholder image URL

// Form submission
function handleFormSubmission(event) {
    event.preventDefault();

    // Get the value from the input field
    const ingredient = document.getElementById("autoSizingInput").value;

    // Check if the ingredient field is not empty
    if (ingredient.trim() !== "") {
        // Build the API URL with ingredient and API key
        const queryUrl = `${apiUrl}?apiKey=${apiKey}&query=${ingredient}&number=1`;

        // Fetch data from Spoonacular API
        fetch(queryUrl)
            .then(response => response.json())
            .then(data => {
                // Check recipes are found
                if (data.results && data.results.length > 0) {
                    // Display recipe image, title, and ingredients
                    displayRecipe(data.results[0]);
                    // Display ingredients
                    displayIngredients(data.results[0]);
                } else {
                    // If no recipe is found, display a placeholder image
                    displayRecipePlaceholder();
                }
            })
            .catch(error => {
                console.error("Error fetching data from Spoonacular API:", error);
                // Display a placeholder image if error found
                displayRecipePlaceholder();
            });
    }
}

// Function to display recipe image, title, and ingredients
function displayRecipe(recipe) {
    const recipeImage = document.getElementById("recipeImage");
    const recipeTitle = document.getElementById("recipeTitle");

    // Set the recipe image 
    recipeImage.src = recipe.image || imagePlaceholderUrl;

    // Recipe title
    recipeTitle.innerText = recipe.title || "Recipe Title";
}

// Function to display ingredients
function displayIngredients(recipe) {
    const ingredientsList = document.getElementById("ingredientsList");

    // Clear the  previous ingredients
    ingredientsList.innerHTML = "";

    // Check if ingredients are available in the recipe object
    if (recipe.extendedIngredients && recipe.extendedIngredients.length > 0) {
        recipe.extendedIngredients.forEach(ingredient => {
            const li = document.createElement("li");
            li.textContent = ingredient.original;
            ingredientsList.appendChild(li);
        });
    } else {
        const li = document.createElement("li");
        li.textContent = "No ingredients found";
        ingredientsList.appendChild(li);
    }
}

// Function to display  placeholder image
function displayRecipePlaceholder() {
    const recipeImage = document.getElementById("recipeImage");
    const recipeTitle = document.getElementById("recipeTitle");

    // Set the recipe image source to placeholder image
    recipeImage.src = imagePlaceholderUrl;

    // Set a recipe title
    recipeTitle.innerText = "Recipe Title";
}

// Event listener to  submission form
document.getElementById("recipeForm").addEventListener("submit", handleFormSubmission);
