import utils from './utils';
import {
    management
} from '../index';

const createControlBlock = () => {
    const controlBlock = document.createElement('div');
    const cleanBtn = utils.justBtn('Очистить все');
    const resultBtn = utils.justBtn('Результат');

    controlBlock.classList.add('control-block');

    cleanBtn.classList.add('clean-btn');
    cleanBtn.addEventListener('click', () => management.cleanAllData());

    resultBtn.classList.add('result-btn');
    resultBtn.addEventListener('click', () => management.displayResults());

    controlBlock.append(cleanBtn);
    controlBlock.append(resultBtn);

    return controlBlock;
}

export {
    createControlBlock
};