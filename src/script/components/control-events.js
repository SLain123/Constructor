import {
    management
} from '../index';
import {
    createEditString,
    removeEditString
} from '../components/edit-content';

// Функция обертка для последующей возможности вызова removeEventListener;

const shellEditEvent = e => {
    _onClickByBtn(e, 'edit');
    e.target.removeEventListener('click', shellEditEvent);
    e.target.addEventListener('click', removeEditString)
}

// Функции навешивающие слушателей на кнопки удалить и редактировать;

const eventOnRemoveBtns = () => {
    const btns = document.querySelectorAll('.delete-btn');
    btns.forEach(btn => btn.addEventListener('click', e => _onClickByBtn(e, 'remove')));
}

const eventOnEditBtns = () => {
    const btns = document.querySelectorAll('.edit-btn');
    btns.forEach(btn => btn.addEventListener('click', shellEditEvent));
}

// Основная функция отвечащая за поведение кнопок удалить и редактировать;

const _onClickByBtn = (e, act) => {
    const mainConteiner = e.target.parentElement.parentElement;

    if (mainConteiner.classList.contains('row') && act === 'remove') {
        management.removeOldData(mainConteiner.id);
    } else if (mainConteiner.classList.contains('row') && act === 'edit') {
        createEditString(e.target.parentElement);
    } else {
        throw new Error('Неверный родительский объект для удаления');
    }
}

export {
    eventOnRemoveBtns,
    eventOnEditBtns,
    shellEditEvent
};