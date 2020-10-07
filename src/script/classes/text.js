import Block from './block';
import utils from '../components/utils';

class TextBlock extends Block {
    constructor({
        id = 'error-id',
        content = 'Здесь должен быть какой то текст',
        tag = 'p',
        styles = ''
    }) {
        super(id, content, tag, styles)
    }

    toHTML() {
        return utils.row(
            utils.col(`<${this.tag} class="text" style="${this.styles}">${this.content}</${this.tag}>`),
            this.id);
    }
}

export default TextBlock;