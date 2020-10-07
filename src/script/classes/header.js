import Block from './block';
import utils from '../components/utils';

class HeaderBlock extends Block {
    constructor({
        id = 'error-id',
        content = 'Здесь должен быть какой то заголовок',
        tag = 'h1',
        styles = ''
    }) {
        super(id, content, tag, styles)
    }

    toHTML() {
        return utils.row(
            utils.col(`<${this.tag} class="title" style="${this.styles}">${this.content}</${this.tag}>`),
            this.id);
    }
}

export default HeaderBlock;