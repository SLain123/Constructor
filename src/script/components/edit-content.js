import {
    shellEditEvent
} from './control-events';
import {
    management
} from '../index';

const createEditString = parent => {
    const wrapper = document.createElement('div');
    const inputStr = document.createElement('textarea');
    const enterBtn = document.createElement('button');

    wrapper.classList.add('edit-wrapper');
    inputStr.classList.add('edit-string');
    enterBtn.classList.add('edit-enter-btn', 'fa', 'fa-check-square');

    inputStr.placeholder = 'Текст для изменения содержимого блока';
    enterBtn.setAttribute('aria-hidden', true);
    enterBtn.addEventListener('click', e => {
        const id = +e.target.parentElement.parentElement.parentElement.id;
        const value = e.target.previousElementSibling.value;
        const countOfChildrenBlock = e.target.parentElement.parentElement.parentElement.children.length;
        management.editContent(id, value, countOfChildrenBlock);
    });

    wrapper.append(inputStr);
    wrapper.append(enterBtn);
    parent.prepend(wrapper);
}

const removeEditString = e => {
    const editBtn = e.target;
    const childrenOfContentBlock = Array.from(editBtn.parentElement.children);

    childrenOfContentBlock.forEach(elem => {
        if (elem.classList.contains('edit-wrapper')) {
            elem.remove();
        }
    })

    editBtn.addEventListener('click', shellEditEvent);
}

const cleanEditString = string => {
    string.value = '';
}

export {
    createEditString,
    removeEditString,
    cleanEditString
};