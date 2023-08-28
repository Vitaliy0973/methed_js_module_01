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

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const getFigure = (lang) => { };

  const game = (language) => {
    const result = {
      player: 0,
      computer: 0,
      get whoWin() {
        if (this.player > this.computer) return 'Вы победили!';
        if (this.player < this.computer) return 'Компьютер победил';
        return 'Ничья!';
      },
    };

    const chooseWin = (compWorld, wordWin) => {
      if (compWorld === wordWin) {
        result.computer += 1;
        alert('Компьютер победил!');
      } else {
        result.player += 1;
        alert('Вы победили!');
      }
    };

    const lang = language === 'EN' || language === 'ENG' ?
      Object.keys(FIGURES_ENG) : Object.keys(FIGURES_RUS);

    const fight = language === 'EN' || language === 'ENG' ?
      FIGURES_ENG : FIGURES_RUS;
    console.log('fight: ', fight);

    return function start() {
      let userWord = 1;

      while (!(userWord === null)) {
        let ask = false;
        userWord = prompt(`${lang.join(', ')}?`);
        const compWorld = lang[getRandomIntInclusive(0, 2)];

        if (userWord !== null) {
          if (userWord.length > 2) {
            if (compWorld.includes(userWord.toLowerCase())) {
              alert('Ничья!');
            } else {
              for (const item of lang) {
                if (item.includes(userWord.toLowerCase())) {
                  chooseWin(compWorld, fight[item]);
                  ask = true;
                }
              }
            }

            if (ask) {
              if (!confirm('Еще?')) userWord = null;
            }
          }
        }
      }
      alert(`Компьютер: ${result.computer}
Вы: ${result.player}
${result.whoWin}`);
    };
  };

  window.RPS = game;
})();

// Вопрос "камень,ножницы,бумага?"

// Ответ:
  // Компьютер: камень
  // Вы: камень
  // Ничья

// Если ничья сразу новый вопрос, если победа то вопрос "Еще?".
// При этом есть "ок" и "отмена" но нет поля для ввода.

// Вводить можно как полностью слово, так и частично. Даже одну первую букву.

// Если неправильный ввод, то просто повторяется вопрос "камень,ножницы,бумага?"

// Если на вопрос "Еще?" ответить "отмена" то выводим статистику ответов.
