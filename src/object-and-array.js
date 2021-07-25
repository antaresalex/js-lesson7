/**
Создайте объект user, содержащий поле name со
значением ‘John’.
 */
const user = {
  name: 'John',
}

/**
Создайте массив целых чисел из 10 элементов.
 */
const numberArr = [3, 7, 24, 6, 78, 87, 1, 9, 2, 3];

/**
Запросить у пользователя ввод числа. Записать
введенное значение в поле age объекта user.
 */

export function addUserAge() {
    const input = prompt('Введите число');
    user.age = input;
}

/**
Создать копию объекта user с именем admin.
Добавить новому объекту поле role со значением
‘admin’.
 */

export function copyUserToAdmin() {
    const admin = Object.assign({}, user);
    admin.role = 'admin';
    return admin;
}

/**
Записать все значения полей объекта admin в
отдельные переменные. Имена переменных
должны совпадать с названиями полей
 */

export function destructAdmin() {
    const admin =  copyUserToAdmin();
    let { name, age = null, role } = admin;
}

/**
Выведите в консоль сумму всех элементов массива.
 */
export function sumArray(array = numberArr) {
    const sum = array.reduce((acc, item) => acc + item);
    console.log(`sum: ${sum}`)
}

/**
Создайте новый массив на основе исходного, в
котором каждый элемент будет вдвое больше
элемента исходного массива с таким же индексом.
(a[1] = 3, b[1] = 6, где a — исходный массив, b — новый
массив).
 */
export function doublesArray(array = numberArr) {
  const doubles = array.map((num) => num * 2);
  console.log(`array: ${array}, new array: ${doubles}`);
}

/**
Найдите и выведите в консоль наибольший и
наименьший элементы исходного массива.
 */
export function minAndMaxArray(array = numberArr) {
    const max = Math.max.apply(null, array);
    const min = Math.min.apply(null, array);
    console.log(`max: ${max}, min: ${min}`)
}

/**
Напишите функцию diff, которая получает в качестве
параметров 2 числа и возвращает разницу между
наибольшим и наименьшим.
 */
export function diffNumber(numberA, numberB) {
    const max = Math.max(numberA, numberB);
    const min = Math.min(numberA, numberB);
    const diff = max - min;
    console.log(`diff: ${diff}`);
    return diff;
}

/**
Напишите функцию isWord, которая принимает на
вход текстовую строку. Функция возвращает true, если
строка состоит из одного слова и false, если из
нескольких.
 */
export function isWord(text) {
    const array = text.split(' ');
    if (array.length === 1) {
      return true;
    } else {
      return false;
    }
}

/**
Напишите функцию pow(a, x), которая вернёт
значение числа a, возведённого в степень x.
 */
export function pow(a, x) {
  const pow = a ** x;
  return pow;
}
