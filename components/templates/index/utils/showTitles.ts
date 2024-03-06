export const onShowTtitleFunc = (id: string, type: string) => {
    let elem: HTMLElement | null = document.getElementById(id)
    if (elem) {
        if(type === 'show') {
            elem.classList.remove('hide')
            elem.classList.add('show')
        } else {
            elem.classList.remove('show')
            elem.classList.add('hide')
        }
    }
}