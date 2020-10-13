import ManagementCenter from './classes/management';

const $content = document.querySelector('.content');
const $panel = document.querySelector('.panel');
const $results = document.querySelector('.results__body')
const management = new ManagementCenter($content, $panel, 10, $results);

management.initContent();
management.initPanel();
management.renderStartForm();

export {
    management
};