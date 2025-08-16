# Dynamic Quote Generator

A simple web application that demonstrates DOM manipulation using vanilla JavaScript. This project allows users to view random quotes and add new quotes dynamically.

## 🚀 Features

- **Random Quote Display**: Click the "Show New Quote" button to display a random quote from the collection
- **Add New Quotes**: Add your own quotes with custom categories
- **Category Filtering**: Filter quotes by category using the dropdown menu
- **Web Storage Integration**: Quotes and filter preferences are saved locally and persist across sessions
- **Session Storage**: Tracks session data including quote count and session duration
- **JSON Import/Export**: Import and export quotes in JSON format for data portability
- **Server Synchronization**: Sync data with simulated server and handle conflicts
- **Conflict Resolution**: Interactive conflict resolution with multiple resolution strategies
- **Auto-Sync**: Automatic synchronization with configurable intervals
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

2. **Filter Quotes by Category**:
   - Use the "Filter by Category" dropdown to select a specific category
   - Choose "All Categories" to view quotes from all categories
   - Your filter preference is automatically saved and restored on future visits

3. **Add New Quotes**:
   - Enter your quote text in the "Enter a new quote" field
   - Enter a category in the "Enter quote category" field
   - Click "Add Quote" to add it to the collection
   - The new quote will be displayed immediately
   - New categories are automatically added to the filter dropdown

4. **Data Management**:
   - **Export Quotes**: Click "Export Quotes (JSON)" to download your quotes as a JSON file
   - **Import Quotes**: Click "Import Quotes (JSON)" to upload and add quotes from a JSON file
   - **Session Tracking**: View session statistics including quote count and session duration

5. **Server Synchronization**:
   - **Manual Sync**: Click "Sync Now" to manually synchronize with the server
   - **Auto-Sync**: Enable automatic synchronization every 30 seconds
   - **Conflict Resolution**: Choose how to resolve data conflicts (Use Server, Keep Local, or Merge)
   - **Sync Status**: Monitor sync status, last sync time, and conflict resolution count

### JavaScript Functionality

#### Core Functions:

- `showRandomQuote()`: Displays a random quote from the collection
- `addQuote()`: Adds a new quote to the collection and displays it
- `filterQuotes()`: Filters quotes based on selected category
- `populateCategories()`: Dynamically populates the category dropdown
- `exportToJson()`: Exports quotes to a downloadable JSON file
- `importFromJsonFile()`: Imports quotes from a JSON file
- `saveSessionData()`: Saves session information to sessionStorage
- `updateSessionInfo()`: Updates the session information display
- `syncQuotes()`: Synchronizes data with simulated server
- `fetchQuotesFromServer()`: Fetches quotes from simulated server API
- `postQuotesToServer()`: Posts quotes to simulated server API
- `detectConflicts()`: Compares local and server data for conflicts
- `resolveConflicts()`: Resolves data conflicts based on user choice
- `checkForNewQuotes()`: Periodically checks for new quotes from server
- `toggleAutoSync()`: Enables/disables automatic synchronization
- `showNotification()`: Shows UI notifications for data updates

#### Key Features:

- **Array Management**: Quotes are stored in a JavaScript array of objects
- **DOM Manipulation**: Direct manipulation of HTML elements using `innerHTML`
- **Event Handling**: Click event listeners for user interactions
- **Input Validation**: Checks for empty fields before adding quotes
- **Web Storage**: Uses localStorage to persist quotes and filter preferences
- **Session Storage**: Tracks session data and user activity
- **Dynamic Filtering**: Real-time filtering of quotes by category
- **JSON Handling**: Import/export functionality with data validation
- **File Operations**: Blob creation and file download capabilities
- **Server Simulation**: Simulates real server interactions with network delays
- **Conflict Detection**: Identifies data conflicts between local and server data
- **Conflict Resolution**: Multiple resolution strategies (server, local, merge)
- **Auto-Sync**: Configurable automatic synchronization intervals
- **Modal UI**: Interactive conflict resolution interface

## 🎨 Customization

You can easily customize this project by:

1. **Adding More Initial Quotes**: Modify the `quotes` array in `script.js`
2. **Changing Styling**: Add CSS styles to `index.html` or create a separate CSS file
3. **Adding Categories**: The category system is flexible and supports any text input
4. **Enhanced Filtering**: Add multiple filter criteria (author, date, etc.)
5. **Export/Import**: Add functionality to export quotes as JSON or import from files

## 📝 Learning Objectives

This project demonstrates:
- DOM element selection and manipulation
- Event handling in JavaScript
- Array operations and random selection
- User input processing and validation
- Dynamic content creation and updates
- Web Storage API (localStorage and sessionStorage) usage
- JSON serialization and deserialization
- File handling with FileReader API
- Blob creation and file download
- Data validation and error handling
- Dynamic filtering and content management
- Session persistence and state management
- Asynchronous programming with async/await
- Server communication simulation
- Conflict detection and resolution strategies
- Real-time data synchronization
- Modal UI implementation
- Network request handling and error management

---

**Note**: This project is part of the ALX Frontend JavaScript curriculum and serves as a practical example of DOM manipulation concepts.
