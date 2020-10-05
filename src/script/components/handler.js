import HeaderBlock from '../classes/header';
import TextBlock from '../classes/text';
import ColumnsBlock from '../classes/columns';
import ImageBlock from '../classes/image';
import pic from '../../assets/example.jpg';

const handler = (selectName, data) => {
    switch (selectName) {
        case 'Заголовок':
            return new HeaderBlock(data);
    }
}

export {
    handler
};