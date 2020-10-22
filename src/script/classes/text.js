import Block from './block';
import utils from '../components/utils';

class TextBlock extends Block {
    constructor({
        id = 'error-id',
        content = 'Здесь должен быть какой то текст',
        tag = 'p',
        fontSize = '16',
        color = '#333',
        fontFamily = 'sans-serif',
        fontStyle = 'normal',
        fontWeight = 'normal',
        textAlign = 'left',
        styles = ''
    }) {
        super(id, content, tag, styles);
        this.name = 'Обычный текст';
        this.color = color;
        this.fontFamily = fontFamily;
        this.fontStyle = fontStyle;
        this.fontWeight = fontWeight;
        this.textAlign = textAlign;
        this.fontSize = fontSize;
    }

    toHTML() {
        return utils.row(
            utils.col(`<${this.tag} class="text-${this.id}" style="font-size: ${this.fontSize}px; color: ${this.color}; font-family: ${this.fontFamily}; font-style: ${this.fontStyle}; font-weight: ${this.fontWeight}; text-align: ${this.textAlign}; ${this.styles}">${this.content}</${this.tag}>`),
            this.id);
    }
}

export default TextBlock;