document.addEventListener("DOMContentLoaded", () => {
  // ===== Data =====
  let quotes = [
    {
      text: "The best way to predict the future is to create it.",
      category: "Motivation",
    },
    { text: "JavaScript is the language of the web.", category: "Programming" },
    {
      text: "Do one thing every day that scares you.",
      category: "Inspiration",
    },
  ];

  // ===== DOM refs =====
  const quoteDisplay = document.getElementById("quoteDisplay");
  const newQuoteBtn = document.getElementById("newQuote");
  const categoryFilter = document.getElementById("categoryFilter");

  // ===== Web Storage Functions =====
  
  // Load quotes from localStorage on page load
  function loadQuotesFromStorage() {
    const storedQuotes = localStorage.getItem('quotes');
    if (storedQuotes) {
      quotes = JSON.parse(storedQuotes);
    }
  }

  // Save quotes to localStorage
  function saveQuotesToStorage() {
    localStorage.setItem('quotes', JSON.stringify(quotes));
  }

  // Load last selected filter from localStorage
  function loadLastFilter() {
    const lastFilter = localStorage.getItem('lastFilter');
    if (lastFilter && categoryFilter) {
      categoryFilter.value = lastFilter;
    }
  }

  // Save current filter to localStorage
  function saveFilterToStorage() {
    if (categoryFilter) {
      localStorage.setItem('lastFilter', categoryFilter.value);
    }
  }

  // ===== Filtering Functions =====
  
  // Populate categories dynamically
  function populateCategories() {
    if (!categoryFilter) return;
    
    // Get unique categories from quotes
    const categories = [...new Set(quotes.map(quote => quote.category))];
    
    // Clear existing options except "All Categories"
    categoryFilter.innerHTML = '<option value="all">All Categories</option>';
    
    // Add category options
    categories.forEach(category => {
      const option = document.createElement('option');
      option.value = category;
      option.textContent = category;
      categoryFilter.appendChild(option);
    });
  }

  // Filter quotes based on selected category
  function filterQuotes() {
    if (!categoryFilter) return;
    
    const selectedCategory = categoryFilter.value;
    saveFilterToStorage();
    
    let filteredQuotes = quotes;
    
    if (selectedCategory !== 'all') {
      filteredQuotes = quotes.filter(quote => quote.category === selectedCategory);
    }
    
    if (filteredQuotes.length === 0) {
      quoteDisplay.innerHTML = `<p>No quotes found for category: "${selectedCategory}"</p>`;
      return;
    }
    
    // Show a random quote from the filtered results
    const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
    renderQuote(filteredQuotes[randomIndex]);
  }

  // Render helper
  function renderQuote(quote) {
    quoteDisplay.innerHTML = `
      <p>"${quote.text}"</p>
      <small>— ${quote.category}</small>
    `;
  }

  // Show random quote (required)
  function showRandomQuote() {
    if (quotes.length === 0) {
      quoteDisplay.innerHTML = "<p>No quotes available.</p>";
      return;
    }
    const idx = Math.floor(Math.random() * quotes.length);
    renderQuote(quotes[idx]);
  }

  // Add quote (required: updates array + DOM)
  function addQuote() {
    const textInput = document.getElementById("newQuoteText");
    const catInput = document.getElementById("newQuoteCategory");
    if (!textInput || !catInput) return;

    const text = textInput.value.trim();
    const category = catInput.value.trim();

    if (!text || !category) {
      alert("Please enter both a quote and a category.");
      return;
    }

    const newQuote = { text, category };
    quotes.push(newQuote); // <-- updates array
    renderQuote(newQuote); // <-- updates DOM
    
    // Save to localStorage
    saveQuotesToStorage();
    
    // Update categories dropdown if new category
    populateCategories();

    textInput.value = "";
    catInput.value = "";
  }

  // Dynamically create the add-quote form (required name)
  function createAddQuoteForm() {
    // Avoid duplicating if the form already exists in HTML
    if (
      document.getElementById("newQuoteText") &&
      document.getElementById("newQuoteCategory")
    ) {
      // Wire up existing button if present
      const existingAddBtn = document.getElementById("addQuoteBtn");
      if (existingAddBtn) existingAddBtn.addEventListener("click", addQuote);
      return;
    }

    const wrapper = document.createElement("div");
    wrapper.id = "addQuoteContainer";

    const inputText = document.createElement("input");
    inputText.type = "text";
    inputText.id = "newQuoteText";
    inputText.placeholder = "Enter a new quote";

    const inputCat = document.createElement("input");
    inputCat.type = "text";
    inputCat.id = "newQuoteCategory";
    inputCat.placeholder = "Enter quote category";

    const addBtn = document.createElement("button");
    addBtn.id = "addQuoteBtn";
    addBtn.textContent = "Add Quote";
    addBtn.addEventListener("click", addQuote);

    wrapper.appendChild(inputText);
    wrapper.appendChild(inputCat);
    wrapper.appendChild(addBtn);

    // Place right after the quoteDisplay container
    quoteDisplay.insertAdjacentElement("afterend", wrapper);
  }

  // Event listener on the “Show New Quote” button (required)
  newQuoteBtn.addEventListener("click", showRandomQuote);

  // Init
  loadQuotesFromStorage(); // Load quotes from localStorage
  createAddQuoteForm();
  populateCategories(); // Populate category filter
  loadLastFilter(); // Load last selected filter
  showRandomQuote();

  // Expose for inline HTML handlers if your page uses them
  window.addQuote = addQuote;
  window.showRandomQuote = showRandomQuote;
  window.createAddQuoteForm = createAddQuoteForm;
  window.filterQuotes = filterQuotes; // Expose filter function for HTML
});
