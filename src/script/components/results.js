const results = contentBlock => {
    const allBlocks = Array.from(contentBlock.children);
    let resultStore = [];
    let result = [];

    for(let block of allBlocks) {
        const allChildBlocks = Array.from(block.children);

        if(allChildBlocks.length < 3) {                    // проверка на столбцы

            for(let elem of allChildBlocks) {              // перебор всех не столбцов

                if(!elem.classList.contains('delete-btn')) { // проверка на контект, кроме кнопки удалить
                    resultStore.push(elem);
                }
            }
            }
    }

    resultStore.forEach(elem => {
        const row = `<div class="row">\n${elem.innerHTML}\n</div>`;

        result.push(row);
    })

    let finall = result.join('\n');
    console.log(finall);
}

export {
    results
};