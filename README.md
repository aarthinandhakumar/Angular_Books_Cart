# Books Cart Application

**Project Overview**

This application built using AngularJS modules and controllers allows users to manage a list of books with editable fields for title, quantity, and unit price. The application includes real-time updates for totals, the ability to add or remove items, and persists data using Local Storage, along with undo and redo functionalities for enhanced usability.

**Setup Instructions**

- Download the project file or clone the repository.
- Create/rename your project folder and move the downloaded files to your project folder.
- Copy the project folder path.
- Open a command prompt or terminal window.
- Type `cd` (Path to your project).
- Type http-server
- Open your browser and enter `http://192.168.1.66:8080` to view the application.

**Features**

1. **Editable Fields**: Users can edit the title, quantity, and unit price of each book. Adjustments to quantity or unit price instantly reflect in the line total and overall order total.
2. **Dynamic Total Calculation**: The total order value is displayed in the last column of the table header. This value updates automatically with any changes to the quantity or unit price fields.
3. **Add New Book**: The "New" button allows users to add a new book with default values (Title: "New Book," Quantity: 1, Unit Price: 10.99). Each click adds another book to the list.
4. **Remove Book**: The "Remove" button deletes the selected book from the list, and the application view updates automatically.
5. **Persistent Storage**: The "Save" button saves the current list of books to Local Storage under a single key. Upon loading, the application checks Local Storage for previously saved data and loads it if available. If no data is found, the app loads a default book list.
6. **Undo/Redo Functionality**: The application includes undo and redo capabilities for adding and removing books. Users can reverse recent actions to maintain desired changes to the shopping cart.

**API Endpoints**

No external API is required. All data is managed within the application and stored locally using Local Storage.

**License**

This project is licensed under the MIT License - see the [LICENSE](License.txt) file for details.
