'use strict';

{
  const rain = Math.floor(Math.random() * 2);

  console.log(rain === 1 ? 'Пошёл дождь. Возьмите зонт!' : 'Дождя нет!');
}

console.log('');

{
  const points = 265;

  switch (true) {
    case true:
      let mathPoints = prompt('Введите кол-во баллов по математике: ');
      if (mathPoints !== '' && !isNaN(mathPoints)) {
        mathPoints = +mathPoints;
      } else {
        console.log(`Вы ввели некорректные данные`);
        break;
      }
    case true:
      let russianPoints = prompt('Введите кол-во баллов по русскому языку: ');
      if (russianPoints !== '' && !isNaN(russianPoints)) {
        russianPoints = +russianPoints;
      } else {
        console.log(`Вы ввели некорректные данные`);
        break;
      }
    case true:
      let informaticsPoints = prompt('Введите кол-во баллов по информатике: ');
      if (russianPoints !== '' && !isNaN(informaticsPoints)) {
        informaticsPoints = +informaticsPoints;
      } else {
        console.log(`Вы ввели некорректные данные`);
        break;
      }
    default:
      console.log(`Кол-во баллов по математике: ${mathPoints}`)
      console.log(`Кол-во баллов по русскому языку: ${russianPoints}`)
      console.log(`Кол-во баллов по информатике: ${informaticsPoints}`)

      const userSumPoints = mathPoints + russianPoints + informaticsPoints;
      if (userSumPoints >= points) {
        console.log('Поздравляю, вы поступили на бюджет!');
      } else {
        console.log('К сожалению вы не смогли поступили на бюджет!');
      }
  }
}

console.log('');

{
  const cash = 100;
  let userCash = prompt('Cколько денег хотите снять: ');
  if (userCash !== '' && !isNaN(userCash)) {
    userCash = +userCash;
    console.log(userCash % cash === 0 ? 'Банкомат сможет выдать сумму' : 'Банкомат не сможет выдать сумму');
  } else {
    console.log(`Вы ввели некорректные данные`);
  }
}

console.log('');