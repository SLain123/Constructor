const $body = document.querySelector('body');
const $modalOverlay = document.querySelector('.overlay');
const $closeModalBtn = document.querySelector('.results__close-btn');
const $htmlBtn = document.querySelector('#html');
const $cssBtn = document.querySelector('#css');
const $copyBtn = document.querySelector('#copy');
const $htmlBlock = document.querySelector('.results__html');
const $cssBlock = document.querySelector('.results__css');

const displayModalResults = () => {
    $body.style.paddingRight = `${calcPadding()}px`;
    $body.classList.add('no-scroll');
    $modalOverlay.classList.remove('overlay_hide');
    $modalOverlay.classList.add('overlay_visible');
}

const closeModal = () => {
    $body.style.paddingRight = 0;
    $body.classList.remove('no-scroll');
    $modalOverlay.classList.remove('overlay_visible');
    setTimeout(() => {
        $modalOverlay.classList.add('overlay_hide');
    }, 900);
}

const calcPadding = () => {
    return window.innerWidth - document.documentElement.clientWidth;
}

const makeActive = active => {
    if(active === 'html') {
        $cssBtn.classList.remove('results__btn-active');
        $htmlBtn.classList.add('results__btn-active');
        $cssBlock.classList.remove('results_active-block')
        $htmlBlock.classList.add('results_active-block');
    } 
    else if (active === 'css') {
        $htmlBtn.classList.remove('results__btn-active');
        $cssBtn.classList.add('results__btn-active');
        $htmlBlock.classList.remove('results_active-block')
        $cssBlock.classList.add('results_active-block');
    }
}

$modalOverlay.addEventListener('mousedown', e => {
    if(e.target === $modalOverlay) {
        closeModal();
    }
});
$closeModalBtn.addEventListener('click', () => closeModal());
$htmlBtn.addEventListener('click', () => makeActive('html'));
$cssBtn.addEventListener('click', () => makeActive('css'));
$copyBtn.addEventListener('click', () => console.log('copy'));

export {
    displayModalResults
}