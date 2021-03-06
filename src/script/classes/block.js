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

    checkNumber(number, min = 1, max = 100) {
        if(number < min) {
            return min;
        } else if (number > max) {
            return max;
        } 
        return number;
    }

    getMaxWidth() {
        return document.documentElement.clientWidth;
    }

    getMaxHeigth() {
        return document.documentElement.clientHeight;
    }
}


export default Block;