import utils from '../components/utils';

class Block {
    constructor(id, content, tag, styles) {
        this.id = id;
        this.content = content;
        this.tag = tag;
        this.styles = styles;
    }

    toHTML() {
        throw new Error('ОШИБКА: Метод toHTML должен быть реализован.');
    }

    checkNumber(number, min = 1, max = 100, text = 'размер') {
        if(number < min) {
            return min;
        } else if (number > max) {
            return max;
        } else return number;
    }
}


export default Block;