import utils from './utils';

const createControlBlock = () => {
    const controlBlock = document.createElement('div');
    const cleanBtn = utils.justBtn('Очистить все');

    controlBlock.classList.add('control-block');
    cleanBtn.classList.add('clean-btn');
    cleanBtn.addEventListener('click', () => console.log('clean all'));
    controlBlock.append(cleanBtn);

    return controlBlock;
}


export {
    createControlBlock
};