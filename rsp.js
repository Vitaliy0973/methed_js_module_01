'use strict';

(() => {
  const FIGURES = {
    figures: ['камень', 'ножницы', 'бумага'],
    winner: 0,

    hwoWinner() {
      const index = this.figures.indexOf(this.userWord);

      if (this.figures[index] === this.compWord) {
        this.winner = 0;
      } else if (index === 2 && this.figures[0] === this.compWord) {
        this.winner = 1;
      } else if (this.figures[index + 1] === this.compWord) {
        this.winner = 1;
      } else {
        this.winner = 2;
      }
    },

    get getUserWord() {
      return this.userWord;
    },

    set knowUserWord(value) {
      this.userWord = value;
    },

    set knowCompWord(value) {
      this.compWord = FIGURES.figures[value];
    },
  };

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const game = () => {
    const checkCorrect =
      (message = 'Давай решим кто будет ходить первым.\n\n') => {
        const userWord = prompt(message +
          `${FIGURES.figures[0][0].toUpperCase()}` +
          `${FIGURES.figures.join(', ').substring(1)}?`);

        if (userWord === null) {
          return null;
        }

        for (const item of FIGURES.figures) {
          if (userWord.toLowerCase()[0] === item[0] &&
            item.includes(userWord.toLowerCase())) {
            FIGURES.knowUserWord = item;
            return item;
          }
        }

        return checkCorrect('Выберите правильную фигуру\n\n');
      };

    return function start() {
      const play = () => {
        const userWorld = checkCorrect();

        if (userWorld === null) {
          return null;
        }

        FIGURES.knowCompWord = getRandomIntInclusive(0, 2);
        FIGURES.hwoWinner();

        if (FIGURES.winner === 0) {
          alert(`Игрок: ${FIGURES.userWord}\n` +
            `Бот: ${FIGURES.compWord}\n\nНичья! Давай попробуем еще раз.`);
        } else if (FIGURES.winner === 1) {
          alert(`Игрок: ${FIGURES.userWord}\n` +
            `Бот: ${FIGURES.compWord}\n\nИгрок победил!`);
          return 0;
        } else {
          alert(`Игрок: ${FIGURES.userWord}\n` +
            `Бот: ${FIGURES.compWord}\n\nБот победил!`);
          return 1;
        }

        return play();
      };

      return play();
    };
  };

  window.RSP = game;
})();
