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
    } else if (tagName === 'Гиперссылка') {
        form = utils.form(` ${utils.input('content', 'Введите текст для отображения', 'Текст ссылки:')}
                            ${utils.input('link', 'Введите ссылку http(s)://...', 'Тело ссылки:')}
                            ${utils.select('blank', ['Да', 'Нет'], 'В отдельном окне?')}
                            ${utils.input('fontSize', 'Введите размер текста от 1 до 100px (только цифры)', 'Размер текста:', 'number')}
                            ${utils.input('color', 'Введите цвет текста', 'Цвет текста:')}
                            ${utils.select('fontFamily', ['sans-serif', 'serif', 'Georgia', 'system-ui'], 'Тип шрифта')}
                            ${utils.select('fontStyle', ['normal', 'italic'], 'Стиль шрифта')}
                            ${utils.select('fontWeight', ['normal', 'bold', 'lighter'], 'Толщина шрифта')}
                            ${utils.select('textAlign', ['left', 'center', 'right'], 'Положение ссылки')}
                            ${utils.textarea('styles', 'Введите желаемые стили для текста (опционально), формат css', 'Дополнительные стили:')}
                            ${utils.submitBtn()}`);
    } else if (tagName === 'Колонки с текстом') {
        form = utils.form(` ${utils.textarea('content', 'Введите текст абзацев для каждого столбца через ; с пробелом:     `; `', 'Текст колонок:')}
                            ${utils.input('fontSize', 'Введите размер текста от 1 до 100px (только цифры)', 'Размер текста:', 'number')}
                            ${utils.input('color', 'Введите цвет текста', 'Цвет текста:')}
                            ${utils.select('fontFamily', ['sans-serif', 'serif', 'Georgia', 'system-ui'], 'Выберите тип шрифта')}
                            ${utils.select('fontStyle', ['normal', 'italic'], 'Выберите стиль шрифта')}
                            ${utils.select('fontWeight', ['normal', 'bold', 'lighter'], 'Выберите толщину шрифта')}                         
                            ${utils.textarea('styles', 'Введите желаемые стили для заголовка', 'Дополнительные стили:')}
                            ${utils.submitBtn()}`);
    } else if (tagName === 'Изображение') {
        form = utils.form(` ${utils.input('content', 'Путь будет добавлен в результатах', 'Путь до картинки:')} 
                            ${utils.input('file', '', 'Добавьте макет изображения:', 'file')}
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