import {
    getData,
    addDataToStorage,
    removeDataStorage,
    cleanAll
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
    removeForm,
    removeControl
} from '../components/cleaner';
import {
    eventOnRemoveBtns
} from '../components/remove-btn';
import {
    createControlBlock
} from '../components/control-btns';
import {
    results
} from '../components/results';
import {
    displayModalResults
} from '../components/modal';

class ManagementCenter {
    constructor(content, panel, startId, results) {
        this.contentBlock = content;
        this.panelBlock = panel;
        this.dataContent = getData('content');
        this.dataPanel = getData('panel');
        this.results = results;
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
        renderPanel(createControlBlock(), this.panelBlock);
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

    cleanAllData = () => {
        cleanAll();
        this.updateData();
        removeContent(this.contentBlock);
        this.initContent();
    }

    changeForm = formName => {
        removeForm();
        removeControl();
        renderPanel(createForm(formName), this.panelBlock);
        renderPanel(createControlBlock(), this.panelBlock);
    }

    displayResults = () => {
        displayModalResults();
        results(this.contentBlock, this.results);
    }
}

export default ManagementCenter;