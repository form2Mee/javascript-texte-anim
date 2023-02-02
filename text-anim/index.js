const target = document.getElementById("target");
let array = ["développeur", "photographe", "créatif"];
let wordIndex = 0;
let letterIndex = 0;
const createLetter = () => {
  const letter = document.createElement("span");
  target.appendChild(letter);

  letter.textContent = array[wordIndex][letterIndex];
};

// createLetter();

// setInterval(() => {
//   letterIndex++;
//   createLetter();
// }, 200);
const loop = () => {
  setTimeout(() => {
    if (letterIndex < array[wordIndex].length) {
      createLetter();
      letterIndex++;
      loop();
    }
  }, 80);
};
loop();
