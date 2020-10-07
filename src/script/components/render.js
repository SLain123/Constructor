const renderContent = (blocks, parentElement) => {
    blocks.forEach(block => {
        parentElement.insertAdjacentHTML('beforeend', block.toHTML());
    });
}

const renderPanel = (block, parentElement) => {
    parentElement.append(block);
}

const renderForm = (block, parentElement) => {
    parentElement.insertAdjacentHTML('beforeend', block);
}

export {
    renderContent,
    renderPanel,
    renderForm
};