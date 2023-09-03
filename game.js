'use strict';

(() => {
  const startRSP = window.RSP();
  const GAME_DATA = {
    userCountBall: 5,
    botCountBall: 5,
    playerOne: 'Игрок',
    playerTwo: 'Бот',

    correctCount() {
      if (this.userCountBall > 10) {
        this.userCountBall = 10;
        this.botCountBall = 0;
      }

      if (this.botCountBall > 10) {
        this.userCountBall = 0;
        this.botCountBall = 10;
      }
    },

    changeCount(ballCount, compAsk) {
      const signMultiplier = this.playerOne === 'Бот' ? 1 : -1;

      if (ballCount % 2 === compAsk) {
        this.botCountBall -= ballCount * signMultiplier;
        this.userCountBall += ballCount * signMultiplier;
      } else {
        this.botCountBall += ballCount * signMultiplier;
        this.userCountBall -= ballCount * signMultiplier;
      }

      this.correctCount();
    },

    reset() {
      this.userCountBall = 5;
      this.botCountBall = 5;
    },

    get getCount() {
      return 'Количесво шариков' +
        `\nИгрок: ${this.userCountBall}\nБот: ${this.botCountBall}`;
    },

    get whoWinner() {
      if (this.userCountBall >= 10) {
        return `Игрок победил!\n\n${this.getCount}`;
      }
      return `Бот победил!\n\n${this.getCount}`;
    },

    set whoPlayerOne(player) {
      this.playerOne = player;
    },

    set whoPlayerTwo(player) {
      this.playerTwo = player;
    },
  };

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const game = (lang) => {
    const checkCorrectNumber = () => {
      const userNum = prompt('Загадайте число шариков:');

      if (userNum === null) {
        return null;
      }

      if (!Number.isNaN(parseFloat(userNum)) && isFinite(userNum)) {
        if (userNum > GAME_DATA.userCountBall) {
          alert('Нельзя загадывать больше шариков, чем у тебя есть.');
        } else if (userNum < 1) {
          alert('Вы должны загадать минимум 1 шарик.');
        } else {
          return +userNum;
        }
      } else {
        alert('Введите число!');
      }

      return checkCorrectNumber();
    };

    const whoseMove = (move) => {
      if (move === null) {
        return [null, null];
      }

      if (move % 2 === 0) {
        const playerOne = checkCorrectNumber();
        const playerTwo = GAME_DATA.userCountBall === 1 ? 1 :
          getRandomIntInclusive(0, 1);
        GAME_DATA.whoPlayerOne = 'Игрок';
        GAME_DATA.whoPlayerTwo = 'Бот';

        return [playerOne, playerTwo];
      }

      const playerOne = getRandomIntInclusive(1, GAME_DATA.botCountBall);
      const playerTwo = +(!confirm('Число четное?'));
      GAME_DATA.whoPlayerOne = 'Бот';
      GAME_DATA.whoPlayerTwo = 'Игрок';

      return [playerOne, playerTwo];
    };

    return function start(move = 0) {
      const play = (move) => {
        const [playerOne, playerTwo] = whoseMove(move);

        if (playerOne === null) {
          return null;
        }

        GAME_DATA.changeCount(playerOne, playerTwo);

        switch (true) {
          case GAME_DATA.userCountBall <= 0:
          case GAME_DATA.userCountBall >= 10:
            alert(GAME_DATA.whoWinner);

            if (confirm('Хотите сыграть еще?')) {
              GAME_DATA.reset();
              return 1;
            }
            return null;

          case playerOne % 2 === playerTwo:
            alert(`${GAME_DATA.playerTwo} угадал!\n\n${GAME_DATA.getCount}`);
            break;
          default:
            alert(`${GAME_DATA.playerTwo} ошибся!\n\n${GAME_DATA.getCount}`);
        }

        return play(++move);
      };

      while (true) {
        const result = play(startRSP());

        if (result === null) {
          return null;
        }
      }
    };
  };

  window.marble = game;
})();
