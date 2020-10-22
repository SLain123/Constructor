import HeaderBlock from '../classes/header';
import TextBlock from '../classes/text';
import ColumnsBlock from '../classes/columns';
import ImageBlock from '../classes/image';
import Link from '../classes/link';
import help from './help';

let _dataStorage = [
    new HeaderBlock({
        id: 1,
        content: help.headerStartContent,
        tag: 'h2',
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'Verdana, Geneva, sans-serif',
        styles: 'margin-bottom: 5px; text-shadow: 3px 3px 15px #333;'
    }),
    new TextBlock({
        id: 2,
        content: help.textStartContent,
        fontFamily: 'Verdana, Geneva, sans-serif',
        fontSize: '18',
        styles: 'background: #C7D1D1; padding: 30px; border-radius: 10px;'
    }),
    new ColumnsBlock({
        id: 3,
        content: [help.descriptionText, help.descriptionColuns, help.descriptionImage, help.descriptionLink],
        fontFamily: 'Verdana, Geneva, sans-serif',
        styles: 'border: grey 1px solid; display: block; border-radius: 10px; background: #FFFF66; padding: 5px; margin: 5px;'
    }),
    new ImageBlock({
        id: 4,
        content: '/examplePath/...',
        width: 530,
        height: 350,
        radius: 45,
        justify: 'center',
        styles: 'margin: 10px; box-shadow: 2px 2px 10px #333;'
    }),
    new Link({
        id: 5,
        content: 'Это ссылка - пример. Она ведет на сайт Google',
        textAlign: 'center',
        fontFamily: 'Verdana, Geneva, sans-serif',
        fontWeight: 'bold'
    })
];

const _dataPanel = ['Заголовок', 'Обычный текст', 'Колонки с текстом', 'Изображение', 'Гиперссылка'];

const addDataToStorage = (data, storage = _dataStorage) => {
    storage.push(data);
};

const removeDataStorage = id => {
    const numID = +id;

    if (!isNaN(numID)) {
        _dataStorage.forEach((obj, i) => {

            if (obj.id === numID) {
                const copyArr = [..._dataStorage.slice(0, i), ..._dataStorage.slice(i + 1)];
                _dataStorage = copyArr;
            }
        })
    } else {
        throw new Error('ID блока имеет формат отличный от номера, удалить можно только блок с корреектным id');
    }
}

const cleanAll = () => {
    _dataStorage = [];
}

const getData = request => {
    return (request === 'content') ? _dataStorage : _dataPanel;
}

export {
    getData,
    addDataToStorage,
    removeDataStorage,
    cleanAll
};