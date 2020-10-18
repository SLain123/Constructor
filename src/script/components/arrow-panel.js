const arrowControl = (eventHidePanel, eventDisplayPanel) => {
    const $arrowBtn = document.querySelector('.panel__arrow');
    const $arrowText = document.querySelector('.panel__arrow-text');
    let first = true;

    const hidePanel = () => {
        eventHidePanel();
        $arrowText.innerText = 'показать';
        
        $arrowBtn.removeEventListener('click', hidePanel);
        $arrowBtn.addEventListener('click', displayPanel);
    }

    const displayPanel = () => {
        eventDisplayPanel();
        $arrowText.innerText = 'скрыть';
        
        $arrowBtn.removeEventListener('click', displayPanel);
        $arrowBtn.addEventListener('click', hidePanel);
    }

    window.addEventListener('scroll', () => {
        if(first) {
            first = false;
            window.scrollTo(0, 0);
        } else {
            const top = ((document.documentElement.clientHeight / 2) - 100) + window.pageYOffset;
            $arrowBtn.style.top = `${top}px`;
        }
    });

    $arrowBtn.addEventListener('click', hidePanel);
}

export default arrowControl;