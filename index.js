#!/usr/bin/env node

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputLines = [];

console.log("Please enter the JSON input (press Enter twice when done):");

rl.on("line", (input) => {
  if (input.trim() === "" && inputLines.length > 0) {
    // End of input
    const fullInput = inputLines.join("\n");
    try {
      // Parse the JSON input
      const jsonInput = JSON.parse(fullInput);

      // Extracting the values
      const accessKeyId = jsonInput.Credentials.AccessKeyId;
      const secretAccessKey = jsonInput.Credentials.SecretAccessKey;
      const sessionToken = jsonInput.Credentials.SessionToken;

      // Generate the export commands
      const commands = `
export AWS_ACCESS_KEY_ID=${accessKeyId}
export AWS_SECRET_ACCESS_KEY=${secretAccessKey}
export AWS_DEFAULT_REGION=ap-south-1
export AWS_SESSION_TOKEN=${sessionToken}
            `;

      console.log(commands.trim());

      // Close the readline interface
      rl.close();
    } catch (error) {
      console.error("Invalid JSON input. Please try again.");
      inputLines = [];
    }
  } else {
    inputLines.push(input);
  }
});
