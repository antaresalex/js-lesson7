/**
В переменных a и b хранятся числа. Написать
программу, которая выводит в консоль произведение
и сумму этих чисел.
 */
export function printSumAndMultiplication(aVariable, bVariable) {
  const sum = aVariable + bVariable;
  const multiplication = aVariable * bVariable;
  console.log(sum, multiplication)
}

/**
В двух переменных хранятся строки символов.
Написать программу, которая выведет в консоль
суммарное количество символов в обоих строках.
 */
export function printLength(firstVariable, secondVariable) {
  const commonString = `${firstVariable}${secondVariable}`;
  console.log(commonString.length);
}

/**
Написать программу, которая запрашивает у
пользователя ввод трёхзначного числа, а потом
выводит в консоль сумму цифр введённого числа.
 */
export function printInput() {
  const input = prompt('Введите трёхзначное число');
  const digit3 = input % 10;
  const digit1 = (input - input % 100)/100;
  const digit2 = (input - digit1 * 100 - digit3)/10;
  const sum = digit1 + digit2 + digit3;
  console.log(sum);
}

/**
В переменных a и b хранятся числа. Вывести в
консоль наибольшее из них.
 */
export function printMaxNumber(aVariable, bVariable) {
  const maxNumber = Math.max(aVariable, bVariable);
  console.log(maxNumber);
}

/**
Запросить у пользователя ввод числа от 1 до 12.
Вывести в консоль название месяца, соответствующее
этому числу (1 — январь, 2 — февраль и т.д.).
 */
export function printMonth() {
  const month = prompt('Введите число от 1 до 12 включительно');
  switch(month) {
    case 1:
      console.log('Январь');
      break;
    case 2:
      console.log('Февраль');
      break;
    case 3:
      console.log('Март');
      break;
    case 4:
      console.log('Апрель');
      break;
    case 5:
      console.log('Май');
      break;
    case 6:
      console.log('Июнь');
      break;
    case 7:
      console.log('Июль');
      break;
    case 8:
      console.log('Август');
      break;
    case 9:
      console.log('Сентябрь');
      break;
    case 10:
      console.log('Октябрь');
      break;
    case 11:
      console.log('Ноябрь');
      break;
    case 12:
      console.log('Декабрь');
      break;
  }
}

/**
В переменных circle и square хранятся площади круга
и квадрата соответственно. Написать программу,
которая определяет, поместится ли круг в квадрат.
 */
export function addCircleInSquare(circle, square) {
  if (square <= 2 * circle / Math.PI) {
    console.log('Круг поместится в квадрат');
  } else {
    console.log('Круг не поместится в квадрат');
  }
}

/**
Вывести в консоль таблицу умножения на 7.
 */
export function multiplySeven() {
 console.log('Таблица умножения на 7:\n' +
   '1 x 7 = 7\n' +
   '2 x 7 = 14\n' +
   '3 x 7 = 21\n' +
   '4 x 7 = 28\n' +
   '5 x 7 = 35\n' +
   '6 x 7 = 42\n' +
   '7 x 7 = 49\n' +
   '8 x 7 = 56\n' +
   '9 x 7 = 63\n' +
   '10 x 7 = 70')
}

/**
Запросить у пользователя ввод числа N. Вывести в
консоль среднее арифметическое всех нечётных
чисел от 1 до N
 */
export function multiplyBeforeInput() {
  const input = prompt('Введите число');

  const numberArray = [];
  for (let i = 1; i <= input; i++) {
   numberArray.push(i);
  }

  const sum = numberArray.split(' ').map(Number).filter(item => item % 2 !== 0).reduce((acc, item) => acc + item, 0);
  console.log(sum)

  /*

  numberArray = numberArray.split(' ') // преобразовываем введенную строку в массив с разделителем - пробелом
  let sum = 0;
  for (let i = 0; i < numberArray.length; i++){
    if ( numberArray[i] % 2 !== 0 ){ // если остаток от деления на 2 не равен 0, значит число нечетное
      sum += Number(numberArray[i]); // не забываем преобразовать элемент массива в число
    }
  }
  console.log(sum)
   */
}
