// Let's first figure out what input the user has in the input box

const input = document.getElementById("input");

// Determine if an input is a palindrome
function reverseString(str) {
    return str.split("").reverse().join("")  // Use split to seperate the letters of the string into an array, while you use the reverse method to rearange the letter from the back, use join method to join the array back into a string
}

function check() {
    const value = input.value;
    const reverse = reverseString(value)
    
    if (value === reverse) {
        alert("P A L I N D R O M E")
    } else {
        alert("Try Again!")
    }

    input.value = ""    // Clears the value from the input at the end of code execution
}