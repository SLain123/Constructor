import {
    onSubmitForm
} from '../components/form';

const row = (content, id, position = 'start') => {
    return `<div class="row" id="${id}" style="display: flex; justify-content: ${position}";>${content}${removeBtn()}</div>`
}

const col = (content, num) => {
    if (!num) {
        return `<div class="col">${content}</div>`
    } else {
        return `<div class="col-${num}">${content}</div>`
    }
}

const form = content => {
    const form = document.createElement('form');
    form.classList.add('form');
    form.addEventListener('submit', (e) => onSubmitForm(e));
    form.insertAdjacentHTML('beforeend', content);

    return form;
}

const input = (name, placeholder) => {
    return `<input type="text" placeholder="${placeholder}" name="${name}">`;
}

const textarea = (name, placeholder) => {
    return `<textarea placeholder="${placeholder}" name=${name}></textarea>`;
}

const submitBtn = () => {
    return `<button type="submit">Создать блок</button>`;
}

const select = (name, options) => {
    const opts = options.map(text => `<option>${text}</option>`);
    return `<select name="${name}">${opts}</select>`;
}

const removeBtn = () => {
    return `<button class="delete-btn">&#215;</button>`
}

const utils = {
    row,
    col,
    form,
    input,
    textarea,
    submitBtn,
    select,
    removeBtn
}

export default utils;