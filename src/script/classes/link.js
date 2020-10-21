import Block from './block';
import utils from '../components/utils';

class Link extends Block {
    constructor({
        id = 'error-id',
        content = 'Здесь должен быть текст гиперссылки',
        tag = 'a',
        link= 'http://google.ru/',
        fontSize = '16',
        color = '#0d6efd',
        fontFamily = 'sans-serif',
        fontStyle = 'normal',
        fontWeight = 'normal',
        textAlign = 'left',
        blank = 'Да',
        styles = ''
    }) {
        super(id, content, tag, styles);
        this.name = 'Гиперссылка';
        this.link = link;
        this.color = color;
        this.fontFamily = fontFamily;
        this.fontStyle = fontStyle;
        this.fontWeight = fontWeight;
        this.textAlign = textAlign;
        this.fontSize = fontSize;
        this.blank = blank;
    }

    isBlank() {
        if(this.blank === 'Да') {
            return 'target="_blank"';
        }
        return '';
    }

    toHTML() {
        return utils.row(
            utils.col(`<${this.tag} href="${this.link}" ${this.isBlank()} class="link-${this.id}" style="font-size: ${this.fontSize}px; color: ${this.color}; font-family: ${this.fontFamily}; font-style: ${this.fontStyle}; font-weight: ${this.fontWeight}; text-align: ${this.textAlign}; display: block; ${this.styles}">${this.content}</${this.tag}>`),
            this.id);
    }
}

export default Link;