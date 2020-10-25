import {
    onSubmitForm
} from '../components/form';

const row = (content, id) => {
    return `<div class="row" id="${id}">${content}${_managementBlock()}</div>`
}

const col = (content, position) => {
    if(position) {
        return `<div class="col ${position}">${content}</div>`;
    } else {
        return `<div class="col">${content}</div>`;
    }
    
}

const form = content => {
    const form = document.createElement('form');
    form.classList.add('form');
    form.addEventListener('submit', (e) => onSubmitForm(e));
    form.insertAdjacentHTML('beforeend', content);

    return form;
}

const input = (name, placeholder, label, type = 'text', value = '') => {
    if(type === 'file') {
        return `<div class="flex-column"><label>${label}<input type="${type}" accept=".png, .jpg, .jpeg" name="${name}"></label></div>`;
    }
    return `<div class="flex-column"><label>${label}<input type="${type}" placeholder="${placeholder}" value="${value}" name="${name}"></label></div>`;
}

const textarea = (name, placeholder, label) => {
    return `<div class="flex-column"><label>${label}<textarea placeholder="${placeholder}" name=${name}></textarea></label></div>`;
}

const submitBtn = () => {
    return `<button type="submit">Создать блок</button>`;
}

const justBtn = (text = 'Кнопка') => {
    const btn = document.createElement('button');
    btn.innerText = text;

    return btn;
}

const select = (name, options, label) => {
    const opts = options.map(text => `<option>${text}</option>`);

    return `<div class="flex-column"><label>${label}<select name="${name}">${opts}</select></label></div>`;
}

const _managementBlock = () => {
    return `<div class="management-block"><button class="fa fa-pencil edit-btn management-btn" aria-hidden="true"></button></button><button class="fa fa-trash delete-btn management-btn" aria-hidden="true"></button></div>`
}

const utils = {
    row,
    col,
    form,
    input,
    textarea,
    submitBtn,
    select,
    justBtn
}

export default utils;