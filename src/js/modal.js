const refs = {
  backdrop: document.querySelector('.backdrop'),
  modal: document.querySelector('[data-modal]'),
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
};

refs.openModalBtn.addEventListener('click', onOpenModalBtnClick);

function onOpenModalBtnClick(event) {
  toggleModal();
  addListenters();
}

function onCloseModalBtnClick() {
  toggleModal();
  removeListenters();
}

function onBackdropClick(event) {
  if (event.target === event.currentTarget) {
    toggleModal();
    removeListenters();
  }
}

function onKeyUp(event) {
  if (event.code === 'Escape') {
    toggleModal();
    removeListenters();
  }
}

function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
}

function addListenters() {
  refs.closeModalBtn.addEventListener('click', onCloseModalBtnClick);
  refs.backdrop.addEventListener('click', onBackdropClick);
  document.addEventListener('keyup', onKeyUp);
}

function removeListenters() {
  refs.closeModalBtn.removeEventListener('click', onCloseModalBtnClick);
  refs.backdrop.removeEventListener('click', onBackdropClick);
  document.removeEventListener('keyup', onKeyUp);
}
