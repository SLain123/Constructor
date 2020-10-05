import utils from './utils';
import { management } from '../index';

// Создает форму с различным наполнением в зависимости от переданного имени, передает на рендер;

const createForm = tagName => {
    let form;
    if (tagName === 'Заголовок') {
        form = utils.form(` ${utils.input('content', 'Введите текст заголовка')}
                            ${utils.select('tag', ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])}       
                            ${utils.textarea('styles', 'Введите желаемые стили для заголовка')}
                            ${utils.submitBtn()}`);
    } else if (tagName === 'Обычный текст') {
        form = utils.form(` ${utils.input('content', 'Введите текст абзаца')}                          
                            ${utils.textarea('styles', 'Введите желаемые стили для заголовка')}
                            ${utils.submitBtn()}`);
    } else if (tagName === 'Колонки с текстом') {
        form = utils.form(` ${utils.textarea('content', 'Введите текст абзацев для каждого столбца через ;')}                          
                            ${utils.textarea('styles', 'Введите желаемые стили для заголовка')}
                            ${utils.submitBtn()}`);
    } else if (tagName === 'Изображение') {
        form = utils.form(` ${utils.input('content', 'Путь до картинки')}                          
                            ${utils.textarea('styles', 'Введите желаемые стили для картинки')}
                            ${utils.submitBtn()}`);
    }
    return form;
}

// Ивент отправки данных из формы, передает данные функции которая создает верную структуру данных;

const onSubmitForm = e => {
    e.preventDefault();

    const $mainSelect = document.querySelector('.main-select');
    const dataClass = $mainSelect.options[$mainSelect.selectedIndex].value;
    const formChildren = e.target.children;
    let mainData = {};

    for (let elem of formChildren) {
        if(elem.value) {
            mainData[elem.name] = elem.value;
        }
    }
    management.addNewData(dataClass, mainData);
}

export {
    createForm,
    onSubmitForm
};