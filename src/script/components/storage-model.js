import HeaderBlock from '../classes/header';
import TextBlock from '../classes/text';
import ColumnsBlock from '../classes/columns';
import ImageBlock from '../classes/image';
import renderContent from './render-content';
import pic from '../../assets/example.jpg';

const storageModel = (selector, addData = false) => {
    let defaultData = [
            new HeaderBlock({
            content: 'Hot headerrrrr',
            tag: 'h2',
            styles: {
                'text-align': 'center',
                'color': 'red'
            }
        }),
        new TextBlock({
            type: 'text',
            content: 'this\'s super text',
            styles: {
                'background': 'yellow'
            }
        }),
        new ColumnsBlock({
            type: 'columns',
            content: [123, 345, 567, 888]
        }),
        new ImageBlock({
            type: 'image', 
            content: pic
        })
    ];

    if(addData) {
        defaultData.push(addData);
    }
    
    startRender(defaultData, selector);
}

const startRender = (data, selector) => {
    for(let elem of data) {
        renderContent(elem, selector);
    }
}

export default storageModel;

