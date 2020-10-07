import {
    management
} from '../index';

const eventOnRemoveBtns = () => {
    const btns = document.querySelectorAll('.delete-btn');
    btns.forEach(btn => btn.addEventListener('click', e => _onClickByRemoveBtn(e)));
}

const _onClickByRemoveBtn = e => {
    const mainConteiner = e.target.parentElement;
    if (mainConteiner.classList.contains('row')) {
        management.removeOldData(+mainConteiner.id);
    } else {
        throw new Error('Неверный родительский объект для удаления');
    }
}

export {
    eventOnRemoveBtns
};