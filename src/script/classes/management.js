import {
    getData,
    addDataToStorage,
    removeDataStorage,
    cleanAll,
    editContentInStorage
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
    eventOnRemoveBtns,
    eventOnEditBtns
} from '../components/control-events';
import {
    createControlBlock
} from '../components/control-btns';
import {
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

//Обновляет данные в переменной dataContent сверяясь с хранилищем;
    updateData = () => {
        this.dataContent = getData('content');
    }

//Генерирует новый id для создаваемого блока;
    updateId = () => {
        this._id.id += 1;
    }

// Произвеодит рендер контента на страницу, навешивает нужные события на кнопки управления в блоках контента;
    initContent = () => {
        renderContent(this.dataContent, this.contentBlock);
        eventOnRemoveBtns();
        eventOnEditBtns();
    }

// Рендер панели управления на страницу;
    initPanel = () => {
        renderPanel(createSelect(this.dataPanel, 'main-select'), this.panelWrapper);
    }

// Рендер стартовой формы "Заголовок" в панель управления, запуск при первой загрузке страницы;
    renderStartForm = () => {
        renderPanel(createForm('Заголовок'), this.panelWrapper);
        renderPanel(createControlBlock(), this.panelWrapper);
    }

// Добавляет новый инстанс в хранилище на основе данных пришедших из панели управления на сайте, данные пробрасываются через преобразователь и добавляются в храналище, дальше старт ре рендера контента;
    addNewData = (selectorName, data) => {
        addDataToStorage(handler(selectorName, data, this._id));
        this.updateId();
        removeContent(this.contentBlock);
        this.updateData();
        this.initContent();
    }

// По нажатию на кнопку очистки в блоке удаляет данный инстанс в храналище, дальше ре рендер страницы контента;
    removeOldData = id => {
        removeDataStorage(id);
        removeContent(this.contentBlock);
        this.updateData();
        this.initContent();
    }

// Очищает все данные в храналище и делает ре рендер контента на странице;
    cleanAllData = () => {
        cleanAll();
        this.updateData();
        removeContent(this.contentBlock);
        this.initContent();
    }

// Изменяет данные в конкретном инстансе в храналище!!!!!!
    editContent = (id, text, count) => {
        editContentInStorage(id, text, count);
        this.updateData();
        removeContent(this.contentBlock);
        this.initContent();
    }

// При выборе другого блока в панели управления, удаляет форму текущего блока из панели и добавляет форму под новый выбранный блок;
    changeForm = formName => {
        removeForm();
        removeControl();
        renderPanel(createForm(formName), this.panelWrapper);
        renderPanel(createControlBlock(), this.panelWrapper);
    }

// Очищает блок резульатов от старого кода, запускает показ модального окна "Результат" и наполняет окно свежим кодом;
    displayResults = () => {
        resetResults(this.resultsHTML, this.resultsCSS)
        displayModalResults();
        results(this.contentBlock, this.resultsHTML, this.resultsCSS);
    }

// Скрывает панель управления по нажатию на соответствующую кнопку;
    hidePanel = () => {
        this.panelBlock.classList.add('panel_hide');
        this.panelWrapper.classList.add('panel__wrapper_hide');
        this.contentBlock.classList.add('content_full-size');
    }

// Показывает панель управления по нажатию на кнопку "Показать";
    displayPanel = () => {
        this.panelBlock.classList.remove('panel_hide');
        this.panelWrapper.classList.remove('panel__wrapper_hide');
        this.contentBlock.classList.remove('content_full-size');
    }

// Сохряняет данные из хранилища в LocalStorage;
    saveToLocalStorage = () => {
        const contentToJSON = JSON.stringify(this.dataContent);

        localStorage.setItem('content', contentToJSON);
    }

// Очищает хранилище, выгружает данные из LocalStorage и копирует их в хранилище, делает ре рендер контента;
    loadFromLocalStorage = () => {
        const content = JSON.parse(localStorage.getItem('content'));

        cleanAll();
        content.forEach(allDataBlock => {
            const {
                name,
                id
            } = allDataBlock;
            addDataToStorage(handler(name, allDataBlock, id, true));
        });
        removeContent(this.contentBlock);
        this.updateData();
        this.initContent();
    }
}

export default ManagementCenter;