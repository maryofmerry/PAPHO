const fs = require('fs');

const guide = fs.readFileSync('./guide.tex').toString();
const lines = guide.split('\n').filter( a => a.split('').filter(b => b !== ' ').length).filter(a => a[0] !== '%');

const NUM_BLOCKS = 9;
const CLASSES_PER = 3;

const HTMLify = (tex) => {

    const emph = ["textit", "emph"];
    for(const key of emph) {
        tex = tex.replaceAll(new RegExp(`\\\\${key}{.+}`, 'g'), (match) => match.slice(key.length+2,match.length-1));
    }

    tex = tex.replaceAll('$', '');
    return tex;
}

let i = 0;

const CLASSES = {};

let DAY = 1;
let BLOCK = 2;
for(let t = 0; t < NUM_BLOCKS; t++) { 
    while(!lines[i].includes('\\newpage')) i++;
    i += 2;

    const DAY_CLASSES = [];

    // i at subsection*

    for(let c = 0; c < CLASSES_PER; c++){
        if(!lines[i].startsWith('\\subsection*')) throw "Exit 1";
        const start = lines[i].indexOf('{') + 1; const end = lines[i].indexOf('}');
        const name = lines[i].substring(start, end);

        i++;
        if(!lines[i].startsWith('\\begin{boxenv}')) throw "Exit 2" + lines[i];

        i++;
        const stars = lines[i].split('\\bigstar').length - 1;
        if(stars === 0) throw "Exit 3";

        i++;
        const pre_str = "\\textbf{Prerequisites:}";
        const pre_start = lines[i].indexOf(pre_str);
        if(pre_start === -1) throw "Exit 4" + lines[i];
        const prereqs = lines[i].slice( pre_start + pre_str.length + 1 );

        i++;
        const use_str = "\\textbf{Not Required, but Useful to Know:}";
        const use_start = lines[i].indexOf(use_str);
        const useful = use_start !== -1 ? lines[i].slice(use_start + use_str.length + 1) : '';
        if(use_start !== -1) i++;

        if(!lines[i].startsWith('\\end{boxenv}')) throw `Exit 5 "${lines[i].length}"`;
        i++;
        if (!lines[i].startsWith('\\begin{boxenv}')) throw "Exit 6";
        i++;
        const blurb_str = "\\textbf{Blurb:}";
        const blurb_start = lines[i].indexOf(blurb_str);
        if(blurb_start === -1) throw "Exit 7";
        const blurb = HTMLify(lines[i].slice(blurb_start + blurb_str.length + 1));

        i += 2;

        DAY_CLASSES.push({ name, stars, prereqs, useful, blurb })
    }

    CLASSES[`${DAY}-${BLOCK}`] = DAY_CLASSES;

    BLOCK++;
    if(BLOCK === 3) {
        BLOCK = 1;
        DAY++;
    }
}

fs.writeFileSync('./classes.json', JSON.stringify(CLASSES));
