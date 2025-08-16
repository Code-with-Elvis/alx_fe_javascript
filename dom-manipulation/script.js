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
  createAddQuoteForm();
  showRandomQuote();

  // Expose for inline HTML handlers if your page uses them
  window.addQuote = addQuote;
  window.showRandomQuote = showRandomQuote;
  window.createAddQuoteForm = createAddQuoteForm;
});
