import {
    management
} from '../index';

const createSelect = (optsArr, className = 'select') => {
    const lable = document.createElement('lable');
    const select = document.createElement('select');

    lable.innerHTML = 'Выберите тип блока:'
    lable.classList.add(className);

    select.addEventListener('change', (e) => onChangeSelect(e));

    optsArr.forEach(elem => {
        const opt = `<option>${elem}</option>`;
        select.insertAdjacentHTML('beforeend', opt);
    })

    lable.append(select);

    return lable;
};

const onChangeSelect = (e) => {
    const select = e.target;
    management.changeForm(select.options[select.selectedIndex].value);
};

export {
    createSelect
};