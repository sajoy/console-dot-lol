'use strict';

/*

    Console methods to make working and debugging a little brighter.

*/

console.lol = () => {
    const emojis = ['🤣','😂','🙊','😹'];
    console.log(`%c${emojis.random()}`, 'font-size: 2rem;');
};


console.rainbow = function () {

    const args = [...arguments];
    for (let arg of args) {

        if (typeof arg !== 'string' && Array.isArray(arg)) arg = `[${arg.join()}]`;
        if (typeof arg === 'object') {
            console.log(`🌈️`,arg);
            continue;
        }

        const rainbowArg = colorString(arg);
        const r = 'color: red;';
        const o = 'color: orange;';
        const y = 'color: yellow;';
        const g = 'color: green;';
        const b = 'color: blue;';
        const i = 'color: indigo;';
        const p = 'color: purple;';

        console.log(`☁️%c${rainbowArg}☁️`, r, o, y, g, b, i, p, i, b, g, y, o, r);
    };

    function colorString (str) {
        const txtLength = str.length;
        const numColors = 13;
        const charsPerColor  = Math.round(txtLength / numColors);

        const txtArray = [];
        let startingI = 0, endingI = charsPerColor;
        while (txtArray.length < 13) {
            txtArray.push(str.substr(startingI,endingI));
            startingI = txtArray.length * charsPerColor;
            if (txtArray.length === 12 && startingI < str.length) endingI = str.length;
        }

        const rainbowStr = txtArray.join('%c');
        return rainbowStr;
    }
};


console.block = txt => {
    const styles = 'background-color: black; color: white; padding: 2px 15px; font-weight: bold; text-transform: uppercase;';
    console.log(`%c-------------${txt}-------------`, styles);
};



/*

    Array helper function to get a random element.

*/

Array.prototype.random = function () {
    return this[Math.floor(Math.random() * this.length)];
};