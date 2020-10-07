import HeaderBlock from '../classes/header';
import TextBlock from '../classes/text';
import ColumnsBlock from '../classes/columns';
import ImageBlock from '../classes/image';

let _dataStorage = [
    new HeaderBlock({
        id: 1,
        content: 'Hot headerrrrr',
        tag: 'h2',
        styles: 'text-align: center; color: red;'
    }),
    new TextBlock({
        id: 2,
        content: 'this\'s super text',
        styles: 'background: yellow;'
    }),
    new ColumnsBlock({
        id: 3,
        content: [123, 345, 567, 888]
    }),
    new ImageBlock({
        id: 4,
        content: '/examplePath/...'
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

const getData = request => {
    return (request === 'content') ? _dataStorage : _dataPanel;
}

export {
    getData,
    addDataToStorage,
    removeDataStorage
};