const $body = document.querySelector('body');
const $modalOverlay = document.querySelector('.overlay');
const $closeModalBtn = document.querySelector('.results__close-btn');
const $htmlBtn = document.querySelector('#html');
const $cssBtn = document.querySelector('#css');
const $copyBtn = document.querySelector('#copy');
const $htmlBlock = document.querySelector('.results__html');
const $cssBlock = document.querySelector('.results__css');
const $downloadBtn = document.querySelector('#download');

const displayModalResults = () => {
    $body.style.paddingRight = `${calcPadding()}px`;
    $body.classList.add('no-scroll');
    $modalOverlay.classList.remove('overlay_hide');
    $modalOverlay.classList.add('overlay_visible');
}

const closeModal = () => {
    $body.style.paddingRight = 0;
    $body.classList.remove('no-scroll');
    $modalOverlay.classList.remove('overlay_visible');
    setTimeout(() => {
        $modalOverlay.classList.add('overlay_hide');
    }, 900);
}

const calcPadding = () => {
    return window.innerWidth - document.documentElement.clientWidth;
}

const makeActive = active => {
    if(active === 'html') {
        $cssBtn.classList.remove('results__btn-active');
        $htmlBtn.classList.add('results__btn-active');
        $cssBlock.classList.remove('results_active-block')
        $htmlBlock.classList.add('results_active-block');
    } 
    else if (active === 'css') {
        $htmlBtn.classList.remove('results__btn-active');
        $cssBtn.classList.add('results__btn-active');
        $htmlBlock.classList.remove('results_active-block')
        $cssBlock.classList.add('results_active-block');
    }
}

const copyCode = () => {
    let copyText;

    if($htmlBlock.classList.contains('results_active-block')) {
        copyText = $htmlBlock.innerText;
    } else {
        copyText = $cssBlock.innerText;
    }
    
    if(copyText !== '') {
        navigator.clipboard.writeText(copyText)
            .then(() => {
                $copyBtn.innerText = 'Код в буфере';
                $copyBtn.classList.add('results__btn-copy-success');
            })
            .catch(() => {
                $copyBtn.innerText = 'Ошибка!';
                $copyBtn.classList.add('results__btn-copy-fail');
            })
            .finally(() => {
                setTimeout(() => {
                    $copyBtn.innerText = 'Копировать код'
                    $copyBtn.classList.remove('results__btn-copy-success');
                    $copyBtn.classList.remove('results__btn-copy-fail')},
                    2000);
            })
    } else {
        $copyBtn.innerText = 'Ничего копировать';
        $copyBtn.classList.add('results__btn-copy-fail');
        setTimeout(() => {
            $copyBtn.innerText = 'Копировать код';
            $copyBtn.classList.remove('results__btn-copy-fail')}, 
            2000);
    }
}

const cleanSpaces = data => {
    const rexSpace = /(&nbsp;)+/g;
    const rexBR = /(<br>)+/g;

    return data.replace(rexSpace, '').replace(rexBR, '');
}

const downloadCode = () => {
    const htmlText = `<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<link rel="stylesheet" href="./style.css">\n<title>Сделано через конструктор</title>\n</head>\n<body>\n${$htmlBlock.innerText}\n</body>\n</html>`;
    const htmlLink = document.createElement('a');
    const htmlFile = new Blob([htmlText], {type: 'text/plain'});

    htmlLink.href = URL.createObjectURL(htmlFile);
    htmlLink.download = 'index.html';
    htmlLink.click();

    const css = cleanSpaces($cssBlock.innerHTML);
    const cssLink = document.createElement('a');
    const cssFile = new Blob([css], {type: 'text/plain'});

    cssLink.href = URL.createObjectURL(cssFile);
    cssLink.download = 'style.css';
    cssLink.click();
}

$modalOverlay.addEventListener('mousedown', e => {
    if(e.target === $modalOverlay) {
        closeModal();
    }
});
$closeModalBtn.addEventListener('click', () => closeModal());
$htmlBtn.addEventListener('click', () => makeActive('html'));
$cssBtn.addEventListener('click', () => makeActive('css'));
$copyBtn.addEventListener('click', () => copyCode());
$downloadBtn.addEventListener('click', () => downloadCode());

export {
    displayModalResults
}