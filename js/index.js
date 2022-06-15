const $content = document.querySelector('.content');
const $countOne = $content.querySelector('.count__one');
const $countTwo = $content.querySelector('.count__two');

//.........................................................................................................................//
// Изменение размера шрифта

changingFontSize()

window.addEventListener('resize', changingFontSize);

function changingFontSize() {
    $countOne.style.fontSize = `${20 * document.documentElement.clientWidth / 1500}rem`;
    $countTwo.style.fontSize = `${15 * document.documentElement.clientWidth / 1500}rem`;
}

//.........................................................................................................................//
// Логика программы

const numbeOfDaysInMonth = {
    ['05-22']: 31,
    ['06-22']: 30,
    ['07-22']: 31,
    ['08-22']: 31,
    ['09-22']: 30,
    ['10-22']: 31,
    ['11-22']: 30,
    ['12-22']: 31,
    ['01-23']: 31,
    ['02-23']: 28,
    ['03-23']: 31,
    ['04-23']: 30,
    ['05-23']: 31,
    ['06-23']: 30,
    ['07-23']: 31,
    ['08-23']: 31,
    ['09-23']: 30,
    ['10-23']: 31,
    ['11-23']: 30,
    ['12-23']: 31,
}
const firtsDay = 15;
const firstMonth = 6;
const firstYear = 22;
const dayNow = new Date().getDate();
const monthNow = new Date().getMonth() + 1;
const yearNow = new Date().getFullYear() % 100;
let tempMonth = firstMonth;
let tempYear = firstYear;
let count = 0;

if (monthNow > firstMonth || yearNow > firstYear) {
    count += numbeOfDaysInMonth[dateStringGeneration(tempMonth, tempYear)] - firtsDay + 1;

    dateIncrement();

    while (monthNow !== tempMonth || yearNow !== tempYear) {
        count += numbeOfDaysInMonth[dateStringGeneration(tempMonth, tempYear)];

        dateIncrement();
    }

    count += dayNow;
} else {
    count += dayNow - firtsDay + 1;
}

function dateStringGeneration(tempMonth, tempYear) {
    let temp = `${tempMonth}-${tempYear}`;

    if (tempMonth < 10) {
        temp = '0' + temp;
    }

    return temp;
}

function dateIncrement() {
    if (tempMonth === 12) {
        tempMonth = 1;
        tempYear++;
    } else {
        tempMonth++;
    }
}

//.........................................................................................................................//
// Вывод данных на экран

$countOne.textContent = String(count);

if (count >= 30) {
    $countTwo.textContent = `30 + ${count - 30}`;
} else {
    $countTwo.textContent = `30 + (${count - 30})`;
}