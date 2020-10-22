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
        styles = '',
        adaptive = 'Хочу значение в px'
    }) {
        super(id, content, tag, styles);
        this.name = 'Изображение';
        this.file = file;
        this.alt = alt;
        this.width = width;
        this.height = height;
        this.radius = radius;
        this.justify = justify;
        this.adaptive = adaptive;
    }

    toHTML() {
        if(this.isAdaptive()) {
            return utils.row(utils.col(`<img src="${this.file}" alt="${this.alt}" class="pic-${this.id}" data-path="${this.content}" style="width: ${this.checkNumber(this.width, 10, 100)}%; height: ${this.checkNumber(this.height, 10, 100)}vh; border-radius: ${this.checkNumber(this.radius, 0, 100)}%; ${this.styles}">`, this.justify), this.id);
        }
        else {
            return utils.row(utils.col(`<img src="${this.file}" alt="${this.alt}" class="pic-${this.id}" data-path="${this.content}" style="width: ${this.checkNumber(this.width, 10, this.getMaxWidth())}px; height: ${this.checkNumber(this.height, 10, this.getMaxHeigth())}px; border-radius: ${this.checkNumber(this.radius, 0, 100)}px; ${this.styles}">`, this.justify), this.id);}
        
    }

    isAdaptive() {
        if(this.adaptive === 'Хочу значение в %') {
            return true;
        }
        return false;
    }

    getMaxWidth() {
        return document.documentElement.clientWidth;
    }

    getMaxHeigth() {
        return document.documentElement.clientHeight;
    }
}

export default ImageBlock;