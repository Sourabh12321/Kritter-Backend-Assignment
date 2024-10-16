const readline = require('readline');

// Create an interface for reading from terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Filter colleges based on location and max fees
function filterCollegesByLocationAndFees(colleges,preferredLocation,maxFees){
    return colleges.filter(college => 
        college.location.toLowerCase() === preferredLocation.toLowerCase() && college.fees <= maxFees
    );
}



function rankColleges(colleges, preferredLocation, maxFees, rankingWeight, feesWeight) {

    const eligibleColleges = filterCollegesByLocationAndFees(colleges,preferredLocation,maxFees)

    // Calculate score for each college based on the formula
    eligibleColleges.forEach(college => {
        const rankingScore = college.ranking * rankingWeight;
        const feesScore = (college.fees / maxFees) * feesWeight;
        college.score = rankingScore + feesScore;
    });

    // Sort colleges by their score in non-decreasing order
    eligibleColleges.sort((a, b) => a.score - b.score);

    // Return the sorted list of colleges
    return eligibleColleges;
}

// Example usage:
const colleges = [
    { name: "College A", location: "New York", fees: 20000, ranking: 1 },
    { name: "College B", location: "California", fees: 15000, ranking: 2 },
    { name: "College C", location: "New York", fees: 25000, ranking: 3 },
    { name: "College D", location: "New York", fees: 10000, ranking: 4 }
];


// Ask user for inputs
rl.question('Enter your preferred location: ', (preferredLocation) => {
    rl.question('Enter your maximum fees: ', (maxFeesInput) => {
        rl.question('Enter ranking weight: ', (rankingWeightInput) => {
            rl.question('Enter fees weight: ', (feesWeightInput) => {
                //Converting string into numbers
                const maxFees = parseInt(maxFeesInput);
                const rankingWeight = parseInt(rankingWeightInput);
                const feesWeight = parseInt(feesWeightInput);

                const rankedColleges = rankColleges(colleges, preferredLocation, maxFees, rankingWeight, feesWeight);

                // Output the results
                console.log("\nColleges that match your preferences:\n");
                rankedColleges.forEach(college => {
                    console.log(`Name: ${college.name}, Location: ${college.location}, Fees: ${college.fees}, Ranking: ${college.ranking}, Score: ${college.score.toFixed(2)}`);
                });

                // Close the input stream
                rl.close();
            });
        });
    });
});