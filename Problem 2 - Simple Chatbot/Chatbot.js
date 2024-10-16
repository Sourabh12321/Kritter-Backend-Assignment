const readline = require('readline');

// Create an interface for reading from terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// convert to lowercase and remove special characters
function convertToLowercase(data){
    return data.toLowerCase().replace(/[^a-zA-Z0-9\s]/g, '');
}

// function to split a sentence into words
function sentenceIntoWords(data){
    return data.split(' ').filter(word => word.length > 0);
}

// Calculate the number of common words between two sentences
function getCommonWordCount(words1, words2) {
    const set1 = new Set(words1);
    const set2 = new Set(words2);
    let commonCount = 0;
    for (let word of set1) {
        if (set2.has(word)) {
            commonCount++;
        }
    }
    return commonCount;
}

function findClosestQuestion(userQuestion, qaPairs) {
    // Normalize the user's question (convert to lowercase and remove special characters)
    const normalizedUserQuestion = convertToLowercase(userQuestion)

    let bestMatch = null;
    let maxCommonWords = 0;

    // Iterate through all question-answer pairs
    for (let [question, answer] of qaPairs) {
        const normalizedQuestion = convertToLowercase(question);
        const userWords = sentenceIntoWords(normalizedUserQuestion);
        const questionWords = sentenceIntoWords(normalizedQuestion);
        const commonWordCount = getCommonWordCount(userWords, questionWords);

        // Update best match if the current question has more common words
        if (commonWordCount > maxCommonWords) {
            maxCommonWords = commonWordCount;
            bestMatch = answer;
        }
    }

    // Return the answer corresponding to the best-matching question
    return bestMatch || "I'm not sure how to respond to that.";
}

// Example usage
const qaPairs = [
    ["What is your name?", "My name is Sourabh Rajput."],
    ["I want your help?", "I can assist you with your queries."],
    ["What is AI?", "AI stands for artificial intelligence"],
];

// Ask the user for input through the terminal
rl.question('Ask me a question: ', (userQuestion) => {
    const answer = findClosestQuestion(userQuestion, qaPairs);
    console.log(answer);

    // Close the input stream
    rl.close();
});