import {
    management
} from '../index';

const createSelect = (optsArr, className = 'select') => {
    const label = document.createElement('label');
    const select = document.createElement('select');

    label.innerHTML = 'Выберите тип блока:'
    label.classList.add(className);

    select.addEventListener('change', (e) => onChangeSelect(e));

    optsArr.forEach(elem => {
        const opt = `<option>${elem}</option>`;
        select.insertAdjacentHTML('beforeend', opt);
    })

    label.append(select);

    return label;
};

const onChangeSelect = (e) => {
    const select = e.target;
    management.changeForm(select.options[select.selectedIndex].value);
};

export {
    createSelect
};