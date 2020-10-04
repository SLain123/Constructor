import Block from './block';
import utils from '../components/utils';

class TextBlock extends Block {
    constructor({ 
        content = 'Здесь должен быть какой то текст', 
        tag = 'p',
        styles = ''
    }) {
        super('text', content, tag, styles)
    }

    toHTML() {
        return utils.row(utils.col(`<${this.tag} class="text" style="${utils.getCss(this.styles)}">${this.content}</${this.tag}>`));
    }
}

export default TextBlock;