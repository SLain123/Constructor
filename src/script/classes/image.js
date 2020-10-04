import Block from './block';
import utils from '../components/utils';

class ImageBlock extends Block {
    constructor({ 
        content = 'Здесь должен быть путь до картинки', 
        tag = 'img',
        styles = ''
    }) {
        super('text', content, tag, styles)
    }

    toHTML() {
        return utils.row(`<img src="${this.content}" alt="pic" style="${utils.getCss(this.styles)}">`);
    }
}

export default ImageBlock;