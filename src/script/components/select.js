import {
    management
} from '../index';

const createSelect = (optsArr, className = 'select') => {
    const select = document.createElement('select');
    select.classList.add(className);

    select.addEventListener('change', (e) => onChangeSelect(e));

    optsArr.forEach(elem => {
        const opt = `<option>${elem}</option>`;
        select.insertAdjacentHTML('beforeend', opt);
    })

    return select;
};

const onChangeSelect = (e) => {
    const select = e.target;
    management.changeForm(select.options[select.selectedIndex].value);
};

export {
    createSelect
};