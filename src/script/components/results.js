const results = (contentBlock, targetBlock) => {
    const allBlocks = Array.from(contentBlock.children);
    let result = [];

    for(let block of allBlocks) {
        const allChildBlocks = Array.from(block.children);

        if(allChildBlocks.length < 3) {                    // проверка на столбцы

            for(let elem of allChildBlocks) {              // перебор всех НЕ столбцов

                if(!elem.classList.contains('delete-btn')) { // проверка на контект, кроме кнопки удалить
                    result.push(handlerBlock(elem));
                }
            }
        } else {
            result.push(handlerColumns(allChildBlocks));
        }
    }

    targetBlock.innerText = result.join('\n');
}

const handlerBlock = elem => {
    const space = '\u00A0\u00A0\u00A0\u00A0';
    return `<div class="row">\n${space}<div class="col">\n${space}${space}${elem.innerHTML}\n${space}</div>\n</div>`;
}

const handlerColumns = elemsArr => {
    const space = '\u00A0\u00A0\u00A0\u00A0';
    let group = '';
        for(let elem of elemsArr) {                // перебор всех столбцов

            if(!elem.classList.contains('delete-btn')) { // кроме кнопки удалить
                group += `\n${space}<div class="col">\n${space}${space}${elem.innerHTML}\n${space}</div>`;
            }
        }
        return `<div class="row">${group}\n</div>`;
}

export {
    results
};