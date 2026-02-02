const head = ([first]) => first;

const tail = ([, ...rest]) => rest;

const init = (array) => array.slice(0, -1);

const last = (array) => array[array.length - 1];

const concat = (a, b) => [...a, ...b];

const concatv2 = (...arrays) => {
  let result = [];
  for (const array of arrays) {
    result = [...result, ...array];
  }
  return result;
};

function clone(source) {
  return { ...source };
}

function merge(source, target) {
  return {
    ...target,
    ...source,
  };
}



function isBookRead(books, titleToSearch) {
  const book = books.find(({ title }) => title === titleToSearch);
  return book.isRead;
}


class SlotMachine {
  constructor() {
    this.coins = 0;
  }

  play() {
    this.coins += 1;

    const value1 = Math.random() >= 0.5;
    const value2 = Math.random() >= 0.5;
    const value3 = Math.random() >= 0.5;

    if (value1 && value2 && value3) {
      console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
      this.coins = 0;
    } else {
      console.log("Good luck next time!!");
    }
  }
}
