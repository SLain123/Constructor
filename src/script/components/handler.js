import HeaderBlock from '../classes/header';
import TextBlock from '../classes/text';
import ColumnsBlock from '../classes/columns';
import ImageBlock from '../classes/image';
import Link from '../classes/link';

const handler = (selectName, data, id, isRecreated = false) => {
    const dataWithId = Object.assign(data, id);
    switch (selectName) {
        case 'Заголовок':
            return new HeaderBlock(dataWithId);
        case 'Обычный текст':
            return new TextBlock(dataWithId);
        case 'Колонки с текстом':
            if(isRecreated) {
                return new ColumnsBlock(dataWithId);
            } else {
                return new ColumnsBlock(convertTextToColumnArr(dataWithId));
            }
            
        case 'Изображение':
            return new ImageBlock(dataWithId);
        case 'Гиперссылка':
            return new Link(dataWithId);
    }
}

const convertTextToColumnArr = data => {
    let result = data;
    if (data.content) {
        const columns = data.content.split('; ');
        result.content = columns;
        return result;
    } else {
        return data;
    }
}

export {
    handler
};