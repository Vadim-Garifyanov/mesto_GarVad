let page = document.querySelector('.page');
let buttonEdit = page.querySelector('.profile__edit');
let popup = page.querySelector('.popup');
let buttonClose = page.querySelector('.popup__close');
buttonEdit.addEventListener('click', openForm);
buttonClose.addEventListener('click', closeForm);
function openForm() {
  popup.style.display = 'block';
}
function closeForm() {
  popup.style.display = 'none';
}

let nameProf = page.querySelector('.profile__info-name');
let jobProf = page.querySelector('.profile__info-job');
let inputName = page.querySelector('.popup__input-name');
let inputJob = page.querySelector('.popup__input-job');
inputName.value = nameProf.textContent;
inputJob.value = jobProf.textContent;

let formElement = page.querySelector('.popup');
let nameInput = page.querySelector('.popup__input-name');
let jobInput = page.querySelector('.popup__input-job');

function formSubmitHandler (evt) {
    evt.preventDefault();
    jobProf.textContent = jobInput.value;
    nameProf.textContent = nameInput.value;
    closeForm();
}

formElement.addEventListener('submit', formSubmitHandler);
