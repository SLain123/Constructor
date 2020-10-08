import Block from './block';
import utils from '../components/utils';
import pic from '../../assets/example.jpg';

class ImageBlock extends Block {
    constructor({
        id = 'error-id',
        content = 'Здесь должен быть путь до картинки',
        tag = 'img',
        alt = 'pic',
        width = '500',
        height = '300',
        radius = '0',
        justify,
        styles = ''
    }) {
        super(id, content, tag, styles);
        this.alt = alt;
        this.width = width;
        this.height = height;
        this.radius = radius;
        this.justify = justify;
    }

    toHTML() {
        return utils.row(`<img src="${pic}" alt="${this.alt}" class="pic" data-path="${this.content}" style="width: ${this.width}px; height: ${this.height}px; border-radius: ${this.radius}px; ${this.styles}">`, this.id, this.justify);
    }
}

export default ImageBlock;