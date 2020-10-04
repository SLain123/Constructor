const renderContent = (block, selector) => {
    const $contentBlock = document.querySelector(`.${selector}`);
    $contentBlock.insertAdjacentHTML('beforeend', block.toHTML());
}

export default renderContent;

