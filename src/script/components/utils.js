const row = content => {
    return `<div class="row">${content}</div>`
}

const col = (content, num) => {
    if(!num) {
        return `<div class="col">${content}</div>`
    } else {
        return `<div class="col-${num}">${content}</div>`
    }
}

const getCss = styles => {
    return styles ? Object.keys(styles).map(p => `${p}: ${styles[p]}`).join('; ') : '';
}

const utils = {
    row,
    col,
    getCss
}

export default utils;