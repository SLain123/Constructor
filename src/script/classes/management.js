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
    getStandartStyles,
    results,
    resetResults
} from '../components/results';
import {
    displayModalResults
} from '../components/modal';

class ManagementCenter {
    constructor(content, panel, panelWrapper, startId, resultsHTML, resultsCSS) {
        this.contentBlock = content;
        this.panelBlock = panel;
        this.panelWrapper = panelWrapper;
        this.dataContent = getData('content');
        this.dataPanel = getData('panel');
        this.resultsHTML = resultsHTML;
        this.resultsCSS = resultsCSS;
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
        renderPanel(createSelect(this.dataPanel, 'main-select'), this.panelWrapper);
    }

    renderStartForm() {
        renderPanel(createForm('Заголовок'), this.panelWrapper);
        renderPanel(createControlBlock(), this.panelWrapper);
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
        renderPanel(createForm(formName), this.panelWrapper);
        renderPanel(createControlBlock(), this.panelWrapper);
    }

    displayResults = () => {
        resetResults(this.resultsHTML, this.resultsCSS)
        displayModalResults();
        results(this.contentBlock, this.resultsHTML, this.resultsCSS);
    }

    hidePanel = () => {
        this.panelBlock.classList.add('panel_hide');
        this.panelWrapper.classList.add('panel__wrapper_hide');
        this.contentBlock.classList.add('content_full-size');
    }

    displayPanel = () => {
        this.panelBlock.classList.remove('panel_hide');
        this.panelWrapper.classList.remove('panel__wrapper_hide');
        this.contentBlock.classList.remove('content_full-size');
    }
}

export default ManagementCenter;