const removeContent = parentBlock => {
    const children = Array.from(parentBlock.children);
    children.forEach(elem => elem.remove());
}

const removeForm = () => {
    const form = document.querySelector('.form');
    form.remove();
}

const removeControl = () => {
    const controlBlock = document.querySelector('.control-block');
    controlBlock.remove();
}

export {
    removeContent,
    removeForm,
    removeControl
};