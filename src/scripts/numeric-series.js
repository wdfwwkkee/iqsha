
// Основные переменные
next = document.getElementById('next');
counter = document.querySelector('.counter');
correct = document.querySelector('.correct');
answerBtn = document.querySelectorAll(".var-btn");

//Функция рандома
function rand() {
    var numbers = [];
    while ( SVGAnimatedNumberList.length < 10 ) {
        
        x = Math.ceil(Math.random() * 10) + 1;
        if (numbers.indexOf(x) === -1) { // Проверяем, не содержится ли уже такое число в массиве
            numbers.push(x); // Добавляем уникальное число в массив
        }

    }
    return(x)
}

//Функция перехода на след. уровень
function nextLevel() {
    st = rand()
    if (st == nd) {
        nd = rand();
    }
}

//Функция победы
function win(el){
    console.log("win");
    correct.innerHTML = 'Правильно';
    correct.style.backgroundColor = "#2fd82f";
    counter.innerHTML = counter.innerText = parseInt(document.getElementById("counter").innerText) + 1;
    next.style.display = 'inline';
    document.getElementById("answer-box").innerHTML = document.getElementById("answer-box").innerText = el.innerText;
}

//Функция поражения
function lose(){
    correct.style.backgroundColor = "#ff2727";
    correct.innerHTML = 'Неправильно';
    next.style.display = 'none';
}

//Сохранение правильных ответов
cookieStorage = window.localStorage

if (!cookieStorage.getItem('counter'))
    cookieStorage.setItem('counter', '0')

setInterval(() => {
    cookieStorage.setItem('counter', parseInt(counter.innerText))
}, 10000);

//Установка из хранилища
counter.innerHTML = counter.innerText = cookieStorage.getItem('counter');

//Кнопки цифр и их событие
answerBtn.forEach((el)=> {
    el.addEventListener('click', () => {
        if (el.innerText === "1"){
            if (parseInt(firstNum.innerText) > parseInt(secondaryNum.innerText) === true) {
                win(el)
            }
            else {
                lose()
            }
        }        
        else {
            if (parseInt(firstNum.innerText) < parseInt(secondaryNum.innerText) === true) {
                win(el)
            }
            else {
                lose()
            }                       
        } 
    })
})

//Кнопка перехода на след. ур
next.addEventListener('click', () => {
    next.style.display = 'none';
    nextLevel();
    document.getElementById("answer-box").innerHTML = document.getElementById("answer-box").innerText = ""  ;
})