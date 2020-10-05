import utils from './utils';

const eventOnRemoveBtns = () => {
    const btns = document.querySelectorAll('.delete-btn');
    btns.forEach(btn => btn.addEventListener('click', e => _onClickByRemoveBtn(e)));
}

const _onClickByRemoveBtn = e => {
    console.log(e.target);
}

export {eventOnRemoveBtns};