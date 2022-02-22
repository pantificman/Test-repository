
'use strict';
/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */


/* const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?',"");

const personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actor:{},
    genres:[],
    privat: false
};
const a = prompt('Один из последних просмотренных фильмов?',""),
      b = prompt('На сколько оцените его?',""),
      c = prompt('Один из последних просмотренных фильмов?',""),
      d = prompt('На сколько оцените его?',"");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB); */

/* let num=50;
while (num < 55){
    console.log(num);
    num++;
} */

/* let num=50;
do {
    console.log(num);
    num++;
}
while (num <= 55); */

/* let num = 50;
for (let i = 1; i < 8; i++){
    console.log(num);
    num++;
} */

/* for (let i = 1; i < 10; i++){
  if (i === 6){
      continue;
  }
  console.log(i);
} */

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

// Код возьмите из предыдущего домашнего задания

/* const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?',"");

let personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actor:{},
    genres:[],
    privat: false
};

for (let i = 1;i < 3;i ++) {
    let a = prompt('Один из последних просмотренных фильмов?',""),
        b = prompt('На сколько оцените его?',"");

        if (a != null && b != null && a != "" && b != "" && a.length < 50){
            personalMovieDB.movies[a] = b;
            console.log("done!");
        } else {
            console.log("error");
            i--;
        } 
}

if (personalMovieDB.count < 10){
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count <= 30 && personalMovieDB.count >= 10){
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >30) {
    console.log("Вы киноман");
} else {
    console.log("ошибка");
}

console.log(personalMovieDB); */

/* function fun() {
    let num=50;
    return num;
}
const anotherNum = fun();
console.log(anotherNum);

const calcl = (a , b) => a+b;

const calc = (a , b) => {
return a+b;
}; */
/* const test="12px";
console.log(parseInt(test)); */

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

/* let numberOfFilms;

function start(){
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?',"");
    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?',"");
  }
}
start();

let personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actor:{},
    genres:[],
    privat: false
};

function remembermyfilms(){
    for (let i = 1;i < 3;i ++) {
        let a = prompt('Один из последних просмотренных фильмов?',""),
            b = prompt('На сколько оцените его?',"");
    
            if (a != null && b != null && a != "" && b != "" && a.length < 50){
                personalMovieDB.movies[a] = b;
                console.log("done!");
            } else {
                console.log("error");
                i--;
            } 
    }
}
remembermyfilms();

function detectPersonalLevel(){
    if (personalMovieDB.count < 10){
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count <= 30 && personalMovieDB.count >= 10){
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >30) {
        console.log("Вы киноман");
    } else {
        console.log("ошибка");
    }
}

function showMyDB(hidden) {
if (!hidden){
    console.log("not base");
}
} 

detectPersonalLevel();
console.log(personalMovieDB); */

/* function learnJS(lang , callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done(){
    console.log("Я прошел этот урок");
}

learnJS("Java Script", done); */

/* const options = {
  name: "test",
  with: 1024,
  height: 1024,
  colors: {
      border: "black",
      bg: "red"
  },
      makeTest: function(){
          console.log("Test");
      }
};

options.makeTest();

const {border, bg} = options.colors;

console.log(border)

delete options.name;

console.log(options);

for (let key in options) {
    if (typeof(options[key]) === 'object'){
        for (let i in options[key]){
            console.log(`Свойства ${i} имеет значение ${options[key][i]}`);
        } 
    } else {
    console.log(`Свойства ${key} имеет значение ${options[key]}`);
        }
}

console.log(Object.keys(options).length); */

                                            //Массивы и псевдомассивы

/* const arr = [1, 4, 7, 8, 9];

arr.forEach(function(item, i, arr){
    console.log(`${i}: ${item} внутри массива ${arr}`);
}); */

/* arr[99]=0;
console.log(arr.length);
console.log(arr); */
/* arr.push(10);



console.log(arr); */

/* for (let i = 0; i< arr.length; i++){
    console.log(arr[i]);
} */

/* for (let value of arr) {
    
}
 */
/* const arr =[2, 7, 60, 5, 10];
arr.sort(compare);
console.log(arr);

function compare(a, b){
    return a - b;
} */

/* const obj = {
    a: 5,
    b: 1
};

const coppy=obj; //сдесь мы передаем ссылку, а не объект.
copy.a = 10;
console.log(coppy);
console.log(obj); */

function copy(mainObj){
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy; //возвращаем наружу
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 8,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;

/* console.log(newNumbers);
console.log(numbers); */

const add = {
    d: 17,
    i: 17
};

/* console.log(Object.assign(numbers, add)); */

const clone = Object.assign({}, add);

clone.d = 20;
console.log(add);
console.log(clone);

const arrey = ["q", "w", "e"];
const newArrey = arrey.slice();

newArrey[1] = "frase";

console.log(arrey);
console.log(newArrey);

const video = ["vimeo", "youtube", "rutube"],
      blogs = ["wordpress", "blogger", "livejournal"],
      internet = [...video, ...blogs, "vk", "facebook"];

      console.log(internet);

function log(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
}
 const num = [2, 5, 8];
 log(...num);

 const ar = ["blok", "str", "box"];
 const newAr = [...ar];
 console.log(ar);
 console.log(newAr);

 const ob = {
    first: 4,
    second: 67
 };
  const newOb = {...ob};

  console.log(ob);
  console.log(newOb);