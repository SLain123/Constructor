import HeaderBlock from '../classes/header';
import TextBlock from '../classes/text';
import ColumnsBlock from '../classes/columns';
import ImageBlock from '../classes/image';

const handler = (selectName, data, id) => {
    const dataWithId = Object.assign(data, id);
    switch (selectName) {
        case 'Заголовок':
            return new HeaderBlock(dataWithId);
        case 'Обычный текст':
            return new TextBlock(dataWithId);
        case 'Колонки с текстом':
            return new ColumnsBlock(convertTextToColumnArr(dataWithId));
        case 'Изображение':
            return new ImageBlock(dataWithId);
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