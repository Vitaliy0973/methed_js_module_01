'use strict';

(() => {
  const FIGURES_ENG = {
    rock: 'paper',
    scissors: 'rock',
    paper: 'scissors',
  };
  const FIGURES_RUS = {
    камень: 'бумага',
    ножницы: 'камень',
    бумага: 'ножницы',
  };

  const ENGLISH_WORDS = {
    user: 'You',
    comp: 'Computer',
    exit: 'Are you sure you want to go out?',
    more: 'More?',
    draw: 'Draw!',
    userWin: 'You won!',
    computerWin: 'The computer won!',
  };
  const RUSSIAN_WORDS = {
    user: 'Вы',
    comp: 'Компьютер',
    exit: 'Вы точно хотите выйти?',
    more: 'Еще?',
    draw: 'Ничья!',
    userWin: 'Вы победили!',
    computerWin: 'Компьютер победил!',
  };

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const game = (language) => {
    const lang = language === 'EN' || language === 'ENG' ?
      Object.keys(FIGURES_ENG) : Object.keys(FIGURES_RUS);

    const fight = language === 'EN' || language === 'ENG' ?
      FIGURES_ENG : FIGURES_RUS;

    const gameLang = language === 'EN' || language === 'ENG' ?
      ENGLISH_WORDS : RUSSIAN_WORDS;

    const result = {
      player: 0,
      computer: 0,
      get whoWin() {
        return this.player > this.computer ? gameLang.userWin :
          this.player < this.computer ? gameLang.computerWin : gameLang.draw;
      },
    };

    const announceWinner = (userWord, compWord, whoWin) => {
      alert(`${gameLang.comp}: ${compWord}
${gameLang.user}: ${userWord}
${whoWin}`);
    };

    const checkCorrect = (str, arr) => {
      let index = 0;

      if (str === null) {
        return null;
      }

      const innerLoop = (str) => {
        if (index >= arr.length) {
          return null;
        } else if (str.toLowerCase()[0] === arr[index][0] &&
          arr[index].includes(str.toLowerCase())) {
          return arr[index];
        }

        index++;

        return innerLoop(str);
      };

      return innerLoop(str.trim());
    };

    const chooseWin = (userWord, compWorld, wordWin) => {
      if (userWord === wordWin) {
        result.player += 1;
        announceWinner(userWord, compWorld, gameLang.userWin);
      } else {
        result.computer += 1;
        announceWinner(userWord, compWorld, gameLang.computerWin);
      }
    };

    return function start() {
      const play = () => {
        const userWord = prompt(`${lang.join(', ')}?`);
        const compWorld = lang[getRandomIntInclusive(0, 2)];
        const correctWord = checkCorrect(userWord, lang);

        if (userWord === null) {
          if (confirm(gameLang.exit)) {
            // Нужно ли возвращять null?
            return null;
          }
        }

        if (correctWord) {
          if (correctWord === compWorld) {
            announceWinner(correctWord, compWorld, gameLang.draw);
          } else {
            chooseWin(correctWord, compWorld,
              fight[lang[lang.indexOf(compWorld)]]);
          }

          if (!confirm(gameLang.more)) {
            // Нужно ли возвращять null?
            return null;
          }
        }

        play();
      };

      play();

      announceWinner(result.player, result.computer, result.whoWin);
    };
  };

  window.RPS = game;
})();
