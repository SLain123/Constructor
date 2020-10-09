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
                            ${utils.textarea('styles', 'Введите желаемые стили для заголовка (опционально), формат css','Укажите дополнительные стили')}
                            ${utils.submitBtn()}`);
    } else if (tagName === 'Обычный текст') {
        form = utils.form(` ${utils.input('content', 'Введите текст абзаца', 'Текст абзаца:')}
                            ${utils.input('fontSize', 'Введите размер текста от 1 до 100px (только цифры)', 'Размер текста')}
                            ${utils.input('color', 'Введите цвет текста', 'Цвет текста:')}
                            ${utils.select('fontFamily', ['sans-serif', 'serif', 'Georgia', 'system-ui'], 'Выберите тип шрифта')}
                            ${utils.select('fontStyle', ['normal', 'italic'], 'Выберите стиль шрифта')}
                            ${utils.select('fontWeight', ['normal', 'bold', 'lighter'], 'Выберите толщину шрифта')}
                            ${utils.select('textAlign', ['left', 'center', 'right'], 'Выберите положение текста')}
                            ${utils.textarea('styles', 'Введите желаемые стили для текста (опционально), формат css', 'Укажите дополнительные стили')}
                            ${utils.submitBtn()}`);
    } else if (tagName === 'Колонки с текстом') {
        form = utils.form(` ${utils.textarea('content', 'Введите текст абзацев для каждого столбца через ;')}
                            ${utils.select('coluns', ['2', '3', '4', '6', '12'], 'Выберите количество столбцов текста')}
                            ${utils.input('fontSize', 'Введите размер текста от 1 до 100px (только цифры)', 'Размер текста')}
                            ${utils.input('color', 'Введите цвет текста', 'Цвет текста:')}
                            ${utils.select('fontFamily', ['sans-serif', 'serif', 'Georgia', 'system-ui'], 'Выберите тип шрифта')}
                            ${utils.select('fontStyle', ['normal', 'italic'], 'Выберите стиль шрифта')}
                            ${utils.select('fontWeight', ['normal', 'bold', 'lighter'], 'Выберите толщину шрифта')}                         
                            ${utils.textarea('styles', 'Введите желаемые стили для заголовка', 'Укажите дополнительные стили')}
                            ${utils.submitBtn()}`);
    } else if (tagName === 'Изображение') {
        form = utils.form(` ${utils.input('content', 'Путь до картинки', 'Укажите путь до картинки:')}
                            ${utils.input('alt', 'Введите описание для картинки, (alt)', 'Введите описани картинки')}
                            ${utils.input('width', 'Введите ширину картинки', 'Ширина')}
                            ${utils.input('height', 'Введите высоту картинки', 'Длина')}
                            ${utils.input('radius', 'Введите значение для скругления углов картинки (только цифры)', 'Величина скругления углов')}
                            ${utils.select('justify', ['flex-start', 'center', 'flex-end'], 'Выберите положение картинки')}                            
                            ${utils.textarea('styles', 'Введите желаемые стили для картинки', 'Укажите дополнительные стили')}
                            ${utils.submitBtn()}`);
    }
    return form;
}

const onSubmitForm = e => {
    e.preventDefault();

    const $mainSelect = document.querySelector('.main-select select');
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