import HeaderBlock from '../classes/header';
import TextBlock from '../classes/text';
import ColumnsBlock from '../classes/columns';
import ImageBlock from '../classes/image';
import help from './help';

let _dataStorage = [
    new HeaderBlock({
        id: 1,
        content: help.headerStartContent,
        tag: 'h2',
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'Verdana, Geneva, sans-serif',
        styles: 'margin: 25px; text-shadow: 1px 1px 25px black;'
    }),
    new TextBlock({
        id: 2,
        content: help.textStartContent,
        fontFamily: 'Verdana, Geneva, sans-serif',
        styles: 'background: #B2B2B2; padding: 30px; border-radius: 10px; box-shadow: 1px 1px 5px black;'
    }),
    new TextBlock({
        id: 3,
        content: help.descriptionText,
        fontFamily: 'Verdana, Geneva, sans-serif',
        styles: 'background: #FFFF66; padding: 30px; border-radius: 10px; box-shadow: 1px 1px 5px black;'
    }),
    new ColumnsBlock({
        id: 4,
        content: ['Это', 'пример', 'блока', 'из', 'шести', 'столбцов'],
    }),
    new ImageBlock({
        id: 5,
        content: '/examplePath/...',
        width: 800,
        height: 460,
        radius: 45,
        justify: 'center',
        styles: 'margin-top: 10px'
    })
];

const _dataPanel = ['Заголовок', 'Обычный текст', 'Колонки с текстом', 'Изображение'];

const addDataToStorage = (data, storage = _dataStorage) => {
    storage.push(data);
};

const removeDataStorage = id => {
    const numID = +id;

    if(!isNaN(numID)) {
        _dataStorage.forEach((obj, i) => {
            
            if (obj.id === numID) {
                const copyArr = [..._dataStorage.slice(0, i), ..._dataStorage.slice(i + 1)];
                _dataStorage = copyArr;
            }
        })
    } else {
        throw new Error ('ID блока имеет формат отличный от номера, удалить можно только блок с корреектным id');
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