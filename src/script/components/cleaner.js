const removeContent = parentBlock => {
    const children = Array.from(parentBlock.children);
    children.forEach(elem => elem.remove());
}

const removeForm = () => {
    const form = document.querySelector('.form');
    form.remove();
}

export {
    removeContent,
    removeForm
};