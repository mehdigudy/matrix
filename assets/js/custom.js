const columnCount = Math.floor(window.innerWidth / 30);
const rowCount = Math.floor(window.innerHeight / 30);




function random(from, to) {
    return Math.trunc(Math.random() * (to - from + 1) + from);
}

const getRandomChar = () => {
    const charRange = [
        [0x3041, 0x30ff],
        [0x0021, 0x007a],
        [0x00bc, 0x02af],

    ]

    const i = random(0, charRange.length - 1);
    return String.fromCharCode(random(charRange[i][0], charRange[i][1]));


}

const setUpColumn = (p) => {

    const delay = random(100, 300);
    const duration = random(100, 2000);
    const hasChildren = p.children.length > 0;

    for (let j = 0; j < rowCount; j++) {
        const span = hasChildren ? p.children[j] : document.createElement('span');
        span.innerText = getRandomChar();
        const animation = span.animate([
            { 'opacity': '1' },
            { 'opacity': '0.5' },
        ], {
            duration: duration,
            delay: delay + (j / 90),
            fill: 'forwards'
        });


        if (j === rowCount - 1) {

            animation.onfinish = () => {
                setUpColumn(p);
            }

        }

        if (!hasChildren) {
            p.appendChild(span);


        }
    }

}



for (let i = 1; i < columnCount; i++) {
    const p = document.createElement('p');
    setUpColumn(p);
    document.body.appendChild(p);

}
