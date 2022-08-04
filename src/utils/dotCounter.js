import { dotLetters } from "../data/dotLetters";

const dotCounter = (text) => {
  let dot_count = 0;
  const text_split = text.split("");

  text_split.forEach((letter, index, array) => {
    const dotLetterNumber = dotLetters[letter];
    // for other character taht isn't our dotLetters
    if (
      letter === "ی" &&
      array[index + 1] !== " " &&
      array[index + 1] !== undefined
    ) {
      dot_count += 2;
    } else if (dotLetterNumber) {
      dot_count += dotLetterNumber;
    }
  });

  return dot_count;
};

export default dotCounter;
