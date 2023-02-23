// Напиши скрипт створення і очищення колекції елементів.Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція.Натисненням на кнопку Очистити, колекція елементів очищається.

// < div id = "controls" >
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </ >

//   <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число.Функція створює стільки < div >, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого < div > - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.Використовуй готову функцію getRandomHexColor для отримання кольору.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

const boxes = document.querySelector('#boxes');
const input = document.querySelector('input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');

function createBoxes(amount) {
  const array = []
  for (let i = 0; i < amount; i++) {
    let newBox = `<div 
    style = 'width:${30 + i * 10 + 'px'}; 
    height: ${30 + i * 10 + 'px'};  
    background-color: ${getRandomHexColor()}'></div>`;
    array.push(newBox);
  }
  boxes.innerHTML = array.join('');
}

function destroyBoxes(block) {
  block.innerHTML = ''
}

btnCreate.addEventListener('click', () => createBoxes(input.value));
btnDestroy.addEventListener('click', () => destroyBoxes(boxes));
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
