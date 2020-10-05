import HeaderBlock from '../classes/header';
import TextBlock from '../classes/text';
import ColumnsBlock from '../classes/columns';
import ImageBlock from '../classes/image';
import pic from '../../assets/example.jpg';

let _dataStorage = [
                new HeaderBlock({
                content: 'Hot headerrrrr',
                tag: 'h2',
                styles: {
                    'text-align': 'center',
                    'color': 'red'
                }
                }),
                new TextBlock({
                    type: 'text',
                    content: 'this\'s super text',
                    styles: {
                        'background': 'yellow'
                    }
                }),
                new ColumnsBlock({
                    type: 'columns',
                    content: [123, 345, 567, 888]
                }),
                new ImageBlock({
                    type: 'image', 
                    content: pic
                })
            ];

const _dataPanel = ['Заголовок', 'Обычный текст', 'Колонки с текстом', 'Изображение'];

const addDataToStorage = (data, storage = _dataStorage) => {
    storage.push(data);
};

const getData = request => {
    return (request === 'content') ? _dataStorage : _dataPanel;
}

export {getData, addDataToStorage};

