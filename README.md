Palindrome Checker

This is a simple web application built using HTML, CSS, and vanilla JavaScript that checks if a given word or phrase is a palindrome. It is designed to handle common real-world inputs by ignoring capitalization, spaces, and punctuation.

Features

Robust Palindrome Logic: Correctly identifies phrases like "A man, a plan, a canal: Panama" as palindromes by filtering out non-alphanumeric characters and ignoring case sensitivity.
Clear UI Feedback: Displays results directly on the page.
Dynamic Styling: Uses CSS classes to provide visual feedback (green for success, red for failure).
Accessibility: Utilizes a standard HTML `<form>` structure, allowing users to submit input using the Enter key.
Input Validation: Handles empty or non-alphanumeric-only inputs gracefully.

Technologies Used

HTML5: Structure and content.
CSS3: Basic styling for an improved user experience.
JavaScript (ES6+): Core logic for string manipulation and DOM interaction.

Project Structure

The project is contained within three files:

index.html # Main structure and UI
style.css # Styling for the application
script.js # Core palindrome checking logic

Key JavaScript Logic

The core robustness of the checker lies in the `cleanString` function:

javascript
function cleanString(str) {
    // Converts to lowercase and uses a Regular Expression to remove 
    // any character that is NOT a letter (a-z) or a number (0-9).
    return str.toLowerCase().replace(/[^a-z0-9]/g, "");
}

The main checkPalindrome function then:
Prevents the default form submission (event.preventDefault()).
Passes the user input to cleanString() to create a standardized version.
Reverses the standardized string using standard string methods (.split(), .reverse(), .join()).
Compares the standardized string with its reversed version.
Updates the DOM with the result and corresponding style.

Getting Started
Prerequisites
You need a modern web browser (like Chrome, Firefox, or Edge) to view the project.

Installation
Clone or Download: Download the three project files (index.html, style.css, and script.js) into a single folder on your computer.

Open: Simply open the index.html file in your preferred web browser.

Alternatively, you can run it using a local development server (e.g., VS Code's Live Server extension) for a better development experience.

Contributing
This is a small, complete project, but improvements are always welcome!

Fork the repository.

Create your feature branch (git checkout -b feature/AmazingFeature).

Commit your changes (git commit -m 'Add some AmazingFeature').

Push to the branch (git push origin feature/AmazingFeature).

Open a Pull Request.

License

The Robust Palindrome Checker project is licensed under the MIT License.