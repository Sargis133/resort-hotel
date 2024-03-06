export const onRotatePalmFunc = (type: string): void => {
    let lPalm: HTMLElement | null = document.getElementById('lPalm');
    let rPalm: HTMLElement | null = document.getElementById('rPalm');
    if(lPalm && rPalm) {
        if(type === 'show') {
            lPalm.style.cssText = 'transform: rotate(-16deg); left: -150px;transition: all 2s;'
            rPalm.style.cssText = 'transform: rotate(16deg); right: -150px; transition: all 2s;'
        } else {
            lPalm.style.cssText = 'transform: rotate(0deg); left: 0; transition: all 1s;'
            rPalm.style.cssText = 'transform: rotate(0deg); right: -30px; transition: all 1s;'
        }
    }
}