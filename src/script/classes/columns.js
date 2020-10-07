import Block from './block';
import utils from '../components/utils';

class ColumnsBlock extends Block {
    constructor({
        id = 'error-id',
        content = ['Текст первой колонки', 'Текст второй колонки', 'Текуст третьей колонки'],
        tag = 'span',
        styles = ''
    }) {
        super(id, content, tag, styles)
    }

    toHTML() {
        const resultArr = this.content.map(text => utils.col(`<${this.tag} class="columns" style="${this.styles}">${text}</${this.tag}>`, 3)).join(' ');
        return utils.row(`${resultArr}`, this.id);
    }
}

export default ColumnsBlock;