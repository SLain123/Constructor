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
}


export default Block;