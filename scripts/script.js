let page = document.querySelector('.page');
let buttonEdit = page.querySelector('.profile__edit');
let formElement = page.querySelector('.popup');
let buttonClose = page.querySelector('.popup__close');
let profName = page.querySelector('.profile__info-name');
let profJob = page.querySelector('.profile__info-job');
let nameInput = page.querySelector('input[name="name_edit"]');
let jobInput = page.querySelector('input[name="job_edit"]');

buttonEdit.addEventListener('click', openPopup);
buttonClose.addEventListener('click', closePopup);

function openPopup() {
  formElement.classList.add('popup_opened');
  nameInput.value = profName.textContent;
  jobInput.value = profJob.textContent;
}

function closePopup() {
  formElement.classList.remove('popup_opened');
}

function handleProfileFormSubmit (evt) {
    evt.preventDefault();
    profName.textContent = nameInput.value;
    profJob.textContent = jobInput.value;
    closePopup();
}

formElement.addEventListener('submit', handleProfileFormSubmit);
