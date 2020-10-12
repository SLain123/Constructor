import Block from './block';
import utils from '../components/utils';

class ColumnsBlock extends Block {
    constructor({
        id = 'error-id',
        content = ['Текст первой колонки', 'Текст второй колонки', 'Текст третьей колонки'],
        coluns = 3,
        tag = 'span',
        fontSize = '16',
        color = 'black',
        fontFamily = 'sans-serif',
        fontStyle = 'normal',
        fontWeight = 'normal',
        styles = ''
    }) {
        super(id, content, tag, styles)
        this.coluns = coluns;
        this.color = color;
        this.fontFamily = fontFamily;
        this.fontStyle = fontStyle;
        this.fontWeight = fontWeight;
        this.fontSize = fontSize;
    }

    columnConverter() {
        switch(this.coluns) {
            case '2': 
                return '6';
            case '3':
                return '4';
            case '4':
                return '3';
            case '6':
                return '2';
            case '12': 
                return '1';
        }
    }

    toHTML() {
        const resultArr = this.content.map(text => utils.col(`<${this.tag} class="columns" style="font-size: ${this.fontSize}px; color: ${this.color}; font-family: ${this.fontFamily}; font-style: ${this.fontStyle}; font-weight: ${this.fontWeight}; ${this.styles}">${text}</${this.tag}>`, this.columnConverter())).join(' ');
        return utils.row(`${resultArr}`, this.id);
    }
}

export default ColumnsBlock;