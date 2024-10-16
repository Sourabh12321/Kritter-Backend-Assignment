# Kritter-Backend-Assignment

## Table of Contents

- Question 1: Normalize an Input String.
- Question 2: Simple Chatbot.
- Question 3: Advanced College Ranking System.
- How to Run
- Dependencies

 ## Question 1: Normalize an Input String
 
  ### Problem Description
  
  You are required to create a program that normalizes a given input string. The normalization process includes the following steps:

  1. Remove any extra spaces from the beginning and end of the string.
  2. Remove special characters and punctuation, leaving only alphanumeric characters and spaces.
  3. Replace multiple spaces between words with a single space.
  4. Convert the cleaned string to camel case, where the first letter of each word is capitalized and the rest are in lowercase.

  ### Input
  A single string that may contain uppercase letters, extra spaces, and special characters.

  ### Output
  A single normalized string in camel case format.

  ### Example
### Input
```
" Hello! World@ This is a Test!. "
```
### Output
```
"Hello World This Is A Test"
```

## Question 2: Simple Chatbot

### Problem Description

Create a simple chatbot that answers questions based on a predefined list of question-answer pairs. The chatbot compares the user's input question with the predefined questions and returns the closest matching answer.

### Input
1. A list of question-answer pairs.
2. A user’s input question (string).

### Output
The answer corresponding to the closest matching question.

### Example
Question-answer pairs:
| Question                        | Answer                             |
|---------------------------------|------------------------------------|
| What is your name?             | My name is Chatbot.                |
| How can I help you?            | I can assist you with your queries. |
| What is the weather today?     | The weather is sunny.              |

### Input 
```
"What's the weather like today?"
```
### Output
```
"The weather is sunny."
```
## How to Use

1. **Run the Script**: Open your terminal and navigate to the directory containing the script. Run the script using Node.js:
   ```bash
   node Chatbot.js
   
## Question 3: Advanced College Ranking System
### Problem Description
Create a program to rank a list of colleges based on user preferences. Each college has attributes like name, location, fees, and ranking. The user can filter colleges by location and fees and then rank them by assigning weights to fees and rankings.

### Input
A list of colleges with the following attributes:
1. name (string)
2. location (string)
3. fees (integer)
4. ranking (integer)
5. User inputs:
6. preferred_location (string, selected from a predefined list)
7. max_fees (integer)
8. ranking_weight (integer)
9. fees_weight (integer)

### Output
A list of colleges that match the user’s preferences, sorted by their calculated scores in non-decreasing order.

### Example
Colleges Table:
| Name        | Location    | Fees  | Ranking |
|-------------|-------------|-------|---------|
| College A   | New York    | 20000 | 1       |
| College B   | California  | 15000 | 2       |
| College C   | New York    | 25000 | 3       |
| College D   | New York    | 10000 | 4       |

### Input 
```
preferredLocation = "New York"
maxFees = 20000
rankingWeight = 2
feesWeight = 1
```
### Output
```
Name: College A, Location: New York, Fees: 20000, Ranking: 1, Score: 4.00
Name: College D, Location: New York, Fees: 10000, Ranking: 4, Score: 9.00
```
## Code Explanation 
1. readline Setup: Uses readline to take user input from the terminal.
2. filterCollegesByLocationAndFees(): Filters colleges based on the user’s preferred location and max fees.
3. rankColleges():
   - Accepts the list of colleges and user preferences (location, max fees, ranking weight, and fees weight).
   - Filters the list of colleges based on location and max fees using filterCollegesByLocationAndFees().
   - For each eligible college, it calculates a score using the formula:
```
Score = (Ranking * rankingWeight) + (Fees / maxFees * feesWeight)
```
- The colleges are then sorted in non-decreasing order based on their scores.
4.User Input Handling:
  - The program prompts the user to input their preferred location, max fees, ranking weight, and fees 
    weight using rl.question().
  - Once all inputs are received, the rankColleges() function is called with the provided inputs.
  5. Displaying Results:
 - The list of filtered and ranked colleges is printed to the terminal, showing the name, location, fees, ranking, and score of each college.
6. Closing Input Stream:
   - After processing, rl.close() is called to close the readline interface.
### How to Use:
1. Run the code in a terminal with Node.js.
2. Follow the prompts to input your preferences.
3. The program will display the filtered and ranked list of colleges based on your inputs.

## How to Run
### Steps:
1. Ensure you have Node.js installed.
2. Create separate files for each question:
  - NormalizeAnInputString.js for Question.
  - Chatbot.js for Question .
  - CollegeRankingSystem.js for Question.
3. Run each file using the following command
```
node <filename>.js
```
### Example 
```
node normalizeString.js
```
## Dependencies
- Node.js (required to run the scripts)
- readline module (for terminal interaction in Question 2 and 3)


   



