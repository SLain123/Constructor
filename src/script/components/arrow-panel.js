import {
    management
} from '../index';

(function () {
    const $arrowBtn = document.querySelector('.panel__arrow');
    const $arrowText = document.querySelector('.panel__arrow-text');
    const $panelWrapper = document.querySelector('.panel__wrapper');

    let first = true;

    const hidePanelEvent = () => {
        management.hidePanel();
        $arrowText.innerText = 'показать';

        $arrowBtn.removeEventListener('click', hidePanelEvent);
        $arrowBtn.addEventListener('click', displayPanelEvent);
    }

    const displayPanelEvent = () => {
        management.displayPanel();
        $arrowText.innerText = 'скрыть';

        $arrowBtn.removeEventListener('click', displayPanelEvent);
        $arrowBtn.addEventListener('click', hidePanelEvent);
    }

    window.addEventListener('scroll', () => {
        if (first) {
            first = false;
            window.scrollTo(0, 0);
        } else {
            const topArrow = ((document.documentElement.clientHeight / 2) - 100) + window.pageYOffset;
            $arrowBtn.style.top = `${topArrow}px`;

            if (document.documentElement.clientHeight > 950) {
                $panelWrapper.style.top = `${window.pageYOffset}px`;
            }
        }
    });

    $arrowBtn.addEventListener('click', hidePanelEvent);
})();