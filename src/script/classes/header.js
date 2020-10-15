import Block from './block';
import utils from '../components/utils';

class HeaderBlock extends Block {
    constructor({
        id = 'error-id',
        content = 'Здесь должен быть какой то заголовок',
        tag = 'h1',
        color = 'black',
        fontFamily = 'sans-serif',
        fontStyle = 'normal',
        fontWeight = 'normal',
        textAlign = 'left',
        styles = ''
    }) {
        super(id, content, tag, styles);
        this.color = color;
        this.fontFamily = fontFamily;
        this.fontStyle = fontStyle;
        this.fontWeight = fontWeight;
        this.textAlign = textAlign;
    }

    toHTML() {
        return utils.row(
            utils.col(`<${this.tag} class="title-${this.id}" style="color: ${this.color}; font-family: ${this.fontFamily};font-style: ${this.fontStyle}; font-weight: ${this.fontWeight}; text-align: ${this.textAlign}; ${this.styles}">${this.content}</${this.tag}>`),
            this.id);
    }
}

export default HeaderBlock;