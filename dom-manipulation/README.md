# Dynamic Quote Generator

A simple web application that demonstrates DOM manipulation using vanilla JavaScript. This project allows users to view random quotes and add new quotes dynamically.

## 🚀 Features

- **Random Quote Display**: Click the "Show New Quote" button to display a random quote from the collection
- **Add New Quotes**: Add your own quotes with custom categories
- **Dynamic Content**: Real-time DOM updates without page refresh
- **Responsive Design**: Clean and simple user interface

## 📁 Project Structure

```
dom-manipulation/
├── index.html          # Main HTML file
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 🛠️ Technologies Used

- **HTML5**: Structure and markup
- **Vanilla JavaScript**: DOM manipulation and interactivity

## 🎯 How to Use

1. **View Random Quotes**:

   - Open `index.html` in your web browser
   - Click the "Show New Quote" button to display a random quote
   - Each quote shows both the text and its category

2. **Add New Quotes**:
   - Enter your quote text in the "Enter a new quote" field
   - Enter a category in the "Enter quote category" field
   - Click "Add Quote" to add it to the collection
   - The new quote will be displayed immediately

### JavaScript Functionality

#### Core Functions:

- `showRandomQuote()`: Displays a random quote from the collection
- `addQuote()`: Adds a new quote to the collection and displays it

#### Key Features:

- **Array Management**: Quotes are stored in a JavaScript array of objects
- **DOM Manipulation**: Direct manipulation of HTML elements using `innerHTML`
- **Event Handling**: Click event listeners for user interactions
- **Input Validation**: Checks for empty fields before adding quotes

## 🎨 Customization

You can easily customize this project by:

1. **Adding More Initial Quotes**: Modify the `quotes` array in `script.js`
2. **Changing Styling**: Add CSS styles to `index.html` or create a separate CSS file
3. **Adding Categories**: The category system is flexible and supports any text input
4. **Persistent Storage**: Add localStorage functionality to save quotes between sessions

- Dynamic content creation and updates

---

**Note**: This project is part of the ALX Frontend JavaScript curriculum and serves as a practical example of DOM manipulation concepts.
