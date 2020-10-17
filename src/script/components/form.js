import utils from './utils';
import {
    management
} from '../index';

const createForm = tagName => {
    let form;
    if (tagName === 'Заголовок') {
        form = utils.form(` ${utils.input('content', 'Введите текст заголовка', 'Текст заголовка:')}
                            ${utils.select('tag', ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'], 'Выберите тип (величину) заголовка')}
                            ${utils.input('color', 'Введите цвет текста', 'Цвет текста:')}
                            ${utils.select('fontFamily', ['sans-serif', 'serif', 'Georgia', 'system-ui'], 'Выберите тип шрифта')}
                            ${utils.select('fontStyle', ['normal', 'italic'], 'Выберите стиль шрифта')}
                            ${utils.select('fontWeight', ['normal', 'bold', 'lighter'], 'Выберите толщину шрифта')}
                            ${utils.select('textAlign', ['left', 'center', 'right'], 'Выберите положение заголовка')}
                            ${utils.textarea('styles', 'Введите желаемые стили для заголовка (опционально), формат css','Дополнительные стили:')}
                            ${utils.submitBtn()}`);
    } else if (tagName === 'Обычный текст') {
        form = utils.form(` ${utils.input('content', 'Введите текст абзаца', 'Текст абзаца:')}
                            ${utils.input('fontSize', 'Введите размер текста от 1 до 100px (только цифры)', 'Размер текста:', 'number')}
                            ${utils.input('color', 'Введите цвет текста', 'Цвет текста:')}
                            ${utils.select('fontFamily', ['sans-serif', 'serif', 'Georgia', 'system-ui'], 'Выберите тип шрифта')}
                            ${utils.select('fontStyle', ['normal', 'italic'], 'Выберите стиль шрифта')}
                            ${utils.select('fontWeight', ['normal', 'bold', 'lighter'], 'Выберите толщину шрифта')}
                            ${utils.select('textAlign', ['left', 'center', 'right'], 'Выберите положение текста')}
                            ${utils.textarea('styles', 'Введите желаемые стили для текста (опционально), формат css', 'Дополнительные стили:')}
                            ${utils.submitBtn()}`);
    } else if (tagName === 'Колонки с текстом') {
                            form = utils.form(` ${utils.textarea('content', 'Введите текст абзацев для каждого столбца через ; ', 'Текст колонок:')}
                            ${utils.input('fontSize', 'Введите размер текста от 1 до 100px (только цифры)', 'Размер текста:', 'number')}
                            ${utils.input('color', 'Введите цвет текста', 'Цвет текста:')}
                            ${utils.select('fontFamily', ['sans-serif', 'serif', 'Georgia', 'system-ui'], 'Выберите тип шрифта')}
                            ${utils.select('fontStyle', ['normal', 'italic'], 'Выберите стиль шрифта')}
                            ${utils.select('fontWeight', ['normal', 'bold', 'lighter'], 'Выберите толщину шрифта')}                         
                            ${utils.textarea('styles', 'Введите желаемые стили для заголовка', 'Дополнительные стили:')}
                            ${utils.submitBtn()}`);
    } else if (tagName === 'Изображение') {
        form = utils.form(` ${utils.input('content', 'Путь до картинки', 'Укажите путь до картинки:')}
                            ${utils.input('alt', 'Введите описание для картинки:, (alt)', 'Введите описани картинки:')}
                            ${utils.input('width', 'Введите ширину картинки', 'Ширина:', 'number')}
                            ${utils.input('height', 'Введите высоту картинки', 'Длина:', 'number')}
                            ${utils.input('radius', 'Введите значение для скругления углов картинки (только цифры)', 'Величина скругления углов:', 'number')}
                            ${utils.select('justify', ['left', 'center', 'right'], 'Выберите положение картинки')}                            
                            ${utils.textarea('styles', 'Введите желаемые стили для картинки', 'Дополнительные стили:')}
                            ${utils.submitBtn()}`);
    }
    return form;
}

const onSubmitForm = e => {
    e.preventDefault();

    const $mainSelect = document.querySelector('.main-select select');
    const dataClass = $mainSelect.options[$mainSelect.selectedIndex].value;
    const formLables = e.target.querySelectorAll('label');

    let mainData = {};

    for (let lable of formLables) {
        const dataBlock = lable.children[0];

        if (dataBlock.value) {
            mainData[dataBlock.name] = dataBlock.value;
        }
    }

    e.target.reset();
    management.addNewData(dataClass, mainData);
}

export {
    createForm,
    onSubmitForm
};