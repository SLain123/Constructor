import Block from './block';
import utils from '../components/utils';

class HeaderBlock extends Block {
    constructor({
        id = 'error-id',
        content = 'Здесь должен быть какой то заголовок',
        tag = 'h1',
        color = '#333',
        fontFamily = 'sans-serif',
        fontStyle = 'normal',
        fontWeight = 'normal',
        textAlign = 'left',
        margin = 0,
        padding = 0,
        styles = ''
    }) {
        super(id, content, tag, styles);
        this.name = 'Заголовок';
        this.color = color;
        this.fontFamily = fontFamily;
        this.fontStyle = fontStyle;
        this.fontWeight = fontWeight;
        this.textAlign = textAlign;
        this.margin = margin;
        this.padding = padding;
    }

    toHTML() {
        return utils.row(
            utils.col(`<${this.tag} class="title-${this.id}" style="color: ${this.color}; font-family: ${this.fontFamily};font-style: ${this.fontStyle}; font-weight: ${this.fontWeight}; text-align: ${this.textAlign}; margin: ${this.checkNumber(this.margin, 0, (this.getMaxWidth() / 4))}px; padding: ${this.checkNumber(this.padding, 0, (this.getMaxWidth() / 4))}px; ${this.styles}">${this.content}</${this.tag}>`),
            this.id);
    }
}

export default HeaderBlock;