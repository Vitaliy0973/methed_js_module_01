'use strict';

(() => {
  const startRSP = window.RSP();
  const BALL = {
    userCountBall: 5,
    botCountBall: 5,
    playerOne: 'Игрок',
    playerTwo: 'Бот',

    changeCount(ballCount, compAsk) {
      const signMultiplier = this.playerOne === 'Бот' ? 1 : -1;
      if (ballCount % 2 === compAsk) {
        this.botCountBall -= ballCount * signMultiplier;
        this.userCountBall += ballCount * signMultiplier;
      } else {
        this.botCountBall += ballCount * signMultiplier;
        this.userCountBall -= ballCount * signMultiplier;
      }
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
        if (userNum > BALL.userCountBall) {
          alert('Нельзя загадывать больше шариков, чем у тебя есть.');
        } else if (userNum < 1) {
          alert('Вы должны загадать минимум 1 шарик.');
        } else {
          return +userNum;
        }
      }

      alert('Введите число!');
      return checkCorrectNumber();
    };

    const whoseMove = (move) => {
      if (move === null) {
        return [null, null];
      } else if (move % 2 === 0) {
        const playerOne = checkCorrectNumber();
        const playerTwo = getRandomIntInclusive(0, 1);
        BALL.whoPlayerOne = 'Игрок';
        BALL.whoPlayerTwo = 'Бот';

        return [playerOne, playerTwo];
      } else {
        const playerOne = getRandomIntInclusive(1, BALL.botCountBall);
        const playerTwo = +(!confirm('Число четное?'));
        BALL.whoPlayerOne = 'Бот';
        BALL.whoPlayerTwo = 'Игрок';

        return [playerOne, playerTwo];
      }
    };

    return function start(move = 0) {
      const play = (move) => {
        const [playerOne, playerTwo] = whoseMove(move);

        if (playerOne === null) {
          return null;
        }

        BALL.changeCount(playerOne, playerTwo);

        switch (true) {
          case BALL.userCountBall <= 0:
          case BALL.userCountBall >= 10:
            alert(BALL.whoWinner);

            if (confirm('Хотите сыграть еще?')) {
              BALL.reset();
              return 1;
            }
            return null;

          case playerOne % 2 === playerTwo:
            alert(`${BALL.playerTwo} угадал!\n\n${BALL.getCount}`);
            break;
          default:
            alert(`${BALL.playerTwo} ошибся!\n\n${BALL.getCount}`);
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
