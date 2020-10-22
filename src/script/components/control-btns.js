import utils from './utils';
import {
    management
} from '../index';

const createControlBlock = () => {
    const controlBlock = document.createElement('div');
    const groupBlock = document.createElement('div');
    const saveBtn = utils.justBtn('Сохранить в буфер');
    const loadBtn = utils.justBtn('Загрузить из буфера');
    const cleanBtn = utils.justBtn('Очистить все');
    const resultBtn = utils.justBtn('Результат');

    groupBlock.classList.add('storage-control-block');
    controlBlock.classList.add('control-block');

    saveBtn.classList.add('save-btn');
    saveBtn.addEventListener('click', () => management.saveToLocalStorage());

    loadBtn.classList.add('load-btn');
    loadBtn.addEventListener('click', () => management.loadFromLocalStorage());

    groupBlock.append(loadBtn);
    groupBlock.append(saveBtn);

    cleanBtn.classList.add('clean-btn');
    cleanBtn.addEventListener('click', () => management.cleanAllData());

    resultBtn.classList.add('result-btn');
    resultBtn.addEventListener('click', () => management.displayResults());

    controlBlock.append(groupBlock);
    controlBlock.append(resultBtn);
    controlBlock.append(cleanBtn);

    return controlBlock;
}

export {
    createControlBlock
};