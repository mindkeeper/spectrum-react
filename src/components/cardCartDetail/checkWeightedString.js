function checkWeightedString(input, query) {
  // Create an object to store the weights of the characters
  const weights = {};
  for (let i = 0; i < input.length; i++) {
    // Assign the weight of the character as its ASCII value - 96
    weights[input[i]] = input.charCodeAt(i) - 96;
  }

  // Create an array to store the weights of the substrings
  const substringWeights = [];
  for (let i = 0; i < input.length; i++) {
    let weight = 0;
    for (let j = i; j < input.length; j++) {
      // If the characters at positions i and j are not the same, stop adding weights
      if (input[i] !== input[j]) {
        break;
      }
      // Add the weight of the character at position j to the total weight
      weight += weights[input[j]];
      // Add the weight to the array of substring weights
      substringWeights.push(weight);
    }
  }

  // Create an array to store the results
  const results = [];
  for (const q of query) {
    // Check if the query value is in the array of substring weights
    if (substringWeights.includes(q)) {
      results.push("yes");
    } else {
      results.push("no");
    }
  }
  return results;
}

console.log(checkWeightedString("abbcccdddd", [1, 7, 5, 4, 15]));
// //console.log(checkWeightedString("aaabbbbcccddd", [9, 7, 8, 12, 15]));
