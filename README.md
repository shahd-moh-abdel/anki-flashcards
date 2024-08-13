# JSON to Anki .apkg Converter

This project contains a script that converts a JSON file of flashcards into an Anki .apkg file, which can be imported directly into Anki, including the mobile app.

## Prerequisites

- Node.js (Download and install from [nodejs.org](https://nodejs.org/))

## Setup

1. Clone or download this repository to your local machine.

2. Open a terminal or command prompt and navigate to the project directory.

3. Run the following command to install the required dependencies:

   ```
   npm install
   ```

## Usage

1. Put your flashcards in `flashcards.json` in the following format:

   ```json
   [
     {
       "front": "Question 1",
       "back": "Answer 1"
     },
     {
       "front": "Question 2",
       "back": "Answer 2"
     }
   ]
   ```

2. Run the conversion script:

   ```
   node convertToAnkiApkg.js
   ```

3. After the script runs successfully, you will find a new file named `output.apkg` in the same directory.

4. Import the `output.apkg` file into Anki:
   - Open Anki
   - Go to File > Import
   - Select the `output.apkg` file
   - The flashcards will be imported into a new deck named "Chapter 1: Values, Types, and Operators"

## Troubleshooting

If you encounter any issues:

1. Make sure you have Node.js installed correctly.
2. Ensure that you've run `npm install` to install all necessary dependencies.
3. Check that your `flashcards.json` file is properly formatted JSON.
4. If you're still having problems, please open an issue in this repository with a description of the error you're seeing.
