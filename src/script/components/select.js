const createSelect = (optsArr, className = 'select') => {
    const select = document.createElement('select');
    select.classList.add(className);

    select.addEventListener('change', (e) => changeSelect(e));

    optsArr.forEach(elem => {
        const opt = `<option>${elem}</option>`;
        select.insertAdjacentHTML('beforeend', opt);
    })

    return select;
};

// Ивент для изменения основного селектора в панели, удаляет форму от старого блока и запускает создание новой формы для выбранного блока;

const changeSelect = (e) => {
    const select = e.target;
    // createForm(select.options[select.selectedIndex].value);
    console.log(select);
};

export {
    createSelect
};