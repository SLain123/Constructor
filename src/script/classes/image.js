import Block from './block';
import utils from '../components/utils';
import pic from '../../assets/example.jpg';

class ImageBlock extends Block {
    constructor({ 
        content = 'Здесь должен быть путь до картинки', 
        tag = 'img',
        styles = ''
    }) {
        super(content, tag, styles)
    }

    toHTML() {
        return utils.row(`<img src="${pic}" alt="pic" style="${this.styles}">`);
    }
}

export default ImageBlock;