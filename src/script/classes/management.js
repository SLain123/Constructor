import {
    getData,
    addDataToStorage,
    removeDataStorage
} from "../components/storage";
import {
    renderContent,
    renderPanel
} from '../components/render';
import {
    createForm
} from '../components/form';
import {
    createSelect
} from '../components/select';
import {
    handler
} from '../components/handler';
import {
    removeContent,
    removeForm
} from '../components/cleaner';
import {
    eventOnRemoveBtns
} from '../components/remove-btn';

class ManagementCenter {
    constructor(content, panel, startId) {
        this.contentBlock = content;
        this.panelBlock = panel;
        this.dataContent = getData('content');
        this.dataPanel = getData('panel');
        this._id = {
            id: startId
        };
    }

    updateData() {
        this.dataContent = getData('content');
    }

    updateId() {
        this._id.id += 1;
    }

    initContent() {
        renderContent(this.dataContent, this.contentBlock);
        eventOnRemoveBtns();
    }

    initPanel() {
        renderPanel(createSelect(this.dataPanel, 'main-select'), this.panelBlock);
    }

    renderStartForm() {
        renderPanel(createForm('Заголовок'), this.panelBlock);
    }

    addNewData = (selectorName, data) => {
        addDataToStorage(handler(selectorName, data, this._id));
        this.updateId();
        removeContent(this.contentBlock);
        this.updateData();
        this.initContent();
    }

    removeOldData = id => {
        removeDataStorage(id);
        removeContent(this.contentBlock);
        this.updateData();
        this.initContent();
    }

    changeForm = formName => {
        removeForm();
        renderPanel(createForm(formName), this.panelBlock)
    }
}

export default ManagementCenter;