import Block from './block';
import utils from '../components/utils';

class ColumnsBlock extends Block {
    constructor({ 
        content = 'Здесь должен быть какой то массив с текстом для колонок', 
        tag = 'span',
        styles = ''
    }) {
        super('text', content, tag, styles)
    }

    toHTML() {
        const resultArr = this.content.map(text => utils.col(`<${this.tag} class="columns" style="${utils.getCss(this.styles)}">${text}</${this.tag}>`, 3)).join(' ');
    return utils.row(`${resultArr}`);
    }
}

export default ColumnsBlock;