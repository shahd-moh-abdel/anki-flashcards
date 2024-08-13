const fs = require("fs");
const AnkiExport = require("anki-apkg-export").default;

const flashcardsJson = fs.readFileSync("flashcards.json", "utf8");
const flashcards = JSON.parse(flashcardsJson);


const apkg = new AnkiExport("Chapter 1: Values, Types, and Operators");

flashcards.forEach((card) => {
  apkg.addCard(card.front, card.back);
});

apkg
  .save()
  .then((zip) => {
    fs.writeFileSync("./output.apkg", zip, "binary");
    console.log("Package has been generated: output.apkg");
  })
  .catch((err) => console.log(err.stack || err));
