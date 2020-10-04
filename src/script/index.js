import storageModel from './components/storage-model';

storageModel('content');

const $panel = document.querySelector('.panel');

const renderForm = () => {
    const form = `
        <form>
            <input type="text" placeholder="this text" name="text">
        </form>
    `

    $panel.insertAdjacentHTML('beforeEnd', form);
}

renderForm();