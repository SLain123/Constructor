const arrowControl = () => {
    const $arrowBtn = document.querySelector('.panel__arrow');
    let first = true;

    window.addEventListener('scroll', () => {
        if(first) {
            first = false;
            window.scrollTo(0, 0);
        } else {
            const top = ((document.documentElement.clientHeight / 2) - 100) + window.pageYOffset;
            $arrowBtn.style.top = `${top}px`;
        }
    });

}

export default arrowControl;