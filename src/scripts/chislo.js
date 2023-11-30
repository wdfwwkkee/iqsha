
// Основные переменные
next = document.getElementById('next');
quest = document.getElementById('quest');
counter = document.querySelector('.counter');
correct = document.querySelector('.correct');
answerBtn = document.querySelectorAll(".var-btn");

//Функция рандома
function rand() {
    x = Math.ceil(Math.random() * 15)
    return(x);
};

//Функция перехода на след. уровень
function nextLevel() {
    quest = rand();
    document.getElementById('quest').innerText = "";
    document.getElementById('quest').innerHTML = Number(quest);
    correct.style.display = 'none'; 
};

//Функция победы
function win(){
    console.log("win");
    correct.style.display = 'block'; 
    correct.innerHTML = 'Правильно';
    correct.style.backgroundColor = "#2fd82f";
    counter.innerHTML = counter.innerText = parseInt(document.getElementById("counter").innerText) + 1;
    next.style.display = 'inline';
};



//Функция поражения
function lose(){
    correct.style.display = 'block'; 
    correct.style.backgroundColor = "#ff2727";
    correct.innerHTML = 'Неправильно';
    next.style.display = 'none';
};

//Сохранение правильных ответов
cookieStorage = window.localStorage;

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
        if (el.innerText === "Число") {
            if (parseInt(quest.innerText) > Number(9) === true) {
                win();
            }
            else {
                lose();
            }
        }
        else if (el.innerText === "Цифра") {
            if (parseInt(quest.innerText) < Number(10) === true) {
                win();
            }
            else {
                lose();
            }
        }
        else if (el.innerText === "Количество") {
            lose();
        }
    })
});

//Кнопка перехода на след. ур
next.addEventListener('click', () => {
    next.style.display = 'none';
    nextLevel();
});