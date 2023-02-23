// Напиши скрипт, який змінює кольори фону елемента < body > через інлайн - стиль по кліку на button.change - color і виводить значення кольору в span.color.

// < div class="widget" >
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </ >

//   Для генерування випадкового кольору використовуй функцію getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

const btn = document.querySelector('.change-color');
const outputColor = document.querySelector('.color');
const body = document.querySelector('body');
btn.addEventListener('click', () => {
  const bgc = getRandomHexColor();
  outputColor.textContent = bgc;
  body.style.backgroundColor = bgc;
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}