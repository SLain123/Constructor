import HeaderBlock from '../classes/header';
import TextBlock from '../classes/text';
import ColumnsBlock from '../classes/columns';
import ImageBlock from '../classes/image';

const handler = (selectName, data) => {
    switch (selectName) {
        case 'Заголовок':
            return new HeaderBlock(data);
        case 'Обычный текст':
            return new TextBlock(data);
        case 'Колонки с текстом':
            return new ColumnsBlock(convertTextToColumnArr(data));
        case 'Изображение':
            return new ImageBlock(data);
    }
}

const convertTextToColumnArr = data => {
    let result = data;
    if(data.content) {
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