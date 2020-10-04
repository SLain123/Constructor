import Block from './block';
import utils from '../components/utils';

class HeaderBlock extends Block {
    constructor({ 
        content = 'Здесь должен быть какой то заголовок', 
        tag = 'h1',
        styles = ''
    }) {
        super('header', content, tag, styles)
    }

    toHTML() {
        return utils.row(utils.col(`<${this.tag} class="title" style="${utils.getCss(this.styles)}">${this.content}</${this.tag}>`));
    }
}

export default HeaderBlock;