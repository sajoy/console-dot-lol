/*

    Console methods to make working and debugging a little brighter.

*/

console.lol = txt => {
    const emojis = ['🤣','😂','🙊','😹'];
    const randomEmoji = emojis.random();
    
    console.log(`${randomEmoji} <( ${txt}!! Hahaha!)`);
};


/*

    every thirteen words should be a rainbow progression
    roygbivibgyo

*/
console.rainbow = txt => {
  
    const txtLength = txt.length;
    const numColors = 13;
    const charsPerColor  = Math.round(txtLength / numColors);

    const txtArray = [];
    let startingI = 0, endingI = charsPerColor;
    while (txtArray.length < 13) {
        txtArray.push(txt.substr(startingI,endingI));
        startingI = txtArray.length * charsPerColor;
        if (txtArray.length === 12 && startingI < txt.length) endingI = txt.length;
    }

    const rainbow = txtArray.join('%c');

    const r = 'color: red;';
    const o = 'color: orange;';
    const y = 'color: yellow;';
    const g = 'color: green;';
    const b = 'color: blue;';
    const i = 'color: indigo;';
    const p = 'color: purple;';

    console.log(`☁️%c${rainbow}☁️`, r, o, y, g, b, i, p, i, b, g, y, o, r);
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