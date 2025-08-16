// Initial set of quotes
let quotes = [
  {
    text: "The best way to predict the future is to create it.",
    category: "Motivation",
  },
  { text: "JavaScript is the language of the web.", category: "Programming" },
  { text: "Do one thing every day that scares you.", category: "Inspiration" },
];

// Get references to DOM elements
const quoteDisplay = document.getElementById("quoteDisplay");
const newQuoteBtn = document.getElementById("newQuote");
const newQuoteText = document.getElementById("newQuoteText");
const newQuoteCategory = document.getElementById("newQuoteCategory");

// Function to show a random quote
function showRandomQuote() {
  if (quotes.length === 0) {
    quoteDisplay.innerHTML = "<p>No quotes available.</p>";
    return;
  }

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteDisplay.innerHTML = `
    <p>"${randomQuote.text}"</p>
    <small>— ${randomQuote.category}</small>
  `;
}

// Function to add a new quote
function addQuote() {
  const text = newQuoteText.value.trim();
  const category = newQuoteCategory.value.trim();

  if (text === "" || category === "") {
    alert("Please enter both a quote and a category.");
    return;
  }

  const newQuote = { text, category };
  quotes.push(newQuote);

  // Clear input fields after adding
  newQuoteText.value = "";
  newQuoteCategory.value = "";

  // Show the newly added quote immediately
  quoteDisplay.innerHTML = `
    <p>"${newQuote.text}"</p>
    <small>— ${newQuote.category}</small>
  `;
}

// Attach event listener for new quote button
newQuoteBtn.addEventListener("click", showRandomQuote);

// Show one quote on initial load
showRandomQuote();
