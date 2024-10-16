// Remove all characters that aren't letters, numbers, or spaces.
function removeNonAlphanumeric(data) {
    return data?.replace(/[^a-zA-Z0-9\s]/g, '');
}

// Convert consecutive spaces to a single space
function removeConsecutiveSpaces(data) {
    return data?.replace(/\s+/g, ' ');
}

// Transform the string to camel case
function transformToCamelcase(data) {
    return data?.toLowerCase()?.split(' ')?.map(word =>
        word[0].toUpperCase() + word.slice(1)
    ).join(' ');
}

function formatString(input) {
    // Remove leading and trailing spaces
    let res = input.trim();
    return transformToCamelcase(removeConsecutiveSpaces(removeNonAlphanumeric(res)))
}

// Example usage
const input = " Hello! World@ This is a Test!. ";
const input1 = " 123 Testing! numbers& in this 456 string* ";
const input2 = "   This    has    multiple   spaces   ";
const output = formatString(input);
const output1 = formatString(input1);
const output2 = formatString(input2);
console.log(output,output1,output2); 

// Time Complexity: O(n)
// Space Complexity: O(1)