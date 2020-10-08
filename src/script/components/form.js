import utils from './utils';
import {
    management
} from '../index';

const createForm = tagName => {
    let form;
    if (tagName === 'Заголовок') {
        form = utils.form(` ${utils.input('content', 'Введите текст заголовка')}
                            ${utils.select('tag', ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])}
                            ${utils.input('color', 'Введите цвет текста')}
                            ${utils.select('fontFamily', ['sans-serif', 'serif', 'Georgia', 'system-ui'])}
                            ${utils.select('fontStyle', ['normal', 'italic'])}
                            ${utils.select('fontWeight', ['normal', 'bold', 'lighter'])}
                            ${utils.select('textAlign', ['left', 'center', 'right'])}
                            ${utils.textarea('styles', 'Введите желаемые стили для заголовка (опционально), формат css')}
                            ${utils.submitBtn()}`);
    } else if (tagName === 'Обычный текст') {
        form = utils.form(` ${utils.input('content', 'Введите текст абзаца')}
                            ${utils.input('fontSize', 'Введите размер текста от 1 до 100px (только цифры)')}
                            ${utils.input('color', 'Введите цвет текста')}
                            ${utils.select('fontFamily', ['sans-serif', 'serif', 'Georgia', 'system-ui'])}
                            ${utils.select('fontStyle', ['normal', 'italic'])}
                            ${utils.select('fontWeight', ['normal', 'bold', 'lighter'])}
                            ${utils.select('textAlign', ['left', 'center', 'right'])}
                            ${utils.textarea('styles', 'Введите желаемые стили для текста (опционально), формат css')}
                            ${utils.submitBtn()}`);
    } else if (tagName === 'Колонки с текстом') {
        form = utils.form(` ${utils.textarea('content', 'Введите текст абзацев для каждого столбца через ;')}
                            ${utils.select('coluns', ['2', '3', '4', '6', '12'])}
                            ${utils.input('fontSize', 'Введите размер текста от 1 до 100px (только цифры)')}
                            ${utils.input('color', 'Введите цвет текста')}
                            ${utils.select('fontFamily', ['sans-serif', 'serif', 'Georgia', 'system-ui'])}
                            ${utils.select('fontStyle', ['normal', 'italic'])}
                            ${utils.select('fontWeight', ['normal', 'bold', 'lighter'])}                         
                            ${utils.textarea('styles', 'Введите желаемые стили для заголовка')}
                            ${utils.submitBtn()}`);
    } else if (tagName === 'Изображение') {
        form = utils.form(` ${utils.input('content', 'Путь до картинки')}
                            ${utils.input('alt', 'Введите описание для картинки, (alt)')}
                            ${utils.input('width', 'Введите ширину картинки')}
                            ${utils.input('height', 'Введите высоту картинки')}
                            ${utils.input('radius', 'Введите значение для скругления углов картинки (только цифры)')}
                            ${utils.select('justify', ['flex-start', 'center', 'flex-end'])}                            
                            ${utils.textarea('styles', 'Введите желаемые стили для картинки')}
                            ${utils.submitBtn()}`);
    }
    return form;
}

const onSubmitForm = e => {
    e.preventDefault();

    const $mainSelect = document.querySelector('.main-select');
    const dataClass = $mainSelect.options[$mainSelect.selectedIndex].value;
    const formChildren = e.target.children;
    let mainData = {};

    for (let elem of formChildren) {
        if (elem.value) {
            mainData[elem.name] = elem.value;
        }
    }
    management.addNewData(dataClass, mainData);
}

export {
    createForm,
    onSubmitForm
};