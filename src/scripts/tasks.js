



// Основные переменные
counter = document.querySelector('.counter');
correct = document.querySelector('.correct');
firstNum = document.querySelector('.first-num');
secondaryNum = document.querySelector('.secondary-num');
answerBtn = document.querySelectorAll(".var-btn");

//Функция рандома
function rand(){
    x = Math.ceil(Math.random(10) * 10)
    return(x)
}

//Сохранение правильных ответов
cookieStorage = window.localStorage

if (!cookieStorage.getItem('counter'))
    cookieStorage.setItem('counter', '0')

setInterval(() => {
    cookieStorage.setItem('counter', parseInt(counter.innerText))
}, 1000);

//Установка из хранилища
counter.innerHTML = counter.innerText = cookieStorage.getItem('counter');

//Кнопка и событие
answerBtn.forEach((el)=> {
    el.addEventListener('click', () => {
        if (parseInt(firstNum.innerText) + parseInt(secondaryNum.innerText) === parseInt(el.innerText)) {
            console.log("win");
            correct.innerHTML = 'Правильно';
            correct.style.color = "Green";
            counter.innerHTML = counter.innerText = parseInt(document.getElementById("counter").innerText) + 1;
            st = rand();
            nd = rand();
            nextbtnanswer = Math.ceil((Math.ceil(Math.random(0.5) * 10)) / 2.5);            
            firstNum.innerText = st;
            document.getElementById("1st").innerHTML = st;
            secondaryNum.innerText = nd;
            document.getElementById("2nd").innerHTML = nd;
            answer = parseInt(firstNum.innerText) + parseInt(secondaryNum.innerText) 
            document.getElementById("1v").innerHTML = document.getElementById("1v").innerText = rand();
            document.getElementById("2v").innerHTML = document.getElementById("2v").innerText = rand();
            document.getElementById("3v").innerHTML = document.getElementById("3v").innerText = rand();
            document.getElementById("4v").innerHTML = document.getElementById("4v").innerText = rand();
            document.getElementById(nextbtnanswer + "v").innerHTML = document.getElementById(nextbtnanswer + "v").innerText = answer;
            answer = 0;
        }
        else {
            correct.style.color = "Red";
            correct.innerHTML = 'Неправильно';
        }
    })
})
