const columnCount = Math.floor(window.innerWidth / 30);
const rowCount = Math.floor(window.innerHeight / 30);




const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
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
        const span = hasChildren ? p.children.item(j) : document.createElement('span');
        span.innerText = getRandomChar();
        const animate = span.animate([
            { 'opacity': '0.7' },
            { 'opacity': '0.2' },
        ], {
            duration: duration,
            delay: delay + (j / 90),
            fill: 'forwards'
        });


        if (j === rowCount - 1) {

            animate.onfinish = () => {
                setUpColumn(p);
            }

        }

        if (!hasChildren) {
            p.appendChild(span);


        }
    }

}



for (let i = 1; i <= columnCount; i++) {
    const p = document.createElement('p');
    setUpColumn(p);

    document.body.appendChild(p);

}
