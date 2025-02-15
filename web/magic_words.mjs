import magicWords from './magicWords.js';

const magicWordsContainer = document.getElementById("magic-words-category-grid");

const uncategorisedMagicWords = []

for(const [key, value] of Object.entries(magicWords))
{
    //add category grid element to DOM
    const categoryContainer = document.createElement("div");
    const header = document.createElement("h3");
    const wordGrid = document.createElement("div");

    categoryContainer.classList.add("magic-words-category");
    wordGrid.classList.add("magic-words-grid");
    header.textContent = key.replaceAll("_", " ");

    magicWordsContainer.appendChild(categoryContainer);
    categoryContainer.appendChild(header);
    categoryContainer.appendChild(wordGrid);

    for(const word of value)
    {
        uncategorisedMagicWords.push(word); //add to flat list

        //add word to DOM
        const paragraph = document.createElement("p");
        paragraph.textContent = word;
        wordGrid.appendChild(paragraph)
    }
}

const labelRandomWord = document.getElementById("label-random-word")
function displayRandomWord() {
    const index = Math.floor(uncategorisedMagicWords.length*Math.random());
    labelRandomWord.textContent = (index+1).toString().concat(". ".concat(uncategorisedMagicWords[index]));
}
document.getElementById("button-random-word").addEventListener('click', displayRandomWord);
displayRandomWord();