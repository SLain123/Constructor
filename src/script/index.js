import ManagementCenter from './classes/management';

const $content = document.querySelector('.content');
const $panel = document.querySelector('.panel');
const management = new ManagementCenter($content, $panel);

management.initContent();
management.initPanel();
management.renderStartForm();

export {
    management
};