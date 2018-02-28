'use strict';

/*

    Console methods to make working and debugging a little brighter.

*/

console.lol = () => {
    const emojis = ['🤣','😂','🙊','😹'];
    console.log(`%c${emojis.random()}`, 'font-size: 2rem;');
};

console.rainbow = function () {
    const rainbowify = {
        string: (arg) => {
            const rainbowArg = colorString(arg);
            const r = 'color: red;';
            const o = 'color: orange;';
            const y = 'color: yellow;';
            const g = 'color: green;';
            const b = 'color: blue;';
            const i = 'color: indigo;';
            const p = 'color: purple;';
        
            console.log(`☁️%c${rainbowArg}☁️`, r, o, y, g, b, i, p, i, b, g, y, o, r);

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
        },
        object: (arg) => {
            console.log(`🌈️`,arg);
        }
    };

    manageArgs(arguments, rainbowify);
};


console.block = function () {
    const blockify = {
        string: (txt) => {
            const styles = 'background-color: black; color: white; padding: 2px 15px; font-weight: bold; text-transform: uppercase;';
            console.log(`%c------------- ${txt} -------------`, styles);
        },
        object: (txt) => {
            console.log('◾⬛', txt, '⬛◾');
        }
    };

    manageArgs(arguments, blockify);
};


function manageArgs (givenArguments, callbacks) {
    let argumentsArray = [...givenArguments];
    if (argumentsArray.length > 1) console.group('' + argumentsArray[0]);
    for (let arg of argumentsArray) {
        
        if (typeof arg === 'string') callbacks.string(arg);
        
        if (Array.isArray(arg)) { 
            arg = `[${arg.join()}]`;
            callbacks.string(arg);
        }
        
        if (typeof arg === 'object') {
            callbacks.object(arg);
        }

    }
    if (argumentsArray.length > 1) console.groupEnd();
}


/*

    Array helper function to get a random element.

*/

Array.prototype.random = function () {
    return this[Math.floor(Math.random() * this.length)];
};