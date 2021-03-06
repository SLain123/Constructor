import utils from './utils';
import {
    management
} from '../index';

const createForm = tagName => {
    let form;
    if (tagName === 'Заголовок') {
        form = utils.form(` ${utils.input('content', 'Введите текст заголовка', 'Текст заголовка:')}
                            ${utils.select('tag', ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'], 'Тип (величина) заголовка')}
                            ${utils.input('color', 'Введите цвет текста', 'Цвет текста:', 'color', '#333333')}
                            ${utils.select('fontFamily', ['sans-serif', 'serif', 'Georgia', 'system-ui'], 'Выберите тип шрифта')}
                            ${utils.select('fontStyle', ['normal', 'italic'], 'Выберите стиль шрифта')}
                            ${utils.select('fontWeight', ['normal', 'bold', 'lighter'], 'Выберите толщину шрифта')}
                            ${utils.select('textAlign', ['left', 'center', 'right'], 'Выберите положение заголовка')}
                            ${utils.input('margin', 'Отступы от 0px до 25% (в px) от ширины монитора', 'Внешние отступы:', 'number')}
                            ${utils.input('padding', 'Отступы от 0px до 25% (в px) от ширины монитора', 'Внутренние отступы:', 'number')}
                            ${utils.textarea('styles', 'Введите желаемые стили для заголовка, формат css','Дополнительные стили:')}
                            ${utils.submitBtn()}`);
    } else if (tagName === 'Обычный текст') {
        form = utils.form(` ${utils.input('content', 'Введите текст абзаца', 'Текст абзаца:')}
                            ${utils.input('fontSize', 'Введите размер от 8 до 80px', 'Размер текста:', 'number')}
                            ${utils.input('color', 'Введите цвет текста', 'Цвет текста:', 'color', '#333333')}
                            ${utils.select('fontFamily', ['sans-serif', 'serif', 'Georgia', 'system-ui'], 'Выберите тип шрифта')}
                            ${utils.select('fontStyle', ['normal', 'italic'], 'Выберите стиль шрифта')}
                            ${utils.select('fontWeight', ['normal', 'bold', 'lighter'], 'Выберите толщину шрифта')}
                            ${utils.select('textAlign', ['left', 'center', 'right'], 'Выберите положение текста')}
                            ${utils.input('margin', 'Отступы от 0px до 25% (в px) от ширины монитора', 'Внешние отступы:', 'number')}
                            ${utils.input('padding', 'Отступы от 0px до 25% (в px) от ширины монитора', 'Внутренние отступы:', 'number')}
                            ${utils.textarea('styles', 'Введите желаемые стили для текста, формат css', 'Дополнительные стили:')}
                            ${utils.submitBtn()}`);
    } else if (tagName === 'Гиперссылка') {
        form = utils.form(` ${utils.input('content', 'Введите текст для отображения', 'Текст ссылки:')}
                            ${utils.input('link', 'Введите ссылку http(s)://...', 'Тело ссылки:')}
                            ${utils.select('blank', ['Да', 'Нет'], 'В отдельном окне?')}
                            ${utils.input('fontSize', 'Введите размер от 8 до 80px', 'Размер текста:', 'number')}
                            ${utils.input('color', 'Введите цвет текста', 'Цвет текста:', 'color', '#0d6efd')}
                            ${utils.select('fontFamily', ['sans-serif', 'serif', 'Georgia', 'system-ui'], 'Тип шрифта')}
                            ${utils.select('fontStyle', ['normal', 'italic'], 'Стиль шрифта')}
                            ${utils.select('fontWeight', ['normal', 'bold', 'lighter'], 'Толщина шрифта')}
                            ${utils.select('textAlign', ['left', 'center', 'right'], 'Положение ссылки')}
                            ${utils.input('margin', 'Отступы от 0px до 25% (в px) от ширины монитора', 'Внешние отступы:', 'number')}
                            ${utils.input('padding', 'Отступы от 0px до 25% (в px) от ширины монитора', 'Внутренние отступы:', 'number')}
                            ${utils.textarea('styles', 'Введите желаемые стили для гиперссылки, формат css', 'Дополнительные стили:')}
                            ${utils.submitBtn()}`);
    } else if (tagName === 'Колонки с текстом') {
        form = utils.form(` ${utils.textarea('content', 'Введите текст абзацев для каждого столбца через ; с пробелом:     `; `', 'Текст колонок:')}
                            ${utils.input('fontSize', 'Введите размер от 8 до 80px', 'Размер текста:', 'number')}
                            ${utils.input('color', 'Введите цвет текста', 'Цвет текста:', 'color', '#333333')}
                            ${utils.select('fontFamily', ['sans-serif', 'serif', 'Georgia', 'system-ui'], 'Выберите тип шрифта')}
                            ${utils.select('fontStyle', ['normal', 'italic'], 'Выберите стиль шрифта')}
                            ${utils.select('fontWeight', ['normal', 'bold', 'lighter'], 'Выберите толщину шрифта')}
                            ${utils.input('margin', 'Отступы от 0px до 10% (в px) от ширины монитора', 'Внешние отступы:', 'number')}
                            ${utils.input('padding', 'Отступы от 0px до 10% (в px) от ширины монитора', 'Внутренние отступы:', 'number')}
                            ${utils.textarea('styles', 'Введите желаемые стили для текста, формат css', 'Дополнительные стили:')}
                            ${utils.submitBtn()}`);
    } else if (tagName === 'Изображение') {
        form = utils.form(` ${utils.input('content', 'Путь будет добавлен в результатах', 'Путь до картинки:')} 
                            ${utils.input('file', '', 'Макет изображения:', 'file')}
                            ${utils.input('alt', 'Введите описание для картинки:, (alt)', 'Описание картинки:')}
                            ${utils.select('adaptive', ['Хочу значение в px', 'Хочу значение в %'], 'Единицы измерения')}    
                            ${utils.input('width', 'Значение от 10px(%) до 100% от ширины монитора', 'Ширина:', 'number')}
                            ${utils.input('height', 'Значение от 10px(%) до 100% от высоты монитора', 'Высота:', 'number')}
                            ${utils.input('radius', 'Значение от 0px(%) до 100px(%)', 'Величина скругления углов:', 'number')}
                            ${utils.select('justify', ['left', 'center', 'right'], 'Положение картинки')}
                            ${utils.input('margin', 'Отступы от 0px до 25% (в px) от ширины монитора', 'Внешние отступы:', 'number')}
                            ${utils.textarea('styles', 'Введите желаемые стили для картинки, формат css', 'Дополнительные стили:')}
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
    let checkText;

    for (let lable of formLables) {
        const dataBlock = lable.children[0];

        if(dataBlock.name === 'content') {                 // Проверка контента на запрещенные символы
            checkText = checkTextContent(dataBlock.value);
        }

        if (dataBlock.value) { //Проверка на наличие контента

            if (dataBlock.name === 'file') { //Проверка на то что элемент является файлом(pic)

                if (dataBlock.files[0].type === 'image/jpeg' || dataBlock.files[0].type === 'image/png' || dataBlock.files[0].type === 'image/gif') { //Проверка на формат файла

                    const url = URL.createObjectURL(dataBlock.files[0])
                    mainData[dataBlock.name] = url;

                }
            } else {
                mainData[dataBlock.name] = dataBlock.value;
            }
        }
    }

    e.target.reset();
    if(checkText === true) {
        management.addNewData(dataClass, mainData);
    }
}

const checkTextContent = text => {
    if(text.search(/[<|>]/) !== -1) {
        alert('Текстовое поле не поддерживает символы < и >, не используй их!');
        return false;
    }
    return true;
}

export {
    createForm,
    onSubmitForm
};