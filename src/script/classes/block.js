import utils from '../components/utils';

class Block {
    constructor(content, tag, styles) {
        this.content = content;
        this.tag = tag;
        this.styles = styles;
    }

    toHTML() {
        throw new Error('ОШИБКА: Метод toHTML должен быть реализован.');
    }
}


export default Block;