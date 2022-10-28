// let arr = ['Привет, ', 'Мир', '!'];
// console.log(arr.join(''));


// let arr = ['Привет, ', 'Мир', '!'];
// let text = ''
// for (x of arr) {
//     text += x
// }
// console.log(text);


// let arr = ['Привет, ', 'Мир', '!']
// arr[0] = 'Пока, '
// console.log(arr.join(''));

// let num1 = prompt('Зарплата Пети: ')
// let num2 = prompt('Зарплата Коли: ')
// let obj = {'Петя': num1, 'Коля': num2}
// for (let key in obj) {
//     console.log(`${key} - зарплата ${obj[key]}`);
// }


// var arr = {
//     'ru': ['голубой', "красный", "зелёный"],
//     'en': ['blue', 'red', 'green']
// };
// console.log(arr['ru'][1]);


// let arr = ['a', 'b', 'c'];
// alert(arr)


// let arr = ['a', 'b', 'c'];
// for (let i = 0; i < arr.length; i++) {
//     alert(arr[i]);
    
// }


// let arr = ['a', 'b', 'c', 'd'];
// console.log(`${arr[0]}+${arr[1]}, ${arr[2]}+${arr[3]}`);


// let arr = [2, 5, 3, 9];
// let result = arr[0] * arr[1] + arr[2] * arr[3];
// console.log(result);


// var obj = {a: 1, b: 2, c: 3};
// console.log(obj['c']);
// console.log(obj.c);


// var obj = {Коля: '1000', Вася: '500', Петя: '200'};
// console.log(obj.Петя + '\n' + obj.Коля);


// let obj = {
//     Плнедельник: 1,
//     Вторник: 2,
//     Среда: 3,
//     Четверг: 4,
//     Пятница: 5,
//     Суббота: 6,
//     Воскресенье: 7
// };
// let day = new Date;
// for (let key in obj ) {
//     if (obj[key] == day.getDay()) {
//         console.log(key);
//         break
//     }
// }


// let obj = {
//     Плнедельник: 1,
//     Вторник: 2,
//     Среда: 3,
//     Четверг: 4,
//     Пятница: 5,
//     Суббота: 6,
//     Воскресенье: 7
// };
// let day = prompt('Введите номер дня недели');
// for (let key in obj ) {
//     if (obj[key] == day) {
//         console.log(key);
//         break
//     }
// }


// let arr = [ 
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// console.log(arr[1][0]);


// var obj = {
//     js:['jQuery', 'Angular'],
//     php: 'hello',
//     css: 'world'
// };
// console.log(obj.js[0]);


// let arr = {
//     'ru': ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'],
//     'en': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
// }
// console.log(arr['ru'][0] + '\n' + arr['en'][2]);


// let lang = {
//     'ru': ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'],
//     'en': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
// }
// let day = new Date;
// console.log(lang[prompt('Введите язык (ru или en): ')][day.getDay() - 1]);