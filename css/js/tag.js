colors = {
    p: '#310c1a',
    div: '#003500',
    body: '#54093b',
    section: '#a10c49',
    span: '#e1716f',
    ul: '#7ce897',
    ol: '#e2e07f',
    header: '#110b3e',
    nav: '#601f79',
    main: '#03faf4',
    footer: '#0fffc8',
    form: '#884243',
    default: '#616161',
    get(tagName) {
        return this[tagName] ? this[tagName] : this.default
    }
}

document.querySelectorAll('.tag').forEach(element => {
    const tagName = element.tagName.toLowerCase()

    element.style.borderColor = colors.get(tagName)
    if (!element.classList.contains('nolabel')) {
        const label = document.createElement('label')
        label.style.backgroundColor = colors.get(tagName)
        label.innerHTML = tagName
        element.insertBefore(label, element.childNodes[0])
    }
})
