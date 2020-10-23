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
        width = 'auto',
        height = 'auto',
        radius = '0',
        justify,
        styles = '',
        adaptive = 'Хочу значение в px',
        margin = 0
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
        this.margin = margin;
        this._w = '';
        this._h = '';
    }

    toHTML() {
        if(this.isAdaptive()) {
            return utils.row(utils.col(`<img src="${this.file}" alt="${this.alt}" class="pic-${this.id}" data-path="${this.content}" style="width: ${this.checkNumber(this.width, 10, 100)}${this._w}; height: ${this.checkNumber(this.height, 10, 100)}${this._h}; border-radius: ${this.checkNumber(this.radius, 0, 100)}%; margin: ${this.checkNumber(this.margin, 0, (this.getMaxWidth() / 4))}px; ${this.styles}">`, this.justify), this.id);
        }
        else {
            return utils.row(utils.col(`<img src="${this.file}" alt="${this.alt}" class="pic-${this.id}" data-path="${this.content}" style="width: ${this.checkNumber(this.width, 10, this.getMaxWidth())}${this._w}; height: ${this.checkNumber(this.height, 10, this.getMaxHeigth())}${this._h}; border-radius: ${this.checkNumber(this.radius, 0, 100)}px; margin: ${this.checkNumber(this.margin, 0, (this.getMaxWidth() / 4))}px; ${this.styles}">`, this.justify), this.id);
        }
    }

    isAdaptive() {
        if(this.adaptive === 'Хочу значение в %') {
            if(this.width !== 'auto') {
                this._w = '%'
            }
            if(this.height !== 'auto') {
                this._h = 'vh'
            }
            return true;
        }
        if(this.width !== 'auto') {
            this._w = 'px';
        }
        if(this.height !== 'auto') {
            this._h = 'px';
        }
        return false;
    }
}

export default ImageBlock;