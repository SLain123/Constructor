import ManagementCenter from './classes/management';
import arrowControl from './components/arrow-panel';

const $content = document.querySelector('.content');
const $panel = document.querySelector('.panel');
const $resultsHTML = document.querySelector('.results__html');
const $resultsCSS = document.querySelector('.results__css');
const management = new ManagementCenter($content, $panel, 10, $resultsHTML, $resultsCSS);

management.initContent();
management.initPanel();
management.renderStartForm();
arrowControl();

export {
    management
};