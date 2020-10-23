import Block from './block';
import utils from '../components/utils';

class ColumnsBlock extends Block {
    constructor({
        id = 'error-id',
        content = ['Текст первой колонки', 'Текст второй колонки', 'Текст третьей колонки'],
        tag = 'span',
        fontSize = '16',
        color,
        fontFamily = 'sans-serif',
        fontStyle = 'normal',
        fontWeight = 'normal',
        margin = 0,
        padding = 0,
        styles = ''
    }) {
        super(id, content, tag, styles);
        this.name = 'Колонки с текстом';
        this.color = color;
        this.fontFamily = fontFamily;
        this.fontStyle = fontStyle;
        this.fontWeight = fontWeight;
        this.fontSize = fontSize;
        this.margin = margin;
        this.padding = padding;
    }

    toHTML() {
        const resultArr = this.content.map(text => utils.col(`<${this.tag} class="columns-${this.id}" style="font-size: ${this.checkNumber(this.fontSize, 8, 80)}px; color: ${this.color}; font-family: ${this.fontFamily}; font-style: ${this.fontStyle}; font-weight: ${this.fontWeight}; margin: ${this.checkNumber(this.margin, 0, (this.getMaxWidth() / 10))}px; padding: ${this.checkNumber(this.padding, 0, (this.getMaxWidth() / 10))}px; ${this.styles}">${text}</${this.tag}>`)).join(' ');
        return utils.row(`${resultArr}`, this.id);
    }
}

export default ColumnsBlock;