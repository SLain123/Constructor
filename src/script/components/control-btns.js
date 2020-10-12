import utils from './utils';
import {
    management
} from '../index';

const createControlBlock = () => {
    const controlBlock = document.createElement('div');
    const cleanBtn = utils.justBtn('Очистить все');

    controlBlock.classList.add('control-block');
    cleanBtn.classList.add('clean-btn');
    cleanBtn.addEventListener('click', () => management.cleanAllData());
    controlBlock.append(cleanBtn);

    return controlBlock;
}

export {
    createControlBlock
};