import Block from './block';
import utils from '../components/utils';
import pic from '../../assets/example.jpg';

class ImageBlock extends Block {
    constructor({
        id = 'error-id',
        file = pic,
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
        this.name = 'Изображение';
        this.file = file;
        this.alt = alt;
        this.width = width;
        this.height = height;
        this.radius = radius;
        this.justify = justify;
    }

    toHTML() {
        return utils.row(utils.col(`<img src="${this.file}" alt="${this.alt}" class="pic-${this.id}" data-path="${this.content}" style="width: ${this.width}px; height: ${this.height}px; border-radius: ${this.radius}px; ${this.styles}">`, this.justify), this.id);
    }
}

export default ImageBlock;