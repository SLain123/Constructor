const results = (contentBlock, targetHTMLBlock, targetCSSBlock) => {
    const allBlocks = Array.from(contentBlock.children);
    let resultHTML = [];
    let resultCSS = [];

    getStandartStyles(resultCSS);

    for (let block of allBlocks) {
        const allChildBlocks = Array.from(block.children);

        if (allChildBlocks.length < 3) { // проверка на столбцы

            for (let elem of allChildBlocks) { // перебор всех НЕ столбцов

                if (!elem.classList.contains('management-block')) {// проверка контента, кроме кнопок управления
                    getStyles(elem.children[0], resultCSS);
                    resultHTML.push(handlerHTMLBlocks(elem));
                }
            }
        } else {
            getStyles(allChildBlocks[0].children[0], resultCSS);
            resultHTML.push(handlerHTMLColumns(allChildBlocks));
        }
    }

    targetHTMLBlock.innerText = resultHTML.join('\n');
    targetCSSBlock.innerText = resultCSS.join('\n');
}

const handlerHTMLBlocks = elem => {
    const clone = elem.cloneNode(true);
    const space = '\u00A0\u00A0\u00A0\u00A0';
    const childElement = clone.children[0];

    if (childElement.tagName === 'IMG') {
        const path = childElement.getAttribute('data-path');
        childElement.removeAttribute('data-path');
        childElement.setAttribute('src', path);
    }

    childElement.removeAttribute('style');
    return `<div class="row">\n${space}<div class="col">\n${space}${space}${clone.innerHTML}\n${space}</div>\n</div>`;
}

const handlerHTMLColumns = elemsArr => {
    const space = '\u00A0\u00A0\u00A0\u00A0';
    let group = '';
    for (let elem of elemsArr) { // перебор всех столбцов

        if (!elem.classList.contains('management-block')) { // кроме кнопок управления
            const clone = elem.cloneNode(true);

            clone.children[0].removeAttribute('style');

            group += `\n${space}<div class="col">\n${space}${space}${clone.innerHTML}\n${space}</div>`;
        }
    }
    return `<div class="row">${group}\n</div>`;
}

const getStandartStyles = resultCSS => {
    const classStatus = {
        row: false,
        col: false,
        left: false,
        center: false,
        right: false
    }

    const classGuts = {
        row: '.row {\n\u00A0\u00A0\u00A0\u00A0--bs-gutter-x: 1.5rem;\n\u00A0\u00A0\u00A0\u00A0--bs-gutter-y: 0;\n\u00A0\u00A0\u00A0\u00A0display: flex;\n\u00A0\u00A0\u00A0\u00A0flex-wrap: wrap; \n\u00A0\u00A0\u00A0\u00A0margin-top: calc(var(--bs-gutter-y) * -1);\n\u00A0\u00A0\u00A0\u00A0margin-right: calc(var(--bs-gutter-x)/ -2);\n\u00A0\u00A0\u00A0\u00A0margin-left: calc(var(--bs-gutter-x)/ -2);\n\u00A0\u00A0\u00A0\u00A0position: relative;\n }\n',
        col: '.col {\n\u00A0\u00A0\u00A0\u00A0flex: 1 0 0%;\n\u00A0\u00A0\u00A0\u00A0width: 100%;\n\u00A0\u00A0\u00A0\u00A0max-width: 100%;\n\u00A0\u00A0\u00A0\u00A0padding-right: calc(var(--bs-gutter-x)/ 2);\n\u00A0\u00A0\u00A0\u00A0padding-left: calc(var(--bs-gutter-x)/ 2);\n\u00A0\u00A0\u00A0\u00A0margin-top: var(--bs-gutter-y); \n}\n',
        left: '.left {\n\u00A0\u00A0\u00A0\u00A0display: flex; \n}\n',
        center: '.center {\n\u00A0\u00A0\u00A0\u00A0 display: flex;\n\u00A0\u00A0\u00A0\u00A0 justify-content: center; \n}\n',
        right: '.right {\n\u00A0\u00A0\u00A0\u00A0 display: flex; \n\u00A0\u00A0\u00A0\u00A0 justify-content: flex-end; \n}\n'
    }

    const checkClass = className => {
        if (document.querySelector(`.${className}`)) {
            classStatus[className] = true;
        }
    }

    const allClassesToCheck = ['row', 'col', 'left', 'center', 'right'];
    allClassesToCheck.forEach(name => checkClass(name));

    for (name in classStatus) {
        if (classStatus[name]) {
            switch (name) {
                case 'row':
                    resultCSS.push(classGuts.row);
                    break;
                case 'col':
                    resultCSS.push(classGuts.col);
                    break;
                case 'left':
                    resultCSS.push(classGuts.left);
                    break;
                case 'center':
                    resultCSS.push(classGuts.center);
                    break;
                case 'right':
                    resultCSS.push(classGuts.right);
                    break;
            }
        }
    }
}

const getStyles = (elem, resultCSS) => {
    const space = '\u00A0\u00A0\u00A0\u00A0';
    const allStyles = elem.style;
    const classElem = elem.classList.value;

    let result = `.${classElem} { \n`;

    for (let lineStyle in allStyles) {
        if (allStyles[lineStyle] && !isNaN(+lineStyle)) {
            const key = allStyles[lineStyle];
            const prop = allStyles[key];
            result += `${space}${key}: ${prop}; \n`;
        }
    }

    result += `}\n`

    resultCSS.push(result);
}

const resetResults = (targetHTMLBlock, targetCSSBlock) => {
    targetHTMLBlock.innerText = '';
    targetCSSBlock.innerText = '';
}

export {
    results,
    resetResults
};