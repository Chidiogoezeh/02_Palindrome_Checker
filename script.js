// --- DOM Element Selection ---
const form = document.getElementById("palindrome-form");
const input = document.getElementById("input-text");
const resultContainer = document.getElementById("result-container");
const resultMessage = document.getElementById("result-message");

// --- Helper Functions ---

/**
 * Removes all non-alphanumeric characters (including spaces and punctuation)
 * and converts the string to lowercase for a case-insensitive check.
 * @param {string} str - The raw input string.
 * @returns {string} The cleaned, normalized string.
 */
function cleanString(str) {
    // This regular expression keeps only letters (a-z) and numbers (0-9)
    // The 'g' flag ensures all matches are replaced.
    return str.toLowerCase().replace(/[^a-z0-9]/g, "");
}

/**
 * Reverses a string.
 * @param {string} str - The string to reverse.
 * @returns {string} The reversed string.
 */
function reverseString(str) {
    // Split the string into an array, reverse the array, then join back into a string
    return str.split("").reverse().join("");
}

// --- Main Check Function ---

function checkPalindrome(event) {
    // Prevent the default form submission behavior (page reload)
    event.preventDefault();

    const rawValue = input.value.trim();

    // Reset classes for the result container
    resultContainer.className = '';

    // 1. Handle Empty Input
    if (rawValue === "") {
        resultMessage.textContent = "⚠️ Please enter text to check!";
        resultContainer.classList.add("empty-input");
        return; // Exit the function
    }

    // 2. Clean and Normalize the String
    const clean = cleanString(rawValue);
    
    // If, after cleaning, the string is empty (e.g., input was just "."), handle this.
    if (clean.length === 0) {
        resultMessage.textContent = "⚠️ Please enter text that contains letters or numbers!";
        resultContainer.classList.add("empty-input");
        return;
    }

    // 3. Reverse the Cleaned String
    const reversedClean = reverseString(clean);

    // 4. Compare and Display Result
    if (clean === reversedClean) {
        // Palindrome
        resultMessage.textContent = `"${rawValue}" is a PALINDROME! 🎉`;
        resultContainer.classList.add("is-palindrome");
    } else {
        // Not a palindrome
        resultMessage.textContent = `"${rawValue}" is NOT a palindrome.`;
        resultContainer.classList.add("not-palindrome");
    }

    // Optional: Clear the input field after checking
    input.value = "";
}

// --- Event Listener ---
form.addEventListener("submit", checkPalindrome);