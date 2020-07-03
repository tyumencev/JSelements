let menu = document.getElementsByClassName('menu')[0],
    menuItem = document.getElementsByClassName('menu-item'),
    menuItemFifthElement = document.createElement('li'),
    body = document.getElementsByTagName('body')
    [0], 
    title = document.getElementById('title'),
    adv = document.getElementsByClassName('adv')[0],
    quest = prompt('Как вы оноситесь к технике Apple?');


menuItemFifthElement.classList.add('menu-item');
menuItemFifthElement.textContent = 'Пятый пункт';
menu.appendChild(menuItemFifthElement);

menu.insertBefore(menuItem[2], menuItem[1]);

body.style.backgroundImage = "url('img/apple_true.jpg')"; 

title.textContent = "Мы продаем только подлинную технику Apple";

adv.remove();

let prom = document.getElementById("prompt");
prom.textContent = quest;