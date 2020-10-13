import {
    onSubmitForm
} from '../components/form';

const row = (content, id) => {
    return `<div class="row" id="${id}">${content}${removeBtn()}</div>`
}

const col = (content, position) => {
    if(position) {
        return `<div class="col" style="display: flex; justify-content: ${position}";>${content}</div>`;
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

const input = (name, placeholder, lable) => {
    return `<div class="flex-column"><lable>${lable}<input type="text" placeholder="${placeholder}" name="${name}"></lable></div>`;
}

const textarea = (name, placeholder, lable) => {
    return `<div class="flex-column"><lable>${lable}<textarea placeholder="${placeholder}" name=${name}></textarea></lable></div>`;
}

const submitBtn = () => {
    return `<button type="submit">Создать блок</button>`;
}

const justBtn = (text = 'Кнопка') => {
    const btn = document.createElement('button');
    btn.innerText = text;

    return btn;
}

const select = (name, options, lable) => {
    const opts = options.map(text => `<option>${text}</option>`);

    return `<div class="flex-column"><lable>${lable}<select name="${name}">${opts}</select></lable></div>`;
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
    removeBtn,
    justBtn
}

export default utils;