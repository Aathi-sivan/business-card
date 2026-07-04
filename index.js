let textButton = document.getElementById('text');
let delButton = document.getElementById('remove-element');

let selectedElement = null;

textButton.addEventListener('click', function () {

  const textBox = document.createElement('textarea');
  textBox.placeholder = "Enter text";
  textBox.classList.add('text-box');

  const properties = document.querySelector('#properties');
  properties.appendChild(textBox);

  makeDraggable(textBox);
  textBox.addEventListener("mouseup",mouseUp)
});


function makeDraggable(element) {

  let startX, startY;

  element.addEventListener('mousedown', mouseDown);

  function mouseDown(e) {
    startX = e.clientX;
    startY = e.clientY;

    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseup', mouseUp);
  }

  function mouseMove(e) {

    const dx = e.clientX - startX;
    const dy = e.clientY - startY;

    startX = e.clientX;
    startY = e.clientY;

    element.style.left = (element.offsetLeft + dx) + 'px';
    element.style.top = (element.offsetTop + dy) + 'px';
  }

  function mouseUp() {
    document.removeEventListener('mousemove', mouseMove);
    document.removeEventListener('mouseup', mouseUp);
  }

  element.addEventListener('click', function (e) {
    e.stopPropagation();
    selectElement(element);
  });
}



function selectElement(element) {

  if (selectedElement) {
    selectedElement.classList.remove('selected');
  }

  selectedElement = element;
  selectedElement.classList.add('selected');
}



document.addEventListener('click', function () {
  if (selectedElement) {
    selectedElement.classList.remove('selected');
    selectedElement = null;
  }
});


delButton.addEventListener('click', function () {

  if (!selectedElement) return;

  selectedElement.remove();
  selectedElement = null;
});


function mouseUp(e) {
  const activeArea = document.activeElement;
  const selection = activeArea.value.substring(activeArea.selectionStart,activeArea.selectionEnd)
  const outputElement = document.getElementById("active-text-box");
  const selectedElement = document.getElementById("selected-text");


  outputElement.textContent = activeArea.id;
  selectedElement.textContent = selection;
}

const textarea1 = document.getElementById("newText1");
const textarea2 = document.getElementById("newText2");
textarea1.addEventListener("mouseup", mouseUp);
textarea2.addEventListener("mouseup", mouseUp);

