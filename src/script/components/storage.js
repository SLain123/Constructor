import HeaderBlock from '../classes/header';
import TextBlock from '../classes/text';
import ColumnsBlock from '../classes/columns';
import ImageBlock from '../classes/image';

let _dataStorage = [
                new HeaderBlock({
                    content: 'Hot headerrrrr',
                    tag: 'h2',
                    styles: 'text-align: center; color: red;'
                }),
                new TextBlock({
                    content: 'this\'s super text',
                    styles: 'background: yellow;'
                }),
                new ColumnsBlock({
                    content: [123, 345, 567, 888]
                }),
                new ImageBlock({
                    content: '/examplePath/...'
                })
            ];

const _dataPanel = ['Заголовок', 'Обычный текст', 'Колонки с текстом', 'Изображение'];

const addDataToStorage = (data, storage = _dataStorage) => {
    storage.push(data);
    console.log(_dataStorage);
};

const getData = request => {
    return (request === 'content') ? _dataStorage : _dataPanel;
}

export {getData, addDataToStorage};

