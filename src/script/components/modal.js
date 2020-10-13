const $body = document.querySelector('body');
const $modalOverlay = document.querySelector('.overlay');
const $closeModalBtn = document.querySelector('.results__close-btn');

const displayModalResults = () => {
    $body.classList.add('no-scroll');
    $modalOverlay.classList.remove('overlay_hide');
    $modalOverlay.classList.add('overlay_visible');
}

const closeModal = () => {
    $modalOverlay.classList.remove('overlay_visible');
    $body.classList.remove('no-scroll');
    setTimeout(() => {
        $modalOverlay.classList.add('overlay_hide');
    }, 900);
}

$modalOverlay.addEventListener('mousedown', e => {
    if(e.target === $modalOverlay) {
        closeModal();
    }
});
$closeModalBtn.addEventListener('click', () => closeModal());

export {
    displayModalResults
}